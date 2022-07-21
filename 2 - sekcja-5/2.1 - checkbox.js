const PositiveMessage = () => <p>Możesz kupić karton trojanów gratulacje!</p>;
const NegativeMessage = () => <p>Musisz jeszcze poczekać...</p>;

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmited: false,
  };

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmited: false,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.isFormSubmited) {
      this.setState({
        isFormSubmited: true,
      });
    }
  };

  displayMessage = () => {
    if (this.state.isFormSubmited) {
      if (this.state.isConfirmed === true) {
        return <PositiveMessage />;
      } else {
        return <NegativeMessage />;
      }
    } else return null;
  };

  render() {
    return (
      <>
        <h1>Kup karton trojanów za połowę ceny!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            checked={this.state.isConfirmed}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="age">Mam co najmniej 18 lat</label>
          <hr />
          <button type="submit">Kup Bilet</button>
        </form>
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
