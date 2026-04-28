import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get('file') as File | null;
    const dest = form.get('dest') as string | null;

    if (!file || !dest) {
      return NextResponse.json({ error: 'חסרים פרטים' }, { status: 400 });
    }

    // Validate destination is within public folder only
    const safeDest = dest.replace(/\.\./g, '').replace(/\\/g, '/');
    if (!safeDest.startsWith('/images/') && !safeDest.startsWith('/videos/')) {
      return NextResponse.json({ error: 'נתיב לא חוקי' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const publicDir = path.join(process.cwd(), 'public');
    const fullPath = path.join(publicDir, safeDest);

    // Ensure directory exists
    await mkdir(path.dirname(fullPath), { recursive: true });
    await writeFile(fullPath, buffer);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'שגיאה פנימית' }, { status: 500 });
  }
}
