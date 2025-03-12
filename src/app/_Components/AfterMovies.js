import "../../Styles/RollCalls.css";

const AfterMovies = () => {
  return (
    <div className="container">
      <div className="roll-call-container">
        <div className="roll-call">
          <h2 className="roll-call-title"> Day 01</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EsbtQ_vij7o?si=SUIH8VZuJ7M_fWJv"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="roll-call">
          <h2 className="roll-call-title"> Day 02</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yRB-kL7DEgM?si=zftXiCzNzq_4x-Vt"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="roll-call">
          <h2 className="roll-call-title"> After Movie</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/a2nHPmdJ3KI?si=2TXynT4wzYpyzStM"
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

export default AfterMovies;



