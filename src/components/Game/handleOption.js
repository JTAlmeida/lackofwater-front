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

function randomizeEnemy() {
  const roll = rollD20();

  if (roll >= 7) {
    return 1;
  } else {
    return 2;
  }
}

export default function handleOption({
  option,
  setIsBattling,
  setSceneId,
  setEnemyId,
  setIsAlive,
  currentHP,
  setCurrentHP,
}) {
  const currentSceneId = option?.sceneId;
  const optionId = option?.optionId;

  if (currentSceneId === 9) {
    const enemy = randomizeEnemy();

    localStorage.setItem('isBattling', true);
    setIsBattling(true);

    setEnemyId(enemy);
    localStorage.setItem('enemyId', enemy);
  }

  if (currentSceneId === 10) {
    const res = checkRandomEncounter();

    if (res === 'continue') {
      setSceneId(Number(localStorage.getItem('nextScene')));
    } else {
      setSceneId(res);
    }
  }

  if (currentSceneId === 1 && optionId === 1) {
    localStorage.setItem('isBattling', true);
    localStorage.setItem('nextScene', 2);
    setIsBattling(true);
  }

  if (currentSceneId === 1 && optionId === 2) {
    localStorage.setItem('nextScene', 4);

    const res = checkRandomEncounter();

    if (res === 'continue') {
      setSceneId(4);
    } else {
      setSceneId(res);
    }
  }

  if (currentSceneId === 2) {
    localStorage.setItem('isBattling', true);
    localStorage.setItem('nextScene', 3);
    setEnemyId(2);
    localStorage.setItem('enemyId', 2);
    setIsBattling(true);
  }

  if (currentSceneId === 3) {
    localStorage.setItem('isBattling', true);
    localStorage.setItem('nextScene', 8);
    localStorage.setItem('enemyId', 3);
    setIsBattling(true);
    setEnemyId(3);
  }

  if (currentSceneId === 4 && optionId === 4) {
    setSceneId(5);
  }

  if (currentSceneId === 4 && optionId === 5) {
    localStorage.setItem('nextScene', 7);
    const res = checkRandomEncounter();

    if (res === 'continue') {
      setSceneId(7);
    } else {
      setSceneId(res);
    }
  }

  if (currentSceneId === 5) {
    setCurrentHP(currentHP - 10);
    localStorage.setItem('isBattling', true);
    localStorage.setItem('nextScene', 6);
    localStorage.setItem('enemyId', 2);
    setEnemyId(2);
    setIsBattling(true);
  }

  if (currentSceneId === 6) {
    localStorage.setItem('isBattling', true);
    localStorage.setItem('nextScene', 8);
    localStorage.setItem('enemyId', 3);
    setIsBattling(true);
    setEnemyId(3);
  }

  if (currentSceneId === 7) {
    localStorage.setItem('isBattling', true);
    localStorage.setItem('nextScene', 8);
    localStorage.setItem('enemyId', 3);
    setIsBattling(true);
    setEnemyId(3);
  }

  if (currentSceneId === 8) {
    localStorage.setItem('isBattling', false);
    localStorage.setItem('nextScene', 1);
    localStorage.setItem('enemyId', 1);
    setIsBattling(false);
    setSceneId(1);
    setIsAlive(false);
    return toast('Parabéns, você venceu!');
  }
}
