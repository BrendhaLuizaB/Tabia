import { BoxMenuLogo, BoxQuestionUserIcon, ContainerHeader, HamburgerIcon, Logo, QuestionMarkIcon } from "./header.styles";
import profile from '../../../assets/img/profile-pic.svg'
import { useGlobalContext } from "../../../Context/Global-context";

const Header = () => {
    const {dispatch, state} = useGlobalContext()

    const handleMenu = () => {
        dispatch({type: "setShowMenu", payload: state.showMenu === '-100%' ? '0' : '-100%'});
    }
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
