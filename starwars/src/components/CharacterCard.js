import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  background-color: blue;
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
`;

const CharacterCard = props => {
  return (
    <Wrapper>
      <Card>
        <h1>{props.name}</h1>
        <p>{props.birth_year}</p>
        console.log(props.birthYear);
        <p>{props.gender}</p>
      </Card>
    </Wrapper>
  );
};

export default CharacterCard;
