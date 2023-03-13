import React from "react";

const Name_1 = () => {
  state = {
    persons: [
      {
        id: "7365345245",
        name: "Hepuka",
        age: "26",
      },

      {
        id: "736534569755245",
        name: "Katika",
        age: "25",
      },

      {
        id: "73653452245",
        name: "Petike",
        age: "17",
      },
      {
        id: "71365345245",
        name: "Panka",
        age: "15",
      },
    ],

    masikState: "ez a másik kiinduló state",
    lathatosag: true,
  };

  /*   nameChangeHandler = (ujNev) => {
    //nem javasolt megoldás, a state-et nem lehet direkt megváltoztatni
    //this.state.persons[0].name = "Béla";

    //setSate()-et kell használni

    console.log(this.state);

    this.setState({
      persons: [
        {
          name: ujNev,
          age: 45,
        },

        {
          name: "Katika",
          age: 20,
        },
      ],
    });

    console.log(this.state);
  };
 */

  nevValtozasHandler = (event, id) => {
    //komponens azonosítása amelyben a szövegmezőt használtuk
    const szemelyIndex = this.state.persons.findIndex((aktSzemely) => {
      return aktSzemely.id === id;
    });

    //komponens megtalálása a megszerzett index alapján
    const szemely = { ...this.state.persons[szemelyIndex] };

    szemely.name = event.target.value;

    const szemelyek = [...this.state.persons];

    szemelyek[szemelyIndex] = szemely;

    this.setState({
      persons: szemelyek,
    });
  };

  // elrejti vagy megjeleníti a komponenseket
  kapcsolo = () => {
    const lathato = this.state.lathatosag;

    //a state-et változtatjuk meg, annak is csak a lathatosag tulajdonsagat
    this.setState({
      lathatosag: !lathato,
    });
  };

  personComponentDeleteHandler = (index) => {
    //ezzel egy másolatot készítünk az eredti persons objektumról
    //nem hivatkozást adunk át az eredetire, ez nem tól biztonságos
    //ha slice-nak nem adunk paramétert akkor a tömb összes elemét adja vissza egy új tömbben
    //máskülönben 2 paramétert vár, az első, a kezdőpozíció, hányadik tömbelemtől kezdve adja vissza az elemeket, és a 2. a végpozíció
    //const szemelyek = this.state.persons.slice(); ES5 verzió

    //ES6 verzió a spead operátor
    const szemelyek = [...this.state.persons];

    //splice metódussaal törlünk
    //átadjuk a splice-nak az indexet amit törölni akarunk és a 2. paraméterként az 1-et mert ennyi komponenst akarunk törölni
    szemelyek.splice(index, 1);

    //törlés után frissíteni kell a komponenseket a DOM-ban
    //seState-nek egy objektumot adunk át, azt amelyiket a DOM-ban módosítani akarunk
    this.setState({ persons: szemelyek });
  };

  const stilus = {
    backgroundColor: "green",
    font: "ingherit",
    border: "2px solid grey",
    padding: "8px",
    cursor: "pointer",
    color: "white",
  };

  let persons = null;

  if (this.state.lathatosag) {
    persons = (
      <div>
        {/* a persons adatbázis kilistázása, komponensek listázása */}
        {this.state.persons.map((item, index) => {
          return (
            <Person
              name={item.name}
              age={item.age}
              delete={() => this.personComponentDeleteHandler(index)}
              key={item.id}
              change={(event) => this.nevValtozasHandler(event, item.id)}
            />
          );
        })}

        {/*
            eredeti beégetett komponens listázás
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.nameChangeHandler.bind(this, "Első komponens név")}
            change={this.nevValtozasHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.nameChangeHandler.bind(this, "Második komponens név")}
            /* click={(e) => this.nameChangeHandler("Szivecském")} 
            change={this.nevValtozasHandler}
          >
            Ez itt a gyerekelem
          </Person> */}
      </div>
    );

    stilus.backgroundColor = "red";
  }

  let classes = ["red", "bold"].join(" "); //eredmény: red bold

  return (
    <div>
      <h1 className={classes}>React alapok</h1>

      {/*   
        divbe kell rakni a komponenseket, ha valamit egyszerre szeretnénk velük
        végrehajtani 
        
        {}-be kell rakani a komponenseket tartalmazó div-et ha egy JS kifejezést szeretnénk érvényesíttetni vagy egy utasítást lefuttatni
        */}

      {/* 
        ha ternáris operátort akarunk használni a div-re
        {this.state.lathatosag ? ( */}

      {/* 
        ternáris operátor hamis ága        
        ) : null} */}

      <button style={stilus} onClick={this.kapcsolo}>
        Kapcsoló
      </button>

      {persons}
    </div>
  );
};

export default Name_1;
