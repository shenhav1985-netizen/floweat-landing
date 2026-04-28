import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

const contentPath = path.join(process.cwd(), 'data', 'content.json');

export async function GET() {
  try {
    const raw = await readFile(contentPath, 'utf-8');
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json({ phone: '', adminPassword: '', ravmesser: { apiKey: '', listId: '' } });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Read existing to merge (don't overwrite unexpected fields)
    let existing: Record<string, unknown> = {};
    try {
      existing = JSON.parse(await readFile(contentPath, 'utf-8'));
    } catch { /* first time */ }

    const merged = { ...existing, ...body };
    await writeFile(contentPath, JSON.stringify(merged, null, 2), 'utf-8');
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Content save error:', err);
    return NextResponse.json({ error: 'שגיאה בשמירה' }, { status: 500 });
  }
}
