function rollD20() {
  return Math.floor(Math.random() * (20 - 1) + 1);
}

export default function handleOption({ option, setIsBattling }) {
  const sceneId = option.sceneId;
  const optionId = option.optionId;

  const num = rollD20();

  if (sceneId === 1 && optionId === 1) {
    setIsBattling(true);
  }

  if (sceneId === 1 && optionId === 2) {
  }
}
