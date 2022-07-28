class Form extends React.Component {
  state = {
    city: "",
    text: "",
    isLoved: true,
    number: "2",
  };
  handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value, //W nawiasach kwadratowych można odwołać się do wartości właściwości np. e.target i przypisać poprzez ' : ' atrybuty inputów które są tak samo nazwane jak w obiekcie state
      });
    }
  };
  render() {
    return (
      <div>
        <label>
          Podaj miasto:
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście:
          <input
            name="text"
            type="textarea"
            value={this.state.cityInfo}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            name="isLoved"
            type="checkbox"
            checked={this.state.isLoved}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Ile razy byłeś?
          <select
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">Więcej</option>
          </select>
        </label>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
