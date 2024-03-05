import './App.css';
import {DarkModeProvider} from "./context/DarkModeContext";
import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom";

export default function App() {
    const props = {
        name: 'Next.js',
        developed: 'Vercel',
        type: '프레임워크',
        language: '자바스크립트, TypeScript',
        license: '오픈소스',
    };

    return (
        <DarkModeProvider>
            <Navbar/>
            <Outlet/>
        </DarkModeProvider>
    );
}