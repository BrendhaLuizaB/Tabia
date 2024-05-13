import { BoxMenuLogo, BoxQuestionUserIcon, ContainerHeader, HamburgerIcon, Logo, QuestionMarkIcon } from "./header.styles";
import profile from '../../../assets/img/profile-pic.svg'
// import Menu from "../../molecules/Menu/menu";
// import { useState } from "react";
import { useGlobalContext } from "../../../Context/Global-context";

const Header = () => {
    // const [showMenu, setShowMenu] = useState('0rem')
    const {dispatch, state} = useGlobalContext()

    const handleMenu = () => {
        dispatch({type: "setShowMenu", payload: state.showMenu === '-100%' ? '0' : '-100%'});
    }
// showMenu === '-23rem' ? '0rem' : '-23rem'
    // console.log('showmenu', showMenu)
  return (
    <>
      <ContainerHeader>
        <BoxMenuLogo>
          <HamburgerIcon
            className="fa-solid fa-bars"
            onClick={() => handleMenu()}
            showMenu={state.showMenu}
          />
          <Logo>ãcme</Logo>
        </BoxMenuLogo>
        <BoxQuestionUserIcon>
          <QuestionMarkIcon className="fa-regular fa-circle-question" />
          <img src={profile} alt="User profile image" />
        </BoxQuestionUserIcon>
      </ContainerHeader>
    </>
  );
};

export default Header;
