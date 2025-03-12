import "../../Styles/RollCalls.css";

const RollCalls = () => {
  return (
    <div className="container">
      <div className="roll-call-container">
        <div className="roll-call">
          <h2 className="roll-call-title"> OC Roll Call</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3pWRJV3xDqE?si=MpyZS1r2VPCugwh4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="roll-call">
          <h2 className="roll-call-title"> Faci Roll Call</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0LDkP_0D0Yw?si=Gd4brxslMsHtFJFT"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default RollCalls;
