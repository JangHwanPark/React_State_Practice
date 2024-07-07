# React & socket.io chat

- [x] concurrently 패키지를 설치하여 클라이언트와 서버 동시에 실행되도록 한다.
```shell
npm install concurrently --save-dev
```

concurrently 를 사용하기 위해 package.json 을 수전한다.
```shell
{
  "scripts": {
    "dev": "npx concurrently \"nodemon src/server.js\" \"vite\"",
    "start": "node src/server.js"
  }
}
```