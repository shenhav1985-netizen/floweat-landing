import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import path from 'path';

const contentPath = path.join(process.cwd(), 'data', 'content.json');

async function getConfig() {
  try { return JSON.parse(await readFile(contentPath, 'utf-8')); }
  catch { return {}; }
}

function md5(str: string) {
  return createHash('md5').update(str).digest('hex');
}

function buildAuthHeader(cfg: { cKey: string; cSecret: string; uKey: string; uSecret: string }) {
  const nonce = Math.floor(Math.random() * 1_000_000).toString();
  const timestamp = Math.floor(Date.now() / 1000).toString();
  return [
    `c_key=${encodeURIComponent(cfg.cKey)}`,
    `c_secret=${encodeURIComponent(md5(cfg.cSecret + nonce))}`,
    `u_key=${encodeURIComponent(cfg.uKey)}`,
    `u_secret=${encodeURIComponent(md5(cfg.uSecret + nonce))}`,
    `nonce=${encodeURIComponent(nonce)}`,
    `timestamp=${encodeURIComponent(timestamp)}`,
  ].join(', ');
}

export async function POST(req: NextRequest) {
  const { name, phone, email } = await req.json();
  const config = await getConfig();
  const results: Record<string, string> = {};

  // ─── Google Sheets ────────────────────────────────────────────────────────
  const sheetsUrl = config.sheetsWebhook;
  if (sheetsUrl) {
    try {
      const res = await fetch(sheetsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email: email || '' }),
      });
      results.sheets = res.ok ? 'sent' : `error-${res.status}`;
    } catch {
      results.sheets = 'fetch-error';
    }
  } else {
    results.sheets = 'not-configured';
  }

  // ─── רב מסר ──────────────────────────────────────────────────────────────
  const { cKey, cSecret, uKey, uSecret, listId } = config.ravmesser ?? {};
  if (cKey && cSecret && uKey && uSecret && listId) {
    try {
      const res = await fetch(`https://api.responder.co.il/main/lists/${listId}/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': buildAuthHeader({ cKey, cSecret, uKey, uSecret }),
        },
        body: JSON.stringify({
          subscribers: JSON.stringify({ NAME: name, PHONE: phone, EMAIL: email || '' }),
        }),
      });
      results.ravmesser = res.ok ? 'sent' : `error-${res.status}`;
    } catch {
      results.ravmesser = 'fetch-error';
    }
  } else {
    results.ravmesser = 'not-configured';
  }

  return NextResponse.json({ ok: true, results });
}
