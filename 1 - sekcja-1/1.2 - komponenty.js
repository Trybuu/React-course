// Komponent funkcyjny, bezstanowy
const Header = () => {
  return <h1>Witaj na stronie przywoływaczu!</h1>;
};

// Komponent klasowy, stanowy
// Trzeba użyć funkcji render
// Komponent klasowy posiada obiekt state - odpowiedzialny jest za dynamiczność apliakcji
class Blog extends React.Component {
  //   state = {
  //     number: 0,
  //   };
  render() {
    return (
      <section>
        <h2>Artykuł</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sequi?
        </p>
      </section>
    );
  }
}

// Komponent nadrzędny
const App = () => {
  return (
    //   Zwracamy komponenty, które stworzyliśmy wcześniej
    <>
      <Header />
      <Blog />
    </>
  );
};

// Wyrenderowanie aplikacji w przeglądarce
ReactDOM.render(<App />, document.getElementById("root"));
