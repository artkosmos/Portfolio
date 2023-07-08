import './App.module.scss';
import {Header} from "./components/Header/Header";
import {Greeting} from "./components/Greeting/Greeting";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects";
import {Contacts} from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header/>
      <Greeting/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default App;
