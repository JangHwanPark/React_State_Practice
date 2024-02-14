import logo from './logo.svg';
import './App.css';
import CommentList from "./components/Comment/CommentList/CommentList";
import CommentHeader from "./components/Comment/CommentHeader/CommentHeader";
import {DarkModeProvider} from "./context/DarkModeContext";

function App() {
  return (
      <DarkModeProvider>
        {/* 헤더 */}
        <CommentHeader/>
        {/* 추가된 코멘트 */}
        <CommentList/>
      </DarkModeProvider>
  );
}

export default App;