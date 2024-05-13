import styled from "styled-components";
import { theme } from "../../../Styles/theme";

export const ContainerTable = styled.div`
  background-color: ${theme.interfaceColor.white.white_50};
  /* width: 99.2rem; */
`;

export const Divider = styled.div`
  border-bottom: 0.1rem solid ${theme.interfaceColor.white.white_300};
  padding: 4rem 0;
`;

export const HeaderTeams = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${theme.interfaceColor.black.black_500};
`;
export const BoxTeamsTitle = styled.div`
  border: 0.1rem solid ${theme.interfaceColor.white.white_300};
  padding: 13rem 0 2rem 2rem;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  height: 10rem;
`;

export const CaretIcon = styled.i`
    font-size: 1.4rem;
    font-weight: 900;
    color: ${theme.interfaceColor.black.black_300};
`

export const TeamsName = styled.p`
    font-size: 1.4rem;
    font-weight: ${(props) => (props.team.id === 0 || props.team.id === 1) ? 600 : 'normal'};
`

export const TeamsBox = styled.div`
  padding: 1.5rem 2rem;
  border: 0.1rem solid ${theme.interfaceColor.white.white_300};
  background-color: ${(props) =>
    props.team.id === 0 && `${theme.interfaceColor.white.white_300}`};
`;

export const ContainerDataTable = styled.div`
  display: flex;
  /* grid-template-columns: repeat(auto-fit, 35rem); */
  background-color: ${theme.interfaceColor.white.white_50};
  padding: 2rem 2rem;
`

export const ContainerData = styled.div`
  gap: 0.4rem;
  flex-direction: column;
  padding-top: 0.4rem;
  display: flex;
`;

export const TagsTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${theme.interfaceColor.black.black_400};
`

export const BoxTags = styled.div`
  background-color: ${theme.interfaceColor.white.white_100};
  padding: 1rem 2rem;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  display: flex;
  align-items: center;
  gap: 1rem;

`
export const IconTags = styled.i`
  font-size: 1.4rem;
  font-weight: 900;
  color: ${theme.interfaceColor.black.black_200};
  transform: rotate(180deg);
`
export const ContainerLine = styled.ul`
  width: 100%;
  display: flex;
  gap: 0.4rem;

`
export const Cells = styled.li`
  width: 45.54px;
  border: 1px 0px 0px 0px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1.6rem 0.7rem;
  background-color: ${(props) => {
    if (props.isFirstColumn && props.data.id !== 0 ) {
      return `${theme.interfaceColor.white.white_50}`;
    } else if (props.isFirstLine) {
      return `${theme.interfaceColor.white.white_300}`;
    } else {
      switch (true) {
        case props.score >= 0 && props.score <= 2.4:
          return theme.dataColor.badScore.very_low_score;
        case props.score >= 2.5 && props.score <= 4.9:
          return theme.dataColor.badScore.low_score;
        case props.score >= 5 && props.score <= 7.4:
          return theme.dataColor.goodScore.high_score;
        case props.score >= 7.5 && props.score <= 10:
          return theme.dataColor.goodScore.excellent_score;
        default:
          return "";
      }
    }
  }};
`;

export const BoxTeamName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const ContainerTags = styled.div`
  display: flex;
  gap: 0.4rem;
  height: 25rem;
`
export const ContainerDataTags = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 0.4rem;
`