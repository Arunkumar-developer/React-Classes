import { Component } from "react";

class Counter extends Component {
  state = {
    count: 10,
    message: "My Counter App",
  };

  changeAction = (action) => {
    switch (action) {
      case "INCREMENT":
        this.setState({
          count: this.state.count + 1,
        });
        break;
      case "DECREMENT":
        if (this.state.count > 0) {
          this.setState({
            count: this.state.count - 1,
          });
        }
        break;
      case "RESET":
        this.setState({
          count: 0,
        });
        break;
      default:
        break;
    }
    // this.setState({
    //   count: this.state.count + 1,
    // });

    console.log("increment action working", this.state.count);
  };

  render() {
    return (
      <>
        <h2>{this.state.message}</h2>
        <h4>{this.state.count}</h4>
        <button onClick={() => this.changeAction("INCREMENT")}>
          Increment
        </button>
        <button onClick={() => this.changeAction("DECREMENT")}>
          Decrement
        </button>
        <button onClick={() => this.changeAction("RESET")}>Reset</button>
      </>
    );
  }
}
export default Counter;
