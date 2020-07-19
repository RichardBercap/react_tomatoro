import React from 'react';

class Timer extends React.Component{
    state={};
    
    constructor(){
        super();
        this.timer = 0;
    }
    componentDidMount(){
        console.log(this.timer);
        this.setState({
            minutes : this.props.minutes,
            seconds : this.props.seconds,
            show_button:true
        });
    }
    renderMinute=(minute)=>{
        let res = '';
        if(minute < 10){
            res = `0${minute}`;
        }else{
            res = minute;
        }

        return res;
    }
    renderSecond=(second)=>{
        let res = '';
        if(second < 10){
            res = `0${second}`;
        }else{
            res = second;
        }

        return res;
    }
    renderTimer=()=>{
        let timer = "";
        let seconds = this.renderSecond(this.state.seconds);
        let minutes = this.renderMinute(this.state.minutes);

        if(this.props.show){
            
            timer = (<div className="container-Timer">
                    <div className="timer">
                    {minutes}:{seconds}
                    </div>
                    {this.state.show_button &&
                        <button onClick={this.startTimer}>Start</button>
                    }
      
                   
               </div>
               
               );


           
       }
        return timer;
    }

    startTimer =()=>{
       
         if (this.timer === 0 ) {
             
          this.timer = setInterval(this.startWork, 1000);
        } 
      }
     startWork=()=>{
        let seconds = this.state.seconds;
        let minutes = this.state.minutes;
        this.setState({
            show_button:false
        });
        if(seconds > 0){
            seconds--;
        }else if(minutes > 0 && seconds === 0){
            seconds = 59;
            minutes--;
        }else if(minutes > 0){
            minutes--;
        }
        this.setState({
          seconds: seconds,
          minutes: minutes
        });

         if (this.state.seconds === 0 && this.state.minutes === 0) { 
          clearInterval(this.timer);
          this.setState({
                minutes : this.props.minutes,
                seconds : this.props.seconds,
                show_button:true
            });
            this.timer = 0;
        }
        
       
    }
    render(){
        return this.renderTimer();
    }
        
        
    
}

export default Timer;