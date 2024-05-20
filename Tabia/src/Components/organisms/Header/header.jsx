import { BoxMenuLogo, BoxQuestionUserIcon, ContainerHeader, HamburgerIcon, Logo, ProfilePic, QuestionMarkIcon } from "./header.styles";
import profile from '../../../assets/img/profile-pic.svg'
import { useGlobalContext } from "../../../Context/Global-context";

const Header = () => {
    const {dispatch, state} = useGlobalContext()

    const handleMenu = () => {
        dispatch({type: "setShowMenu", payload: !state.showMenu});
    }
  return (
    <>
      <ContainerHeader>
        <BoxMenuLogo>
          <HamburgerIcon
            className="fa-solid fa-bars"
            onClick={handleMenu}
            showmenu={state.showMenu}
          />
          <Logo>ãcme</Logo>
        </BoxMenuLogo>
        <BoxQuestionUserIcon>
          <QuestionMarkIcon className="fa-regular fa-circle-question" />
          <ProfilePic src={profile} alt="User profile image" />
        </BoxQuestionUserIcon>
      </ContainerHeader>
    </>
  );
};

export default Header;
