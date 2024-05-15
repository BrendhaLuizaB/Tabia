import { renderHook } from "@testing-library/react";
import { useCalculate } from "../../hooks/Data-sum/teamData";
import teamData from '../../data/TeamsData/teams_data.json'

const simplifiedTeamData = [
  {
    overallEngagement: 8.1,
    recgnition: 8.1,
    feedback: 8.1,
    relationshipPeers: 8.1,
    relationshipManager: 8.1,
    satisfaction: 8.1,
    alignment: 8.1,
    happiness: 8.1,
    wellness: 8.1,
    personalGrouth: 8.1,
    ambassadorship: 8.1,
  },
  {
    overallEngagement: 6.2,
    recgnition: 4.9,
    feedback: 6.2,
    relationshipPeers: 6.2,
    relationshipManager: 6.2,
    satisfaction: 6.2,
    alignment: 6.2,
    happiness: 6.2,
    wellness: 6.2,
    personalGrouth: 6.2,
    ambassadorship: 6.2,
  },
];

describe('useCalculate', () => {
    it('should correctly calculate the sum of each row in the team data', () => {
        const { result } = renderHook(() => useCalculate(simplifiedTeamData));
        console.log('AAAAAAAAAAAAAAAAAA', result.current)

        const sumTest = () => {Object.values(simplifiedTeamData)
          .reduce((acc, value) => {
            acc + parseFloat(value), 0;
          })
        return {... simplifiedTeamData, sum: sumTest}
        }
          console.log('SM TEST', simplifiedTeamData)
            expect(result.current.sum).toEqual(simplifiedTeamData);
            console.log('BBBBBBBBBBBBBB', teamData.slice(5))
     
    });
});
