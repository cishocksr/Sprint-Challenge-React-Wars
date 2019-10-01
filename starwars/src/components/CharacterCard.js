import React from "react";
// import { Card, CardText, CardBody, CardTitle, Col } from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  background: #786464;
  color: black;
  width: 450px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export default function CharacterCard({
  name,
  gender,
  height,
  eyeColor,
  weight
}) {
  return (
    <Wrapper>
      <Card>
        <h1>Name:{name} </h1>
        <h3>Gender:{gender} </h3>
        <h5>Height:{height} </h5>
        <p>Weight:{eyeColor} </p>
        <p>Eye Color:{weight} </p>
      </Card>
    </Wrapper>
  );
}

// export default function CharacterCard(props) {
//   return (
//     <Col xs="6" lg="4" height="100%">
//       <Card height="100%">
//         <CardBody height="65%">
//           <CardTitle>{props.name}</CardTitle>
//           <hr />
//           <CardText>{props.gender}</CardText>
//           <hr />
//           <CardText height="100%">Height: {props.height}</CardText>
//           <small>Weight: {props.weight}</small>
//           <small>Eye Color: {props.eyeColor}</small>
//         </CardBody>
//       </Card>
//     </Col>
//   );
// }
