#### 環境について

WSL2
OracleLinux 9.1  
nvm     ver.0.39.3  
node    ver.22.14.0  
npm     ver.10.9.2  
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
$ Get-NetAdapter -IncludeHidden
```
Oracle Linux 9.1 停止
```bash
$ wsl --terminate OracleLinux_9_1
```
Oracle Linux 9.1 アンインストール
```bash
$ wsl --unregister OracleLinux_9_1
```
export & import
```bash
$ wsl --export OracleLinux_9_1 C:\Users\xxxx\backup.tar
$ wsl --import OracleLinux_9_1 C:\Users\xxxx\wsl D:\backup.tar
```
