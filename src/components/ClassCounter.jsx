import { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState ({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div style={{ display: 'flex', textAlign: ' center' }}>
        <button onClick={this.decrement}>-1</button>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

export default ClassCounter;
