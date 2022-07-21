// Debugowanie - wykrywanie błędów w kodzie
// W dowolnym miejscu w kodzie możemy wpisać debugger; wtedy wykonywanie kodu zatrzyma się do tego miesjca, zostaniemy przeniesieni do przeglądarki gdzie będziemy mogli sprawdzić linijka po linijce nasz kod
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false,
    };
    this.handleMessageButton = this.handleMessageButton.bind(this);
  }

  // handleMessageButton = () => {
  //   this.setState({
  //     messageIsActive: !this.state.messageIsActive,
  //   });
  // };

  // Można to zrobić w ten sposób a niektórzy robią tylko tak jeśli wykorzystują state
  handleMessageButton() {
    this.setState((prevState) => ({
      messageIsActive: !prevState.messageIsActive,
    }));
  }

  render() {
    const text =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum reiciendis sit rerum quo similique itaque ea eius consequuntur molestias, laborum tempora et, esse deserunt molestiae.";
    console.log(this.state.messageIsActive);
    return (
      <>
        <button onClick={this.handleMessageButton}>
          {this.state.messageIsActive ? "Ukryj" : "Pokaż"}
        </button>
        {/* Z && to wyrażenie logiczne, które mowi że jeśli lewa strona jest True to wyświetl prawą stronę jeżeli lewa strona jest False to nic nie rób */}
        {/* Tak działa */}
        {this.state.messageIsActive && <p>{text}</p>}
        {/* Lub tak */}
        {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
      </>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
