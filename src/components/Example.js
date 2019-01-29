import React from 'react'

class Example extends React.Component {
  constructor() {
    super();
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.reset = this.reset.bind(this);
    this.state = { time: {}, seconds: 0, min: 0 };
    this.timer = 0;
  }

  reset() {
    this.setState({
      seconds: 0,
      min: 0
    })
  }

  //ivestas sekundes pavercia i valanas,minutes,sekundes
  // secondsToTime(secs) {
  //   let hours = Math.floor(secs / (3600));

  //   let divisor_for_minutes = secs % (3600);
  //   let minutes = Math.floor(divisor_for_minutes / 60);

  //   let divisor_for_seconds = divisor_for_minutes % 60;
  //   let seconds = Math.ceil(divisor_for_seconds);

  //   let obj = {
  //     "h": hours,
  //     "m": minutes,
  //     "s": seconds
  //   };
  //   return obj;
  // }

  secondsToTime(min) {
    let hours = Math.floor(min / (60));

    let divisor_for_minutes = min % (60);
    let minutes = Math.floor(divisor_for_minutes / 1);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);


    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  //parodo pradini laika, t.y. nuli visur (be jo tuscia vieta ekrane)
  // componentDidMount() {
  //   let showOnScreeen = this.secondsToTime(this.state.seconds);
  //   this.setState({ time: showOnScreeen });
  // }



  //upon button onclick
  startTimer() {
    // if (this.timer == 0 && this.state.seconds > 0) {
    //   this.timer = setInterval(this.countDown, 1000);
    // }
    //paspaudus mygtuką kas sekunde vykdoma countdown f-ja
    setInterval(this.countDown, 1000);
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    //seconds yra irasytos seconds - 1 
    let seconds = this.state.seconds - 1;
    // let min = this.state.min;

    this.setState({


      time: this.secondsToTime(this.state.min),
      seconds: seconds

    });

    // Check if we're at zero.
    // if (seconds == 0) {
    //   clearInterval(this.timer);
    // }
  }

  render() {
    return (
      <div style={{
        backgroundColor: "orange"
      }}>
        <p>author: {this.props.author} </p>
        <br></br>


        select seconds
        <br></br>
        <input
          type="number"
          onChange={event => this.setState({
            // seconds: event.target.value
            min: event.target.value
          })}
        />
        <button onClick={this.startTimer}>Start Pomodoro</button>
        {/* parodo valandas, minutes, sekundes */}
        h: {this.state.time.h} m: {this.state.time.m} s: {this.state.time.s}

        <button onClick={this.reset}> Reset </button>
      </div >
    );
  }
}


export default Example