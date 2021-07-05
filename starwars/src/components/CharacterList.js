import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
// import { Container, Row } from "reactstrap";

export default function CharacterList(props) {
  const [character, setCharacter] = useState([]);
  console.log(character);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(result => {
        setCharacter(result.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {character.map((char, index) => {
        return (
          <CharacterCard
            key={index}
            name={char.name}
            gender={char.gender}
            height={char.height}
            weight={char.mass}
            eyeColor={char.eye_color}
          />
        );
      })}
    </div>
  );
}
