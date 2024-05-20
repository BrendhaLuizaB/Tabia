import { ContainerMain } from "./Home.styles";
import Table from "../../organisms/Table/table";
import { useGlobalContext } from "../../../Context/Global-context";
import Menu from "../../molecules/Menu/menu";

const Home = () => {
  const {state} = useGlobalContext()

  return (
    <ContainerMain>
      <Menu showmenu={state.showMenu} />
      <Table />
    </ContainerMain>
  );
};

export default Home;
