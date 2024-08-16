import React from "react";

const WinPopup = (props) => {
  {
    if (props.prize) {
      return (
        <>
          <div className="popup-underlayer"></div>
          <div className="popup-Container base-Container">
            <div className="popup-spinner-wrapper">
              <img src={props.prize.spinnerImage}></img>
              <div className="popup-img-wrapper">
                <img src={props.prize.image}></img>
              </div>
              <span className="popup-base-text popup-win-label">
                Вы выиграли:
              </span>
            </div>

            <span className="popup-base-text popup-prize-text">
              {props.prize.text}
            </span>
            <br />
            <div className="popup-prize-desc-wrapper">
              <span className="popup-base-text popup-prize-desc">
                {props.prize.description}
              </span>
            </div>

            <button
              className="popup-ok-button base-button"
              onClick={props.handlePopupClick}
            >
              Ok
            </button>
          </div>
        </>
      );
    }
  }
};

export default WinPopup;
