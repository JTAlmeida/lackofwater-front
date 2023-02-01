import GameContext from '../../contexts/GameContext';
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from './Item';
import { toast } from 'react-toastify';

function rollD20() {
  return Math.floor(Math.random() * (20 - 1) + 1);
}

function checkRandomEncounter() {
  const roll = rollD20();

  if (roll >= 15) {
    return 'continue';
  }

  if (roll > 0 && roll < 8) {
    return 9;
  }

  if (roll >= 8 && roll < 15) {
    return 10;
  }
}

function rollD4() {
  return Math.floor(Math.random() * (4 - 1) + 1);
}

function damageCalc({ char, enemy, type }) {
  const playerRoll = rollD4();
  const enemyRoll = rollD4();

  if (type === 'enemy') {
    return enemy.atk + enemyRoll - (char.def + playerRoll);
  }

  if (type === 'player') {
    return char.atk + playerRoll - (enemy.def + enemyRoll);
  }
}

export default function Battle({ char }) {
  const { enemies, enemyId, isBattling, setIsBattling, setIsAlive, setSceneId, currentHP, setCurrentHP, setEnemyXP } =
    useContext(GameContext);
  const [enemyCurrentHP, setEnemyCurrentHP] = useState(1);

  const enemy = enemies?.find((enemy) => enemy.id === enemyId);

  useEffect(() => {
    setCurrentHP(char?.hp);
    setEnemyCurrentHP(enemy?.hp);
  }, [enemies, isBattling, char]);

  if (currentHP <= 0 && char !== undefined) {
    localStorage.setItem('isBattling', false);
    localStorage.setItem('nextScene', 1);
    localStorage.setItem('enemyId', 1);
    setIsBattling(false);
    setCurrentHP(0);
    setSceneId(1);
    setIsAlive(false);
    return toast('Você morreu!');
  }

  if (enemyCurrentHP <= 0 && char !== undefined) {
    toast('Você venceu!');
    localStorage.setItem('isBattling', false);
    setIsBattling(false);
    setCurrentHP(currentHP);
    setEnemyXP(enemy?.exp);
    const res = checkRandomEncounter();

    if (res === 'continue') {
      setSceneId(Number(localStorage.getItem('nextScene')));
    } else {
      setSceneId(res);
    }
  }

  return (
    <div>
      <p>Dica: poções curam 50% de sua vida máxima, mas você perde o turno.</p>
      <Player>
        Char: {char?.name} | lvl:{char?.lvl} | xp:{char?.xp}/{char?.lvl * 50 + (char?.lvl - 1) * (50 * (char?.lvl - 1))}{' '}
        | atk: {char?.atk} | def: {char?.def}
        <p>
          HP:{currentHP}/{char?.lvl * 10 + 90}
        </p>
      </Player>
      <Enemy>
        {enemy?.name}
        <p>
          HP: {enemyCurrentHP || 0}/{enemy?.hp}
        </p>
        <img src={enemy?.imgUrl} alt="enemy" />
      </Enemy>
      <Button
        onClick={() => {
          const playerDamage = damageCalc({ char, enemy, type: 'player' });
          if (playerDamage >= 0) {
            setEnemyCurrentHP(enemyCurrentHP - playerDamage);
          }
          const enemyDamage = damageCalc({ char, enemy, type: 'enemy' });
          if (enemyDamage >= 0) {
            setCurrentHP(currentHP - enemyDamage);
          }
        }}
      >
        ATACAR! (Dano causado: {char?.atk + 1 - (enemy?.def + 4)}~{char?.atk + 4 - (enemy?.def + 1)})
      </Button>
      <Item char={char} />
    </div>
  );
}

const Player = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;

  p {
    font-size: 20px;
    color: red;
  }
`;

const Enemy = styled.div`
  width: 40%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;

  img {
    height: 150px;
    width: 150px;
    margin-top: -35px;
  }
`;

const Button = styled.button`
  width: auto;
  border-radius: 20px;
  border: 1px solid white;
  background-color: white;
  cursor: pointer;
  margin-bottom: 10px;

  &&:hover {
    border: 3px solid #add8e6;
    background: black;
    color: #add8e6;
  }
`;
