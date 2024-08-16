import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { useTransition, animated } from "@react-spring/web";

import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";
import openSound from "./sound/openSound.mp3";
import logo from "./images/logo.png";
import caseImage from "./images/case.png";
import prizes from "./prizes/prizes";
import randInt from "random-int";
import DescList from "./components/descList/DescList";
import WinPopup from "./components/winPopup/WinPopup";

const prizesWithText = false;
const hideCenterDelimiter = false;
const stopInCenter = true;
const withoutAnimation = true;
const winPrizeIndex = 29;

const App = () => {
  const [start, setStart] = useState(false);
  const [prizeList, setPrizeList] = useState([]);
  const [winPrize, setWinPrize] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const transition = useTransition(isPopupVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 300,
      delay: 0,
    },
  });

  const rollSpeed = 2;
  const prizeIndex = prizes.length * rollSpeed + winPrizeIndex;

  const generatePrizeList = () => {
    let reproducedPrizeList = [];
    let chance = 1;
    let id;

    for (let i = 0; i < 200; i++) {
      chance = randInt(1, 100);
      id = crypto.randomUUID();
      let prize = prizes.find(
        (e) => chance >= e.chance[0] && chance <= e.chance[1]
      );
      reproducedPrizeList.push({ ...prize, id });
    }

    setPrizeList(reproducedPrizeList);
  };

  const generateWInPrize = () => {
    let winPrize = prizeList[prizeIndex];
    setWinPrize(winPrize);
  };

  const handleStart = () => {
    generateWInPrize();
    setStart(true);
  };

  const handlePopupClick = () => {
    setIsPopupVisible(false);
    resetSpin();
    generatePrizeList();
  };

  const resetSpin = () => {
    setStart(false);
  };

  const handlePrizeDefined = () => {
    setIsPopupVisible(true);
  };

  const handleSpacePress = (e) => {
    if (e.key === " " && !isPopupVisible) {
      e.preventDefault();
      console.log("Space clicked");
      handleStart();
    }
  };

  //Effects
  //Generate PrieList onLoad
  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      generatePrizeList();
    }
    return () => {
      ignore = true;
    };
  }, []);

  //handle Space bar click to start spin
  useEffect(() => {
    console.log("event listener ");
    document.addEventListener("keydown", handleSpacePress, false);
    return () => {
      document.removeEventListener("keydown", handleSpacePress, false);
    };
  }, []);

  return (
    <>
      <div className="roulette-container-wrapper">
        <div className="case-image-wrapper">
          <img src={caseImage} className="case-image" />
        </div>
        <div className="roulette-Container base-Container">
          <RoulettePro
            prizes={prizeList}
            prizeIndex={prizeIndex}
            start={start}
            onPrizeDefined={handlePrizeDefined}
            transitionFunction="cubic-bezier(.01,.98,.98,1)"
            options={{ stopInCenter, withoutAnimation }}
            soundWhileSpinning={openSound}
            spinningTime={6}
            defaultDesignOptions={{ hideCenterDelimiter, prizesWithText }}
          />
          <button onClick={handleStart} className="start-button base-button">
            Проебать
          </button>
        </div>
      </div>

      <div className="desc-Container base-Container">
        <DescList descArray={prizes} />
      </div>

      {transition(
        (style, item) =>
          item && (
            <animated.div className="popup-wrapper" style={style}>
              <WinPopup prize={winPrize} handlePopupClick={handlePopupClick} />
            </animated.div>
          )
      )}
    </>
  );
};

export default App;
