export const users = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response) throw new Error("네트워크 요청 오류");
    return response.json();
}