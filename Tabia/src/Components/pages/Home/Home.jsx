import { ContainerMain } from "./Home.styles";
import Table from "../../organisms/Table/table";
import { useGlobalContext } from "../../../Context/Global-context";
import Menu from "../../molecules/Menu/menu";

const Home = () => {
  const {state} = useGlobalContext()

  console.log(state)
  return (
    <ContainerMain>
      <Menu showMenu={state.showMenu} />
      <div>
      <Table />
      </div>
    </ContainerMain>
  );
};

export default Home;
