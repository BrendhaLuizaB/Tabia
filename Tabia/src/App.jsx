import Header from "./Components/organisms/Header/header"
import Home from "./Components/pages/Home/Home";
import { GlobalStyled } from "./GlobalStyles/GlobalStyles"

function App() {

  return (
    <>
      <GlobalStyled />
      <Header />
      <Home />
    </>
  );
}

export default App
