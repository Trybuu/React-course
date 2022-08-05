const Person = (props) => {
  return (
    <li>
      <span>{props.name}</span>
      <button onClick={props.delete}>Usuń</button>
    </li>
  );
};
class List extends React.Component {
  state = {
    people: [
      { id: 1, name: "Jan Kowalski" },
      { id: 2, name: "Piotr Cebulski" },
      { id: 3, name: "Marysia Wernicka" },
      { id: 4, name: "John Simpson" },
    ],
  };

  handleDelete(id) {
    console.log(this, id);
    const people = [...this.state.people];
    const index = people.findIndex((person) => person.id === id);
    people.splice(index, 1);
    this.setState({
      people,
    });
  }

  render() {
    return (
      <div className="people-list">
        <h1>Lista osób:</h1>
        <ol>
          {this.state.people.map((person) => (
            <Person
              key={person.id}
              name={person.name}
              delete={this.handleDelete.bind(this, person.id)}
            />
          ))}
        </ol>
      </div>
    );
  }
}
ReactDOM.render(<List />, document.getElementById("root"));
