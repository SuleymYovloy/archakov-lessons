import Block from "./components/Block";
import Article from './components/Article';
import './index.scss'
function App() {
    return (
        <div className="App">
            <Block />
            <Article/>
            <button className="redButton">Красная кнопка</button>
        </div>
    );
}

export default App;
