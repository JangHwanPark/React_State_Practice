import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import {useState} from "react";
import Form from "../components/Form";

function App() {
    // 사용자 입력
    const [input, setInput] = useState('');
    
    return (
        <div className='m-10 h-full'>
            <Header>
                {/* input, form 의 onSubmit 다 비슷한 기능이지만, 엔터키로 검색 가능유무. */}
                {/* useNavigate 사용시 Link 와 같이 새로고침이 발생하지 않음.*/}
                <Form input={input} setInput={setInput}/>
            </Header>
            <Outlet/>
        </div>
    );
}

export default App;