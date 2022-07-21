const element = <div>Pierwszy element React</div>;

// Tworząc takie elementy używaj nawiasów
const element2 = (
  <div>
    <p>Tekst</p>
  </div>
);

// Jeżeli przypisujemy do zmiennej dwa lub więcej elementów nadrzędnych to musimy objąć je w "<> ... </>" takie znaczniki - react fragment lub "<React.Fragment></React.Fragment>"
const element3 = (
  <>
    <section className="nazwa-klasy"></section>
    <section></section>
  </>
);

// Class jest zastrzeżone przez JS więc zamiast tego piszemy className
