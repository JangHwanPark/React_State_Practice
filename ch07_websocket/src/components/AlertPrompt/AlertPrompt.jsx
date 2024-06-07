import './App.css';
import {useState} from "react";

function AlertPrompt() {
    const [user, setUser] = useState('');

    const showAlert = () => {
        alert(user)
    }

    const showPrompt = () => {
        const response = prompt("사용자 이름을 입력하세요.");
        setUser(response)
        console.log(response)
    }

    return (
        <div>
            <button onClick={showAlert}>Show Alert</button>
            <button onClick={showPrompt}>Show Prompt</button>
        </div>
    );
}

export default AlertPrompt;