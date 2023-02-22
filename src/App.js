import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import MainPage from "./components/mainPage";
// import Youtube from "./components/youtube";
import LocalExhibition from "./components/localExhibition";

const GlobalStyle = createGlobalStyle`
  ${reset};

  body: {
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
  }
  * {
    box-sizing: inherit;
  }
  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainPage/>
      <LocalExhibition/>
    </>
  );
}

export default App;
