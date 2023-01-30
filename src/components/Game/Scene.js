import GameContext from '../../contexts/GameContext';
import { useContext } from 'react';
import styled from 'styled-components';

export default function Scene({ char }) {
  const { scenes } = useContext(GameContext);

  const scene = scenes.find((scene) => scene.id === char?.currentSceneId);

  let sceneOption1;
  let sceneOption2;

  if (scene.SceneOptions[0].Option.description) {
    sceneOption1 = scene.SceneOptions[0].Option.description;
  }

  if (scene.SceneOptions[1].Option.description) {
    sceneOption2 = scene.SceneOptions[1].Option.description;
  }

  return (
    <div>
      <p>{scene?.description}</p>
      <div>
        {sceneOption1 !== undefined && <p>{sceneOption1}</p>}
        {sceneOption2 !== undefined && <p>{sceneOption2}</p>}
      </div>
    </div>
  );
}
