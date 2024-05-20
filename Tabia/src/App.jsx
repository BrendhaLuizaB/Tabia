import Header from "./Components/organisms/Header/header";
import Home from "./Components/pages/Home/Home";
import GlobalStore from "./Context/Global-store";
import { GlobalStyled } from "./GlobalStyles/GlobalStyles";

function App() {
  return (
    <GlobalStore>
      <GlobalStyled />
      <Header />
      <Home />
    </GlobalStore>
  );
}

export default App;
