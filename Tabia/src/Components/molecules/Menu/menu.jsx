import { BoxSection, ContainerMenu, IconMenu, TitleOfSection } from "./menu.styles";

// eslint-disable-next-line react/prop-types
const Menu = ({ showMenu }) => {

    return (
      <ContainerMenu showMenu={showMenu}>
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