import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isEnvelopeFlipped, setIsEnvelopeFlipped] = useState(true);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleEnvelopeClick = (e) => {
    e.stopPropagation();
    setIsEnvelopeFlipped(!isEnvelopeFlipped);
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();
    setIsLetterOpen(!isLetterOpen);
    if (!isLetterOpen) {
      setIsEnvelopeOpen(true);
    } else {
      setIsEnvelopeOpen(false);
    }
  };

  const handleCloseLetter = (e) => {
    e.stopPropagation();
    setIsLetterOpen(false);
    setIsEnvelopeOpen(false);
  };

  return (
    <div className="container">
      <div 
        className={`envelope-wrapper ${isEnvelopeOpen ? 'flap' : ''} ${isEnvelopeFlipped ? 'flipped-wrapper' : ''}`}
      >
        <div 
          className={`envelope ${isEnvelopeFlipped ? 'flipped' : ''}`}
          onClick={handleEnvelopeClick}
        >
          {/* Front of envelope (heart is here) */}
          <div className="envelope-front">
            <div className="envelope-top"></div>
            <div className="letter-inside">
              <div className="text">
                <strong>To Ria,</strong>
                <p>
                  Can I be your Valentine?
                </p>
              </div>
            </div>
          </div>

          {/* Back of envelope (no heart) */}
          <div className="envelope-back">
            <div className="envelope-back-content">
              <div className="stamp">
                <div className="stamp-design">
                  <span className="stamp-text">LOVE</span>
                  <div className="stamp-heart">❤</div>
                </div>
              </div>
              <div className="recipient-info">
                <p className="recipient-label">To: <span className="recipient-name">Ria</span></p>
                <p className="recipient-address">The Most Special Person</p>
                <p className="recipient-zip">My Heart ❤</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Heart is visible when envelope is NOT flipped AND envelope is NOT open */}
        {!isEnvelopeFlipped && !isLetterOpen && (
          <div 
            className="heart" 
            onClick={handleHeartClick}
          ></div>
        )}
      </div>

      {/* Instruction text */}
      <div className="envelope-instruction">
        {isEnvelopeFlipped 
          ? "Click the envelope to see front" 
          : isLetterOpen 
            ? "Letter opened" 
            : "Click the heart to open"}
      </div>

      {/* Letter Popup with delay */}
      {isLetterOpen && (
        <div className={`letter-overlay ${isLetterOpen ? 'visible' : ''}`} onClick={handleCloseLetter}>
          <div 
            className="letter-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="letter-content">
              <div className="letter-body">
                <p className="greeting">My Dearest Ria,</p>
                <p className='text-body'>
                  This is my first time writing a love letter for someone I like.
                  Meeting you has been the highlight of my days, and I cherish every moment we spend together.
                  Saksi ang mga butiki sa aking pag ngiti.
                  Pati na rin ang mga ipis kung gaano kita namimiss.
                  And I would like to ask you a question that has been on my mind for a while now.
                </p>
                <p className="question">
                  <strong>Will you be my Valentine?</strong>
                </p>
                <p className="signature">
                  Yours truly,<br />
                  Yog
                </p>
              </div>
            </div>
            <button 
              className="close-btn"
              onClick={handleCloseLetter}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;