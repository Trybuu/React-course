// Propsy są tylko do odczytu nie powinniśmy ich zmieniać, wersja react development nie pozwoli na zmianę wartości props, wersja react production pozwoli...

class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result,
  };

  handleClick = (type, number) => {
    // debugger;
    if (type === "substraction") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number,
      }));
    } else if (type === "reset") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: this.props.result,
      }));
    } else if (type === "addition") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }));
    }
  };

  render() {
    return (
      <>
        <MathButton
          name="-1"
          number={1}
          type="substraction"
          click={this.handleClick}
        />
        <MathButton
          name="reset"
          number={0}
          type="reset"
          click={this.handleClick}
        />
        <MathButton
          name="+1"
          number={10}
          type="addition"
          click={this.handleClick}
        />
        <ResultPanel count={this.state.count} result={this.state.result} />
      </>
    );
  }
}

const MathButton = (props) => {
  // Gdy jetseśmy w class to this.props gdy w funkcyjnej to props.name
  return (
    <button onClick={() => props.click(props.type, props.number)}>
      {props.name}
    </button>
  );
};

const ResultPanel = (props) => {
  return (
    <>
      <h1>
        Liczba kliknięć: {props.count}{" "}
        {props.count > 10 ? <span>Więcej niż 10</span> : null}
      </h1>
      <h1>Wynik: {props.result}</h1>
    </>
  );
};

const startValue = 0;
ReactDOM.render(
  <Counter result={startValue} />,
  document.getElementById("root")
);
