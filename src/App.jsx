import logo from './logo.svg';
import './App.css';
import CommentList from "./components/Comment/CommentList/CommentList";
import CommentHeader from "./components/Comment/CommentHeader/CommentHeader";
import {DarkModeProvider} from "./context/DarkModeContext";
import AppComment from "./pages/AppComment";

function App() {
    return (
        <DarkModeProvider>
            <AppComment/>
        </DarkModeProvider>
    );
}

export default App;