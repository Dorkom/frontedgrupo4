import React from "react";

const Influencer = () => {
  return (
    <div className="d-flex flex-column">
      <h1>INFLUENCERS</h1>
      <div className="d-flex justify-content-evenly gap-4">
        <div1 className="d-flex flex-column">
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/J2ygMfCKY1M"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div2>
            <cite>
              This computer is absolutely insane! Once again if you want to
              check out this brand new Redux gaming PC it's an absolute super
              computer. Highly, highly recommend it.
            </cite>
          </div2>
          <h2>MR TOP 5.</h2>
          <img src="icono1.jpeg" />
          <p>
            Thanks to @MrTop5 for showing off the unboxing of the #BuildRedux
            Pc! Check out his video to see his PC and setup!
          </p>
        </div1>
        <div className="d-flex flex-column">
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/J9rCiFzZocM"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <cite>
            You basically just pick which games you play, which performance you
            want, and it'll suggest a rig for you. They make things much, much
            simpler and again for only $75 bucks? Okay!
          </cite>
          <h2>SHORT CIRCUIT.</h2>
          <img src="icono2.jpeg" />
          <p>Thanks for the awesome review @ShortCircuit!</p>
        </div>
      </div>
    </div>
  );
};

export default Influencer;
