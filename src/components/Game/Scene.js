import GameContext from '../../contexts/GameContext';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import handleOption from './handleOption';

export default function Scene({ char, setIsBattling }) {
  const { scenes } = useContext(GameContext);
  const [disableChoices, setDisableChoices] = useState(false);

  const scene = scenes.find((scene) => scene.id === char?.currentSceneId);

  let sceneOption1;
  let sceneOption2;

  if (scene.SceneOptions[0].Option.description) {
    sceneOption1 = scene.SceneOptions[0];
  }

  if (scene.SceneOptions[1].Option.description) {
    sceneOption2 = scene.SceneOptions[1];
  }
  return (
    <div>
      <p>{scene?.description}</p>
      <div>
        {sceneOption1 !== undefined && disableChoices === false && (
          <Button
            onClick={() => {
              handleOption({ option: sceneOption1, setIsBattling });
              setDisableChoices(true);
            }}
          >
            {sceneOption1?.Option.description}
          </Button>
        )}
        {sceneOption2 !== undefined && disableChoices === false && (
          <Button
            onClick={() => {
              handleOption({ option: sceneOption2, setIsBattling });
            }}
          >
            {sceneOption2?.Option.description}
          </Button>
        )}
      </div>
    </div>
  );
}

const Button = styled.button`
  width: 30%;
  border-radius: 20px;
  border: 1px solid white;
  background-color: white;
  cursor: pointer;

  &&:hover {
    border: 3px solid #add8e6;
    background: black;
    color: #add8e6;
  }
`;
