import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Person from './components/Person';

// //functional component
// function App() {
//     return ( 
//     <div className = "App">
//         <h1> Hello world </h1>  
//         <Person/>
//     </div>
//     );
// }

//class component
class App extends Component {
    render() {
        return(
        <div className = "App">
            <h1>Hello World</h1>
            <Person name="Rahim" age="30"/>
            <Person name="Karim" age="28"/>
            <Person name="Jamal" age="31"/>
            <Person name="Rahat" age="32"/>
        </div>
        );
    }
}

//return React.cloneElement('div',{className: "App"}, React.createElement('h1',null,"Hello world"),<Person/>);


//return React.createElement('div', null, React.createElement('h1', null, "I am person component")
export default App;