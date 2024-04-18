import Input from "../components/Input";
import {Link, Outlet} from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import {useState} from "react";

function App() {
    // 사용자 입력
    const [input, setInput] = useState('');
    console.log(input)

    return (
        <div className='m-5 h-full'>
            <Header>
                {/* input, form 의 onSubmit 다 비슷한 기능이지만, 엔터키로 검색 가능유무. */}
                {/* useNavigate 사용시 Link 와 같이 새로고침이 발생하지 않음.*/}
                <Input
                    className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    placeholder="검색어를 입력하세요"
                    onChange={(e) => setInput(e.target.value)}
                />
                <Link to={`/products?name=${input}`} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>클릭</Link>
            </Header>
            <Outlet/>
        </div>
    );
}

export default App;