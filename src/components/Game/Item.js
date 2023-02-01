//import GameContext from '../../contexts/GameContext';
//import { useContext } from 'react';
import potion from '../../assets/images/potion.png';
import styled from 'styled-components';
import { toast } from 'react-toastify';

export default function Item({ char }) {
  //const { items } = useContext(GameContext);

  return (
    <>
      {char?.CharacterItems.length > 0 ? (
        <Potion color={'white'}>
          <p>{char.CharacterItems.quantity}</p>
        </Potion>
      ) : (
        <Potion
          color={'red'}
          onClick={() => {
            toast('Você não possui poções!');
          }}
        >
          <p>0</p>
        </Potion>
      )}
    </>
  );
}

const Potion = styled.div`
  border-radius: 30px;
  border: 1px solid green;
  display: flex;
  width: 50px !important;
  height: 50px !important;
  background-color: green;
  background-image: url(${potion});
  background-repeat: no-repeat;
  background-size: 50px;
  ${(props) => (props.color === 'red' ? 'color: red;' : 'color: white;')}
  font-size: 20px;
  cursor: pointer;

  p {
    width: 50px;
    height: 50px;
  }
`;
