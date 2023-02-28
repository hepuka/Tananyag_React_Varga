import React from "react";
import "../styles/Person.style.css";

const Person = (props) => {
  return (
    <div className="Person">
      <p>Név: {props.name}</p>
      Kor: {props.age} év
      <p></p>
      <p>
        {props.name} véletlen száma: {Math.floor(Math.random() * 5 + 1)}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} /* value={props.name} */ />
      <br />
      {/*       <button onClick={props.click}>Nevet módosít komponensből</button>
      <br /> */}
      <input type="button" value="Töröl" onClick={props.delete} />
    </div>
  );
};

export default Person;
