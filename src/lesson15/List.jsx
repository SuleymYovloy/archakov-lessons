import React from "react";

// export default class List extends React.Component {
//     state = {
//         numbers: [1, 2, 3],
//     };

//     addRandomNumber = () => {
//         const randNumber = Math.round(Math.random() * 10);
//         this.setState({
//             numbers: [...this.state.numbers, randNumber],
//         });
//     };

//     componentDidMount() {
//         console.log('Компонент был отображен')
//     }

//     componentDidUpdate(prevProps, prevState) {
//         // console.log(prevProps, prevState, this.props, this.state);
//         if (this.state.numbers.length !== prevState.numbers.length) {
//             console.log('Список обновился')
//         }
//     }
    
//     componentWillUnmount() {
//         console.log('Компонент был удален')
//     }

//     render() {
//         return (
//             <div>
//                 <ul>
//                     test
//                     {this.state.numbers.map((num, index) => (
//                         <li key={index}>{num}</li>
//                     ))}
//                 </ul>
//                 <button onClick={this.addRandomNumber}>Новое число</button>
//             </div>
//         );
//     }
// }


function App() {
    const [numbers, setNumbers] = React.useState([1, 2, 3, 5, 6, 7]);
    const [count, setCount] = React.useState(0);

    const addNumnber = () => {
        const randNumber = Math.round(Math.random() * 10);
        const newArr = [...numbers, randNumber];
        setNumbers(newArr);
    };

    //componentDidMount
    React.useEffect(() => {
        console.log("Компонент был отображен");
        return () => {
          console.log("will unmount");
        }
    }, [numbers, count]);

    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            <button onClick={addNumnber}>Генерировать</button>
        </div>
    );
}

export default App;
