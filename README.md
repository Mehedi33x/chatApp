# A Chat System with Laravel and Vue Js
This is a chat app built with a clean, professional look using Bootstrap 5. It has Laravel as the backend and Vue for the frontend, and it uses JWT for secure login. Designed as a technical test for RazinSoft Limited, it allows users to send private messages securely. The interface is user-friendly and adapts well to different screen sizes, making it easy to use on any device.

## Features
- Registration and login forms using cards for Name, Email, and Password
- Live search feature for users by name with real-time results
- Modern, responsive interface with a fixed dark sidebar and mobile-friendly toggle
- Secure API ensuring JWT authentication and CORS support
- Management of conversations with a list of ongoing chats
- Private messaging that can only be accessed by the sender and receiver
- Database setup including tables for users, conversations, and messages

## Prerequisites
- PHP 8.1+
- Composer
- Node.js ('^20.19.0)
- MySQL
- XAMPP or Laragon

## Installation
After cloning the project successfully ,install composer and node (node version: '^20.19.0)

for composer-----
```bash
composer install 
```
for node
```bash
npm install 
```
generate .env and declare the db configaration in .env
```bash
cp .env.example .env
```
Configure environment (`.env`):
   ```env
   APP_NAME=ChatApp
APP_ENV=local
APP_KEY=base64:RPz3aFgNQgkWLKnlck16QRWk+opMq5WdpSE8IjKjpR0=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=chatapp
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=pusher
CACHE_DRIVER=file
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=2028522
PUSHER_APP_KEY=92f6ccff66c3f8c15b3b
PUSHER_APP_SECRET=5bd304dd24c429603659
PUSHER_APP_CLUSTER=ap2
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https

VITE_APP_NAME="${APP_NAME}"
VITE_PUSHER_APP_KEY=92f6ccff66c3f8c15b3b
VITE_PUSHER_APP_CLUSTER=ap2

JWT_SECRET=JckQBD1v5aLXJLkN1qDqwgPSrN7ZnAcjUtAZyC3TmCTauShvQVUdcxuyzrhbGBkS
   ```
generate app key
```bash
php artisan key:generate 
```
set jwt secret code for token verify
```bash
php artisan jwt:secret
```
Create database:
   ```bash
   mysql -u root -e "CREATE DATABASE IF NOT EXISTS chatapp"
   ```
run the migrations and seeder for demo user create
```bash
php artisan migrate:fresh --seed
```
now if all those set , run this command to start the app
```bash
php artisan serve
```
and
```bash
npm run dev
```
