import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row, Col } from "reactstrap";

export default function CharacterList(props) {
  const [character, setCharacter] = useState([]);
  console.log(setCharacter);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <Container>
      <Row>
        {character.map(char => {
          return (
            <Col>
              <CharacterCard
                name={char.name}
                birthYear={char.birth_year}
                gender={char.gender}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
