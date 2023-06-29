import styled from "styled-components";

export const BigBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const PokeImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyPokemonImage = styled.img`
  height: 100%;
  width: 20%;
  transition: transform 0.3s;
  object-fit: contain;
  &.moving-image {
    animation: moveImage 1s linear infinite;
  }

  @keyframes moveImage {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(0%);
    }
  }

  &.eating {
    animation: eatAnimation 3s linear;
  }

  @keyframes eatAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
