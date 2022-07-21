const header = <h1 className="title">Witaj na stronie!</h1>;
const classBig = "big";
const handleClick = () => alert("klik");

const main = (
  <div>
    <h1 onClick={handleClick} className="red">
      Pierwszy artykuł
    </h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
      velit!
    </p>
  </div>
);
const footer = (
  <footer>
    <p className={classBig}>Stopka</p>
  </footer>
);
// Elementy można wpisać do tablicy
const app = [header, main, footer];

// Tablicę następnie możemy wyrenderować
ReactDOM.render(app, document.getElementById("root"));
