// this.setState() - to metoda asynchroniczna

class App extends React.Component {
  state = {
    options: ["Wróżba pierwsza", "Wróżba druga", "Wróżba trzecia"],
    option: null,
    value: "",
  };

  handleShowOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      option: this.state.options[index],
    });
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleAddOption = () => {
    if (this.state.value === null) {
      return alert("Wpisz coś...");
    } else {
      const options = [...this.state.options];
      options.push(this.state.value);
      alert(`Wróżba dodana. Aktualne wróżby ${options}`);

      this.setState({
        options,
        value: "",
      });
    }
  };

  render() {
    return (
      <>
        <button onClick={this.handleShowOption}>Zobacz wróżbę</button>
        <hr />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddOption}>Dodaj wróżbę</button>
        {this.state.option != null && <h2>{this.state.option}</h2>}
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
