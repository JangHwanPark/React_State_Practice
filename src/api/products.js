export const getFetchProducts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!response) throw new Error("네트워크 요청 오류");
    return response.json();
}