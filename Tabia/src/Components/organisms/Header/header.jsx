import { BoxMenuLogo, BoxQuestionUserIcon, ContainerHeader, HamburgerIcon, Logo, QuestionMarkIcon } from "./header.styles";
import profile from '../../../assets/img/profile-pic.svg'

const Header = () => {
  return (
    <>
      <ContainerHeader>
        <BoxMenuLogo>
          <HamburgerIcon className="fa-solid fa-bars" />
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
