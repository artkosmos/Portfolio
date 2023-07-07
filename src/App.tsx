import './App.module.scss';
import {Header} from "./components/Header/Header";
import {Greeting} from "./components/Greeting/Greeting";
import {Skills} from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header/>
      <Greeting/>
      <Skills/>
    </div>
  );
}

export default App;
