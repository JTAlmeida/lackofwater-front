import { createContext } from 'react';
import useScenes from '../hooks/api/useScenes';
import useEnemies from '../hooks/api/useEnemies';
import useItems from '../hooks/api/useItems';
import useChar from '../hooks/api/useChar';
import { useState } from 'react';

const GameContext = createContext();
export default GameContext;

export function GameProvider({ children }) {
  const { scenes } = useScenes();
  const { items } = useItems();
  const { enemies } = useEnemies();
  const { char } = useChar();
  const [isBattling, setIsBattling] = useState(false);

  return (
    <GameContext.Provider value={{ scenes, items, enemies, char, isBattling, setIsBattling }}>
      {children}
    </GameContext.Provider>
  );
}
