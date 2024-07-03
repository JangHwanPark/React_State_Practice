import './App.css'
import Header from "./components/Header.tsx";
import React, {useState} from "react";
import Form from "./components/Form.tsx";
import ListItem from "./components/ListItem.tsx";

function App() {
  const [programming, setProgramming] = useState([]);

  return (
    <div>
      <Header title="React CURD"/>
      <main>
        <Form
          setProgramming={setProgramming}
          programming={programming}
        />
        <section className="contents">
          <ListItem programming={programming}/>
        </section>
      </main>
    </div>
  )
}

export default App