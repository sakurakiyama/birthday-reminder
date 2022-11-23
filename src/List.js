import React from "react";

const List = ({ peopledata }) => {
  return (
    <div>
      {peopledata.map((element) => {
        return (
          <Newperson
            name={element.name}
            age={element.age}
            image={element.image}
          />
        );
      })}
   </div>
  );
};

const Newperson = ({ name, age, image }) => {
  return (
    <div className="person">
      <img src={image}></img>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default List;
