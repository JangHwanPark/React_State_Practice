import './App.css';
import {DarkModeProvider} from "./context/DarkModeContext";
import PropsPractice from "./components/PropsPractice/PropsPractice";
import PropsSpreadPractice from "./components/PropsPractice/PropsSpreadPractice";
import DefaultPropsPractice from "./components/PropsPractice/DefaultPropsPractice";

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
            <PropsPractice
                name={'리액트'}
                developed={'메타'}
                type={'라이브러리'}
                language={'자바스크립트'}
                license={'오픈소스'}
            />
            <PropsSpreadPractice {...props}/>
            <DefaultPropsPractice name={'리액트'} developed={'메타'}/>
            <DefaultPropsPractice/>
        </DarkModeProvider>
    );
}