export function createConnection(serverUrl, roomId) {
    return {
        // 채팅 서버에 연결 성공시
        connect() {
            console.log(`✅ ${serverUrl}에서 "${roomId}"방에 연결중 ...`);
        },
        // 채팅 서버에 연결 실패시
        disconnect() {
            console.log(`❌ ${serverUrl}의 "${roomId}"방에서 연결이 끊어졌습니다. ...`);
        }
    }
}