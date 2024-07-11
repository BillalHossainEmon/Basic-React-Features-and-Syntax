import React,{Component} from 'react';

// function Person() {
//     return (
//     <div>
//         <h1>Number: {Math.random()}</h1> 
//     </div>)
// };

// let Person = (props) => {
//     return (
//         <div>
//             <h3>Name: {props.name} and Age: {props.age} years</h3>
//         </div>
//     )
// }

class Person extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
                <h3>Name: {this.props.name} and Age: {this.props.age} years</h3>
            </div>
        )
    }
};
export default Person;