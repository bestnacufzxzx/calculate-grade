import React, { Component } from 'react';
import Progress from '../Progress';

export default class Skill extends Component{
// 80 >= bg-info, 65 >= bg-success, 50 >= bg-warning, =< 50 bg-danger
    state = {
        language: [
            {name: "C", percent: "62%", color: "bg-success"},
            {name: "JAVA", percent: "50%", color: "bg-danger"},
            {name: "PHP", percent: "65%", color: "bg-success"},
            {name: "PYTHON", percent: "62%", color: "bg-success"},
            {name: "HTML5", percent: "80%", color: "bg-info"},
            {name: "C#", percent: "62%", color: "bg-success"},
            {name: "JavaScript", percent: "65%", color: "bg-success"},
            {name: "SQL", percent: "45%", color: "bg-danger"},
            {name: "XML", percent: "66%", color: "bg-success"},
            {name: "CSS", percent: "75%", color: "bg-info"},
            {name: "jQuery", percent: "65%", color: "bg-success"},
            {name: "REACT", percent: "63%", color: "bg-info"},
            {name: "REACT-NATIVE", percent: "30%", color: "bg-danger"},
            {name: "IONIC", percent: "80%", color: "bg-info"},
            {name: "ANGULAR", percent: "80%", color: "bg-info"},
            {name: "Shell-Script", percent: "74%", color: "bg-info"}
        ]
    }
   
    render(){
        return(
            <div className="container">
            <div className="card-deck mb-3 text-center">
                <div className="card mb-4 shadow-sm">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">ความสามารถ</h4>
                    </div>
                    <div className="card-body">
                        {this.state.language.map(obj => <Progress data ={obj} ></Progress> ) }
                        
                    </div>
                </div>
            </div>
        </div>
        )
    }
}