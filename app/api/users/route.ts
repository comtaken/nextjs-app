// app/api/users/route.ts
import { NextResponse } from 'next/server';
import db from '../../../lib/db';

// 全件取得
export async function GET() {
  try {
    const [rows] = await db.promise().query('SELECT * FROM users');
    return NextResponse.json(rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

// 新規登録
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    const [result] = await db.promise().query(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );

    return NextResponse.json({ message: 'User created', userId: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
