// Create express Server
const express = require('express');
const app = express();

app.listen(8080, () => {
    console.log('test')
});

// 누가 example/products 로 방문하면
// 상품(products) 관련 안내문 띄우기
app.get('/products', (req, res) => {
    console.log('products')
    res.send('상품 페이지')
})

// HTML 파일 전송하는법
app.get('/', (req, res) => {
    console.log('products')
    res.sendFile(__dirname + '/index.html')
})