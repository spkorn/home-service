import "../App.css";
import { css } from "@emotion/react";

function HomePage() {
  return (
    <div className="home-page">
      <div className="App">
        <h1
          className="text-blue900"
          // css={css`
          //   font-family: prompt;
          // `}
        >
          Hello WORLD บริการของเรา
        </h1>
        <button className="bg-blue300">PRAYUTH</button>
      </div>
    </div>
  );
}

export default HomePage;
