const ValidationMessage = (props) => {
  const { txt } = props; //Można podać kilka atrybutów np const {txt, title, count} = props;
  return <p>{txt}</p>;
};
const OrderForm = (props) => {
  const { submit, isConfirmed, change } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" checked={isConfirmed} onChange={change} />
      <label htmlFor="age">Mam co najmniej 18 lat</label>
      <hr />
      <button type="submit">Kup Bilet</button>
    </form>
  );
};
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
        return <ValidationMessage txt="Możesz kupić karton trojanów" />;
      } else {
        return <ValidationMessage txt="Musisz dorosnąć!" />;
      }
    } else return null;
  };

  render() {
    const { isConfirmed, isFormSubmited } = this.state; //destrukturyzacja - wyciąganie wartości z tablicy, obiektu i przypisywanie do zmiennej, dzięki temu poniżej zamiast pisać this.state.isConfirmed możemy napisać po prostu isConfirmed
    console.log(isConfirmed);
    return (
      <>
        <h1>Kup karton trojanów za połowę ceny!</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </>
    );
  }
}

ReactDOM.render(<TicketShop />, document.getElementById("root"));
