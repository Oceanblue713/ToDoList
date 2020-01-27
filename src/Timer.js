import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() { 
    this.setState((state) => ({
      seconds: state.seconds + 1
    }));
  }

  render() {
    return (
      <div onClick={() => this.tick()}>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

export default Timer;