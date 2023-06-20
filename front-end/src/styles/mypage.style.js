import styled from "styled-components";
import { Link } from "react-router-dom";
import ball from "../../public/Image/ball.png";

export const MainWrapper = styled.div`
  width: 100%;
  // background-color: pink;
`;

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  overflow-y: auto;
  max-height: 70vh;
`;
export const MyPokemonGrid = styled.div`
  width: 100%;
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
`;

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MyPokemonImage = styled.img`
  width: 60%;
  transition: transform 0.3s;
`;
export const MyPokemonCard = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  // width: 100%;
  // height: 300px;
  background-color: #f8f8ff;
  border-radius: 5px;
  overflow: hidden;

  &:hover ${MyPokemonImage} {
    transform: scale(1.4);
  }
`;

export const PokemonImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 0.5rem;
`;

export const PokemonName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
  color: black;
`;
export const MyPokemonName = styled.h3`
  font-size: 15px;
  margin-bottom: 0.2rem;
  color: black;
`;
export const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
export const Button = styled.button`
  height: 20px;
  font-size: px;
`;
export const Subtitle = styled.h1`
  color: red;
`;
export const GuardContainer = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px;
`;

export const MonsterBall = styled.div`
  width: 200px;
  height: 150px;
  background-image: url(${ball});
  background-size: 100% auto;
  background-position: right center;
  background-repeat: no-repeat;
`;
