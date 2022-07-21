class App extends React.Component {
  state = {
    value: "",
  };

  handleInputChange = (e) => {
    console.log(e.target.value);
    // metoda setState jest asynchroniczna więc czeka aż wykonają się pozostałe metody
    // state ulega zmianie w chwili renderowania naszej strony
    this.setState({
      value: e.target.value,
    });
  };

  handleInputClick = () => {
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.value}
          placeholder="wpisz..."
          onChange={this.handleInputChange}
          type="text"
        />
        <button onClick={this.handleInputClick}>Reset</button>
        <h1>{this.state.value.toUpperCase()}</h1>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
