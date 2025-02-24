This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

#### 環境について

WSL2
OracleLinux 9.1  
nvm ver.0.39.3  
node ver.22.14.0  
npm ver.10.9.2  
Next.js ver.15.1.7  
TypeScript ver.5.7.3  
mysql ver.8.0.41 for Linux on x86_64 (MySQL Community Server - GPL)

#### 仮想起動について

WSLバージョン確認　※ WSL2のみ実行可能

```bash
$ wsl --version
```

有効ディストリビューション確認　※MicrosoftStoreからインストールしておく

```bash
$ wsl --list --online
```

Oracle Linux 9.1 のインストール

```bash
$ wsl --install OracleLinux_9_1
```

systemd & sshd の有効化

```bash
$ sudo vi /etc/wsl.conf
[boot]
systemd=true

$ sudo systemctl enable sshd
$ sudo systemctl start  sshd
```

ネットワークアダプター確認  
InterfaceDescription --> Hyper-V Virtual Ethernet Adapter Status UP確認

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
