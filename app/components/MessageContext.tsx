import { createContext, useState, useContext, ReactNode } from 'react';

// Contextの作成（デフォルト値を設定）
const MessageContext = createContext({
  message: '',
  setMessage: (msg: string) => {},
});

// Providerコンポーネント
export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState('Hello, world!');
  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

// Contextを利用するためのカスタムフック
export const useMessage = () => useContext(MessageContext);
