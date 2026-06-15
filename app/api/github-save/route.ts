import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import path from 'path';

const OWNER = 'shenhav1985-netizen';
const REPO  = 'floweat-landing';
const FILE  = 'data/site-content.json';

export async function POST(req: NextRequest) {
  try {
    const { content, adminPassword } = await req.json();

    // Verify password
    const contentJson = JSON.parse(
      readFileSync(path.join(process.cwd(), 'data', 'content.json'), 'utf8')
    );
    if (adminPassword !== contentJson.adminPassword) {
      return NextResponse.json({ error: 'סיסמה שגויה' }, { status: 401 });
    }

    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      return NextResponse.json({ error: 'GITHUB_TOKEN חסר' }, { status: 500 });
    }

    // Get current SHA
    const getRes = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE}`,
      { headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' } }
    );
    const { sha } = await getRes.json();

    // Commit new content
    const encoded = Buffer.from(JSON.stringify(content, null, 2), 'utf8').toString('base64');
    const putRes = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${FILE}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Update site content via admin panel',
          content: encoded,
          sha,
        }),
      }
    );

    if (!putRes.ok) {
      const err = await putRes.json();
      return NextResponse.json({ error: err.message ?? 'שגיאה בשמירה' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
