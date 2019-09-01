import React, { Component } from 'react';
import './App.css';
import MenuBar from './Layout/MenuBar';
import Header from './Layout/Header';
import Containers from './containers/containers';
import Footer from './Layout/Footer';
import Content from './Layout/Content';
import { BrowserRouter, Route} from "react-router-dom";
import Skill from './components/skill/Skill';
import Activity from './components/Activity/activity';
import Education from './components/Education/education';


// import Containers from './containers/containers';
// import Button from './components/Button';
// import TextInput from './components/TextInput';



// class App extends Component {

//   state = {
//     score: '',
//     grade: '' 
//   }
  
//   ihputChangeHandler = (event) =>{
//     let value = event.target.value;
//     this.setState({
//       score: value
//     });
//     // console.log("Hello");

//   }

//   calculateGradeHandler = () => {
//     let score = this.state.score;
//     let grade = '';
//     if(score >= 80){
//       grade = 'A'
//     } else{
//       grade = 'S'
//     }
//     this.setState({
//       grade: grade
//     });
//     // alert("asdasd")
//     // console.log("asdasd");
//     // this.state.grade = grade;
//     // console.log(this.state.grade);

// }

//   Button
//   render(){
//     return(
//       // TextInput
//       <Containers>
// <       div className="App">
//           <div class="input-group mb-3">
//             <TextInput value={this.state.score} classes="form-control" placeholder="input your score" change={this.ihputChangeHandler} />
//             <div className="input-group-prepend">
//             <Button classes= "btn btn-outline-secondary" click={this.calculateGradeHandler }> Click </Button>
//             </div>
//           </div>
//         </div>
//         <h1> Grade : {this.state.grade} </h1>
//       </Containers>
//     )
//   }
// }

function About(){
  return(
    <div>
      <h2>About</h2>
    </div>
  )
}


class App extends Component {
  render(){
    return(  
      <BrowserRouter>
        <MenuBar></MenuBar>
        <Containers>
            <Header></Header>
            <Route exact path="/" component={Content}/>
            <Route path="/skill" component={Skill}/>
            <Route path="/education" component={Education}/>
            <Route path="/activity" component={Activity}/>

            <Footer></Footer>
        </Containers>
      </BrowserRouter>
    )
  }

}

export default App;
