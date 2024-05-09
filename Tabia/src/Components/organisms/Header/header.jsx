import { BoxMenuLogo, BoxQuestionUserIcon, ContainerHeader, HamburgerIcon, Logo, QuestionMarkIcon } from "./header.styles";
import profile from '../../../assets/img/profile-pic.svg'
import Menu from "../../molecules/Menu/menu";
import { useState } from "react";

const Header = () => {
    const [showMenu, setShowMenu] = useState('0rem')

    const handleMenu = () => {
        setShowMenu(showMenu === '-23rem' ? '0rem' : '-23rem');
    }

    console.log('showmenu', showMenu)
  return (
    <>
      <ContainerHeader>
        <BoxMenuLogo>
          <HamburgerIcon
            className="fa-solid fa-bars"
            onClick={() => handleMenu()}
            showMenu={showMenu}
          />
          <Logo>ãcme</Logo>
        </BoxMenuLogo>
        <BoxQuestionUserIcon>
          <QuestionMarkIcon className="fa-regular fa-circle-question" />
          <img src={profile} alt="User profile image" />
        </BoxQuestionUserIcon>
      </ContainerHeader>
      <Menu showMenu={showMenu} />
    </>
  );
};

export default Header;
