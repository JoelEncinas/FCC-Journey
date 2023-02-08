import React from "react";
import "./App.css";

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const ops = ["/", "x", "−", "+", "="];

class App extends React.Component {
  state = {
    lastPressed: undefined,
    currentNumber: "0",
    previousNumber: undefined,
    operation: undefined,
  };

  handleClick = (e) => {
    const { lastPressed, currentNumber, previousNumber, operation } =
      this.state;
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
            previousNumber: undefined,
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
            previousNumber: currentNumber,
            currentNumber: "0",
          });
        } else {
          const evaluation = eval(
            `${previousNumber} ${operation} ${currentNumber}`
          );
          this.setState({
            operation: innerText,
            previousNumber: evaluation,
            currentNumber: "0",
          });

          if(innerText === '='){
            this.setState({
              currentNumber
            })
          }
        }
      }
    }
  };

  render() {
    const { currentNumber } = this.state;

    return (
      <div className="App">
        <div id="display" className="display pr-5">
          {currentNumber}
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
              <button className="btn btn-secondary dot-width" onClick={this.handleClick}>
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
