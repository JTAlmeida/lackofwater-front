import GameContext from '../../contexts/GameContext';
import { useContext } from 'react';
import styled from 'styled-components';
import Item from './Item';

export default function Battle({ char }) {
  const { enemies } = useContext(GameContext);

  return (
    <>
      <p>Dica: poções curam 50% de sua vida máxima, mas você perde o turno.</p>
      <Item char={char} />
    </>
  );
}
