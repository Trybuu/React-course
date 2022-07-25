class App extends React.Component {
  state = {
    avaibleProducts: 7,
    shoppingCart: 1,
  };
  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1,
    });
  };

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1,
    });
  };
  handleBuy = () => {
    alert("Kupiłeś");
    this.setState({
      avaibleProducts: this.state.avaibleProducts - this.state.shoppingCart,
      shoppingCart: 0,
    });
  };
  render() {
    const { shoppingCart, avaibleProducts } = this.state;
    return (
      <div>
        <button
          disabled={shoppingCart === 0 ? true : false}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span style={shoppingCart === 0 ? { opacity: 0.3 } : { opacity: 1 }}>
          {" "}
          {shoppingCart}{" "}
        </span>
        <button
          disabled={shoppingCart === avaibleProducts ? true : false}
          onClick={this.handleAddToCart}
        >
          +
        </button>
        <hr />
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
