import Block from "./components/Block";
import './index.scss'
function App() {
    return (
        <div className="App">
            <Block />
            <div className="article">
                <h2>Это важная новость!</h2>
                <p>
                    Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit.
                    Architecto, quos.
                    <button>Читать далее</button>
                </p>
            </div>
        </div>
    );
}

export default App;
