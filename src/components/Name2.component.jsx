import React, { useState } from "react";
import Person from "./Person.component";

const Name_2 = () => {
  const [actualState, newState] = useState({
    persons: [
      {
        name: "Zolika",
        age: "26",
      },

      {
        name: "Katika",
        age: "25",
      },
    ],

    masikstate: "ez a másik kiinduló state",
  });

  const nameChangeHandler = () => {
    //itt hívjuk meg a useState második paraméterét a newState-et amivel módosítjuk a kezdő vagy éppen az aktuális state-et

    //itt csak azt kell megadni amit változtatni szeretnénk (most épp mindkét objektumot megváltoztatom)
    newState({
      persons: [
        {
          name: "Hepuka",
          age: "45",
        },

        {
          name: "Szívecském",
          age: "20",
        },
      ],
    });
  };

  //itt már a módosított state-et írja ki
  console.log(actualState);
  return (
    <div className="App">
      <h1>Alapok</h1>

      <Person
        name={actualState.persons[0].name}
        age={actualState.persons[0].age}
      />

      <Person
        name={actualState.persons[1].name}
        age={actualState.persons[1].age}
      >
        Ez itt a gyerekelem
      </Person>

      <button onClick={nameChangeHandler}>Nevet módosít</button>
    </div>
  );
};

export default Name_2;
