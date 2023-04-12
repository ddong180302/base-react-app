import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponents';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import React from 'react';

class App extends React.Component {

  state = {
    name: 'dong',
    address: 'da nang',
    age: 21
  }


  render() {
    return (
      <div className="App">
        my name
        {
          this.state.name
        }
        <MyComponent />
      </div>
    );
  }
}


// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   console.log('check state: ', useSelector(state => state.counter))
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//       <MyComponent />
//     </div>
//   );
// }
export default App;
