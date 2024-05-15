import {
  BoxTags,
  BoxTeamName,
  BoxTeamsTitle,
  CaretIcon,
  Cells,
  ContainerData,
  ContainerDataTable,
  ContainerDataTags,
  ContainerLine,
  ContainerTags,
  HeaderTeams,
  IconTags,
  TagsTitle,
  TeamsBox,
  TeamsName,
} from "./table.styles";
import teamData from "../../../data/TeamsData/teams_data.json";
import { useGlobalContext } from "../../../Context/Global-context";
import { dataTags } from "../../../data/DataTags/dataTags";
import { BoxTitleButton } from "../../pages/Home/Home.styles";
import Button from "../../atoms/Button/Button";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { useCalculate } from "../../../hooks/Data-sum/teamData";

const Table = () => {
  const contentDocument = useRef();
  const { dispatch, state } = useGlobalContext();
  const teamSumData = useCalculate()

  const handlePrint = useReactToPrint({
    content: () => contentDocument.current,
  });
  const handleTeams = () => {
    dispatch({
      type: "setShowTeams",
      payload: state.showTeams === "-100%" ? "0" : "-100%",
    });
  };

  return (
    <>
      <BoxTitleButton>
        <div>
          <h1>Comparison</h1>
        </div>
        <div>
          <Button handlePrint={handlePrint} />
        </div>
      </BoxTitleButton>
      <ContainerDataTable ref={contentDocument}>
        <BoxTeamName>
          <BoxTeamsTitle>
            <HeaderTeams>Teams</HeaderTeams>
            <CaretIcon className="fa-solid fa-caret-up" onClick={handleTeams} />
          </BoxTeamsTitle>
          {teamData.map((team, index) => {
            return (
              <TeamsBox team={team} key={`${index}-${team.teamName}`}>
                <TeamsName team={team}>{team.teamName}</TeamsName>
              </TeamsBox>
            );
          })}
        </BoxTeamName>
        <ContainerDataTags>
          <ContainerTags>
            {dataTags.map((tag, index) => {
              return (
                <BoxTags key={`${index}-${tag.tagName}`}>
                  <IconTags className={tag.icon} />
                  <TagsTitle>{tag.tagName}</TagsTitle>
                </BoxTags>
              );
            })}
          </ContainerTags>
          <ContainerData>
            {teamSumData.map((data, index) => (
              <ContainerLine key={`${index}-${data.teamName}`}>
                {Object.keys(data)
                  .slice(2)
                  .slice(0, -1)
                  .map((key, index) => (
                    <Cells
                      key={`${index}-${data.id}`}
                      score={data[key]}
                      data={data}
                      isFirstColumn={
                        index === 0 || (index === 1 && data.id !== 0)
                      }
                      isFirstLine={
                        data.teamName === "Benchmarck (all industries)"
                      }
                    >
                      {((key === "NPS" || key === "participation") &&
                        data.sum) ||
                        data[key]}
                    </Cells>
                  ))}
              </ContainerLine>
            ))}
          </ContainerData>
        </ContainerDataTags>
      </ContainerDataTable>
    </>
  );
};

export default Table;
