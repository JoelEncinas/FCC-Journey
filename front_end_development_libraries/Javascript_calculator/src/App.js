import React from "react";
import "./App.css";

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const ops = ["/", "*", "-", "+", "="];

class App extends React.Component {
  state = {
    lastPressed: undefined,
    currentNumber: "0",
    calc: undefined,
    operation: undefined,
  };

  handleClick = (e) => {
    const { currentNumber, calc, operation } = this.state;
    const { innerText } = e.target;

    if (!Number.isNaN(Number(innerText))) {
      if (currentNumber === "0") {
        this.setState({
          currentNumber: innerText,
        });
      } else {
        this.setState({
          currentNumber: currentNumber + innerText,
        });
      }

      return;
    }

    switch (innerText) {
      case "C":
        {
          this.setState({
            currentNumber: "0",
            calc: undefined,
            operation: undefined,
          });
        }
        break;
      case ".":
        {
          if (!currentNumber.includes(".")) {
            this.setState({
              currentNumber: currentNumber + innerText,
            });
          }
        }
        break;
      default: {
        if (!operation) {
          this.setState({
            operation: innerText,
            calc: currentNumber,
            currentNumber: "",
          });
        } else if (innerText === "=") {
          const evaluation = eval(`${calc}${operation}${currentNumber}`);
          this.setState({
            operation: undefined,
            calc: evaluation,
            currentNumber: evaluation,
          });
        } else {
          const evaluation = eval(`${calc}${operation}${currentNumber}`);
          this.setState({
            operation: innerText,
            calc: evaluation,
            currentNumber: evaluation,
          });
        }
      }
    }
  };

  render() {
    const { currentNumber, calc, operation } = this.state;

    return (
      <div className="App">
        <p style={{ position: "absolute", top: 0 }}>
          {JSON.stringify(this.state, null, 2)}
        </p>
        <div id="display" className="display pr-5">
          <small>{calc} {operation}</small>
          <p>{currentNumber}</p>
        </div>
        <div className="controls d-flex align-items-center justify-content-center p-3">
          <div className="nums-container mx-3">
            <div className="nums-wrapper">
              <button
                className="btn btn-block btn-danger c-width"
                onClick={this.handleClick}
              >
                C
              </button>
              {nums.map((num) => (
                <button
                  className="btn btn-light"
                  key={num}
                  onClick={this.handleClick}
                >
                  {num}
                </button>
              ))}
              <button
                className="btn btn-secondary dot-width"
                onClick={this.handleClick}
              >
                .
              </button>
            </div>
          </div>
          <div className="ops-container mx-3">
            {ops.map((op) => (
              <button
                className="btn btn-primary operation-width"
                key={op}
                onClick={this.handleClick}
              >
                {op}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
