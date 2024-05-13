import { useGlobalContext } from "../../../Context/Global-context";
import { BoxSection, ContainerMenu, IconMenu, TitleOfSection } from "./menu.styles";

const Menu = () => {
    const {state} = useGlobalContext()
    console.log(state)
    return (
      <ContainerMenu showMenu={state.showMenu}>
        <BoxSection>
          <IconMenu className="fa-solid fa-house" />
          <TitleOfSection>Home</TitleOfSection>
        </BoxSection>
        <BoxSection>
          <IconMenu className="fa-solid fa-chart-line" />
          <TitleOfSection>Analysis</TitleOfSection>
        </BoxSection>
        <BoxSection>
          <IconMenu className="fa-solid fa-comment" />
          <TitleOfSection>Feedback</TitleOfSection>
        </BoxSection>
        <BoxSection>
          <IconMenu className="fa-solid fa-bullseye" />
          <TitleOfSection>Goals</TitleOfSection>
        </BoxSection>
      </ContainerMenu>
    );
}

export default Menu;