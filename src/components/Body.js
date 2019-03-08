import React from 'react';
import TimeInput from './TimeInput'
import StartButton from './StartButton'
import RunningTime from './RunningTime'
import ResetButton from './ResetButton'
import soundfile from './music.mp3'

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: '',
            value: '',
            isPlaying: false,
            resting: false,
        }
        this.audio = new Audio(soundfile);
    }


    play = () => {
        this.audio.play();
    }

    //get inserted value in minutes
    handleChange = event => {
        // event.preventDefault();
        this.setState({
            value: event.target.value,
        })
    }

    startClock = () => {
        if (this.state.value <= 0) {
            alert("please enter a positive number");
            this.setState({
                value: '',
                seconds: ''
            });
            return false;
        }
        else {
            this.count();
            this.setState({
                isPlaying: true,
                value: '00',
                seconds: '00',
                resting: !this.state.resting,
            })
            this.manageInterval = setInterval(this.count, 1000);
            let time = this.state.value;
            //inserted time converted to seconds
            this.inputInSeconds = time * 60;
        }
    }


    count = () => {
        //shows minutes (largest full integer without seconds)
        let min = Math.floor(this.inputInSeconds / 60);
        //shows inserted seconds (without minutes)
        let sec = Math.floor(this.inputInSeconds - (min * 60));
        this.setState({
            value: min,
            seconds: sec,
        })

        if (sec < 10) {
            this.setState({
                seconds: "0" + this.state.seconds,
            })
        }
        if (min < 10) {
            this.setState({
                value: "0" + min,
            })
        }
        if (min === 0 & sec === 0) {
            clearInterval(this.manageInterval);
            this.play();
            this.setState({
                isPlaying: !this.state.isPlaying,
                value: '',
                seconds: ''
            })
        }
        this.inputInSeconds--
    }

    reset = () => {
        clearInterval(this.manageInterval);
        this.setState({
            isPlaying: false,
            resting: false,
            value: '',
            seconds: ''
        })
    }


    render() {
        const isPlaying = this.state.isPlaying;
        //const isBreak = this.state.isBreak;
        const resting = this.state.resting;


        if (!isPlaying && resting) {
            return (
                <div className="component">
                    <TimeInput
                        handleChange={this.handleChange}
                        notice="Short Break! Set a time limit for resting:"
                        value={this.state.value} seconds={this.state.seconds}
                    />
                    <StartButton
                        startClock={this.startClock}
                        buttonTitle={this.state.resting ? 'Set Break' : 'Start Pomodoro'}
                    />
                    <img src={require("./warhol.jpg")} />
                </div>
            )
        }

        if (isPlaying) {
            return (
                <div className="component">
                    <RunningTime min={this.state.value} sec={this.state.seconds} />
                    <ResetButton reset={this.reset} />
                    <img src={require("./warhol.jpg")} />


                </div>
            );
        }

        else {
            return (
                <div className="component">
                    <TimeInput handleChange={this.handleChange}
                        notice="Enter pomodoro time in minutes:"
                        value={this.state.value} seconds={this.state.seconds}
                    />
                    <StartButton
                        startClock={this.startClock}
                        buttonTitle={this.state.resting ? 'Set Break' : 'Start Pomodoro'}
                    />
                    <img src={require("./warhol.jpg")} />
                </div>
            );
        }
    }
}


export default Body