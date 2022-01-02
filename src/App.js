import "./App.css";
import YoutubeEmbed from "./YoutubeEmbed";
import present from "./present.png";
import cuffs from "./cuffs.png";
import book from "./book.jpg";
import { useState } from "react";

function App() {
  const [showCuffs, setShowCuffs] = useState(false);
  const [showBook, setShowBook] = useState(false);
  return (
    <div className="App">
      <div className="snowflake">🎉</div>
      <h2>Happy Birthday Valeriya!</h2>
      <br />
      <div className="snowflake">🎉</div>
      {/* <YoutubeEmbed embedId="Y6uRr5lPbOU" /> */}
      <div className="snowflake">🎉</div>
      <p>Dear V,</p>
      <div className="snowflake">🎉</div>
      <div className="snowflake">🎉</div>
      <div className="snowflake">🎉</div>
      <br />
      <p>I hope you have a great 27th Birthday!</p>
      <br />
      <p>
        I'm sad I am unable to wish it you in person but I am very excited to
        make up for all of our time apart when I next see you.
      </p>
      <div className="snowflake">🎉</div>
      <p>
        I hope you have a fun day celebrating with family, friends and the love
        of your life; little Arko ❤
      </p>
      <br />
      <p>
        I have bought you a book that I have been enjoying reading recently and
        I think you would enjoy it. I also think we would have some interesting
        converstionas about it (click to reveal):
      </p>
      {showBook && (
        <>
          <img
            src={book}
            style={{ cursor: "pointer", maxWidth: "30vw" }}
            onClick={() => setShowBook(false)}
          />
          <br />
          <button
            style={{ cursor: "pointer", maxWidth: "30vw" }}
            href="https://www.amazon.co.uk/kindle/redeem/?t=GSZYV84QPD9PT3B"
          >
            Click to redeem
          </button>
          <br />
        </>
      )}
      {!showBook && (
        <img
          onClick={() => setShowBook(true)}
          src={present}
          style={{ cursor: "pointer", maxWidth: "30vw" }}
        />
      )}
      <br />
      <p>
        I have also ordered something that I think will be great fun for the
        both of us, click below to reveal or I will surprise you when I next see
        you 😉
      </p>
      {showCuffs && (
        <>
          <img
            src={cuffs}
            style={{ cursor: "pointer", maxWidth: "30vw" }}
            onClick={() => setShowCuffs(false)}
          />
          <br />
        </>
      )}
      {!showCuffs && (
        <img
          onClick={() => setShowCuffs(true)}
          src={present}
          style={{ cursor: "pointer", maxWidth: "30vw" }}
        />
      )}
      <br />

      <p>
        I'm really excited to see you and have lots of very fun, memorable times
        💖
      </p>

      <p>From your little Kowalski xxx</p>
    </div>
  );
}

export default App;
