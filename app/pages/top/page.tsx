// app/pages/top/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { MessageProvider, useMessage } from '../../components/MessageContext';

import { Stack, Button } from '@mui/material';
export default function Top() {
  type User = {
    id: number;
    name: string;
    email: string;
  };
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // ユーザー一覧取得
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // 新規ユーザー登録
  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      alert('名前とメールアドレスを入力してください');
      return;
    }

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        setName('');
        setEmail('');
        fetchUsers(); // ユーザー一覧を再取得して更新
      } else {
        const errorData = await res.json();
        alert(`エラー: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      {/* <Stack spacing={2} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack> */}
      <h1>Users List</h1>
      <MessageProvider>
        <MessageComponent />
      </MessageProvider>
      <a href='/pages/next'>next</a>
      {/* ユーザー登録フォーム */}
      <form onSubmit={handleAddUser} style={{ marginBottom: '20px' }}>
        <input
          type='text'
          placeholder='名前'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginRight: '10px' }}
        />
        <input
          type='email'
          placeholder='メールアドレス'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginRight: '10px' }}
        />
        <button type='submit'>追加</button>
      </form>

      {/* ユーザー一覧表示 */}
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
// useMessage() を使用するコンポーネントを追加
const MessageComponent = () => {
  const { message } = useMessage();
  return <h2>{message}</h2>;
};
