// app/api/users/route.ts
import { NextResponse } from 'next/server';
import db from '../../../lib/db';

export async function GET() {
  try {
    // MySQL クエリを実行
    const [rows] = await db.promise().query('SELECT * FROM users');

    // データを返す
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
