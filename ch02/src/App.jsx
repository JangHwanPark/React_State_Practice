import './App.css';
import Input from "./components/Input";
import {Outlet} from "react-router-dom";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header>
                <Input/>
                <Button title={'클릭'}/>
            </Header>
            <Outlet/>
        </div>
    );
}

export default App;