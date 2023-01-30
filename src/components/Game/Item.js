import GameContext from '../../contexts/GameContext';
import { useContext } from 'react';
import potion from '../../assets/images/potion.png';
import styled from 'styled-components';

export default function Item({ char }) {
  const { items } = useContext(GameContext);
  console.log(char);

  return (
    <>
      {char?.CharacterItems.length > 0 ? (
        <Potion color={'yellow'}>
          <p>{char.CharacterItems.quantity}</p>
        </Potion>
      ) : (
        <Potion color={'red'}>
          <p>0</p>
        </Potion>
      )}
    </>
  );
}

const Potion = styled.div`
  border-radius: 30px;
  border: 1px solid red;
  display: flex;
  width: 50px !important;
  height: 50px !important;
  background-color: white;
  background-image: url(${potion});
  background-repeat: no-repeat;
  background-size: 50px;
  ${(props) => (props.color === 'red' ? 'color: yellow;' : 'color: green;')}
  padding-bottom: 7px;
  font-size: 20px;
`;
