import {
  BoxTags,
  IconTags,
  TagsTitle,
  Cells,
  ContainerLine,
  ContainerDataTable,
  BoxTeamName,
  BoxTeamsTitle,
  TeamsName, 
  TeamsBox, 
  HeaderTeams, 
  CaretIcon,
  ContainerDataTags,
  ContainerTags,
  ContainerData
} from './table.styles'
import teamData from '../../../data/TeamsData/teams_data.json'
import { useGlobalContext } from '../../../Context/Global-context'
import { dataTags } from '../../../data/DataTags/dataTags'
import { BoxTitleButton } from '../../pages/Home/Home.styles'
import Button from '../../atoms/Button/Button'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'
import { useCalculate } from '../../../hooks/Data-sum/teamData'

const Table = () => {
  const { dispatch, state } = useGlobalContext()
  const contentDocument = useRef()
  const teamSumData = useCalculate()

  const handlePrint = useReactToPrint({
    content: () => contentDocument.current,
  })
  
  return (
    <div style={{padding: '0 0 0 4rem'}}> 
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
            <CaretIcon className='fa-solid fa-caret-up' />
          </BoxTeamsTitle>
          {teamData.map((team, index) => {
            return (
              <TeamsBox team={team} key={`${index}-${team.teamName}`}>
                <TeamsName team={team}>{team.teamName}</TeamsName>
              </TeamsBox>
            )
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
              )
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
                        data.teamName === 'Benchmarck (all industries)'
                      }
                    >
                      {((key === 'NPS' || key === 'participation') &&
                        data.sum) ||
                        data[key]}
                    </Cells>
                  ))}
              </ContainerLine>
            ))}
          </ContainerData>
        </ContainerDataTags>
      </ContainerDataTable>
    </div>
  )
}

export default Table
