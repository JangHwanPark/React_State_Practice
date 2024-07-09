import express from "express";
import http from "http";
import {Server} from "socket.io";
import cors from "cors";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// cors 미들웨어
app.use(cors());

// Vite 설정을 위해 미들웨어
async function startServer() {
  const vite = await createViteServer({
    server: { middlewareMode: 'html' },
    root: path.resolve(__dirname, '..'),
    appType: 'custom'
  });

  app.use(vite.middlewares);

  // 서버 생성 및 소켓 설정
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
      credentials: true
    }
  });

  // 첫 번째 인자 ev 값은 사용자 정의 가능
  // 서버와 클라이언트에서 사용하는 이벤트 이름은 동일해야한다.
  // 클라이언트와 서버 모두 동일한 이벤트를 처리하도록 코드를 작성해야한다.
  io.on("connection", socket => {
    socket.on('enterRoom', username => {
      console.log("새로운 사용자 연결");
      console.log(`${username}님이 입장하셨습니다.`);
      io.emit("welcome", `${username} 님이 입장하셨습니다!!!`);
    })

    socket.on("sendMessage", message => {
      io.emit("receiveMessage", message)
    });

    socket.on("disConn", username => {
      console.log("연결을 종료했습니다.")
      io.emit("disConn", `${username} 님이 종료하셨습니다.`);
    });

    socket.on("disconnect", () => {
      console.log("클라이언트와의 연결이 종료되었습니다.");
    })
  })

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`서버가 ${PORT}에서 시작합니다.`)
  })
}

// Vite 미들웨어 시작
startServer();