import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    const currentCount = this.state.count;

    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count: currentCount + 1,
    });
  };
  decrement = () => {
    const currentCount = this.state.count;

    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count: currentCount - 1,
    });
  };
  resetss = () => {
    window.location.reload(false);

  };
  render() {
    return <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
      <button onClick={this.resetss}>Reset</button>
    </div>
  }
}

render(<App />, document.getElementById('root'));