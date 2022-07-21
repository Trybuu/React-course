class ShopingList extends React.Component {
  // W state tworzymy wartości, które mają się zmieniać. Umieszczamy w nim tylko takie elementy.
  state = {
    items1: "ogórki",
    items2: "sok",
    items3: "coś do picia",
  };

  render() {
    return (
      <>
        <h1>Lista zakupów</h1>
        <ol>
          <ItemList name={this.state.items1} />
          <ItemList name={this.state.items2} />
          <ItemList name={this.state.items3} />
        </ol>
      </>
    );
  }
}
// Używając komponentu funkcyjnego zalecane
// const ItemList = (props) => {
//   return (
//     <>
//       <li>{props.name}</li>
//     </>
//   );
// };

// Używając komponentu klasowego niezalecane
class ItemList extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

ReactDOM.render(<ShopingList />, document.getElementById("root"));
