import React from 'react';
import Timer from './Timer';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            minutes:2,
            seconds:0,
            showTimeWork:true
        };
    }
    renderTimeWork=()=>{
        let setIntervalTime = setInterval(()=>{
            if(this.state.seconds !== 0){
                this.setState({
                    seconds:this.state.seconds - 1
                })
            }else{
                clearInterval(setIntervalTime);
            }
            return <Timer minutes={this.state.minutes} 
            seconds={this.state.seconds} 
            show={this.state.showTimeWork}/>
        },1000);
        
    }
    render(){
        return <div>
            
            <Timer minutes={this.state.minutes} 
                    seconds={this.state.seconds} 
                    show={this.state.showTimeWork}/>
            
            <hr/>
            <button type="buttton" title="Start Work">Work</button>
           
            
        </div>
    }
}

export default Main;