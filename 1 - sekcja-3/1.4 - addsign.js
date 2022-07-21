class App extends React.Component {
  state = {
    text: "",
  };

  handleClick = () => {
    // setState to funkcja wbudowana, służy do aktualizowania wartości obiektu state, sprawi że widok zostanie zaktualizowany, zmiana zajdzie dynamicznie
    const number = Math.floor(Math.random() * 10);
    this.setState({
      text: this.state.text + number,
    });
  };

  render() {
    //   Tutaj też możemu przechowywać zmienne
    return (
      <>
        <button onClick={this.handleClick}>{this.props.btnTitle}</button>
        <PanelResult text={this.state.text} />
      </>
    );
  }
}

const PanelResult = (props) => {
  return <h1>{props.text}</h1>;
};

// Możemy skorzystać z propsów również tutaj
ReactDOM.render(
  <App btnTitle="dodaj cyfrę" />,
  document.getElementById("root")
);

// Wersja poprawiona
