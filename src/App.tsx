import './App.module.scss';
import {Header} from "./components/Header/Header";
import {Greeting} from "./components/Greeting/Greeting";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header/>
      <Greeting/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App;
