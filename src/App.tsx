import './App.module.scss';
import {Header} from "./components/Header/Header";
import {Greeting} from "./components/Greeting/Greeting";

function App() {
  return (
    <div className="App">
      <Header/>
      <Greeting/>
    </div>
  );
}

export default App;
