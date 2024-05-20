import { useGlobalContext } from "../../../Context/Global-context";
import { BoxSection, ContainerMenu, IconMenu, Options, TitleOfSection } from "./menu.styles";

const Menu = () => {

  const menuData = [
    {
      Title: 'Home',
      Icon: 'fa-solid fa-house',
    },
    {
      Title: 'Analysis',
      Icon: 'fa-solid fa-chart-line',
      Survey: 'Survey report', 
      Comparison: 'Comparison', 
      Custom: 'Custom polls'
    },

    {
      Title: 'Feedback',
      Icon: 'fa-solid fa-comment',
    },

    { Title: 'Goals', Icon: 'fa-solid fa-bullseye' },
  ]

  console.log(menuData)
    const {state} = useGlobalContext()
    return (
      <ContainerMenu showmenu={state.showMenu}>
      {menuData.map((item, index) => {
        return (
          <BoxSection key={index}>
            <IconMenu className={item.Icon} />
            <div>
              <TitleOfSection>{item.Title}</TitleOfSection>
              {item.Title === 'Analysis' && (
                <>
                  <Options>{item.Survey}</Options>
                  <Options isComparison>{item.Comparison}</Options>
                  <Options>{item.Custom}</Options>
                </>
              )}
            </div>
          </BoxSection>
        )
      })}
    </ContainerMenu>
    )
}

export default Menu;