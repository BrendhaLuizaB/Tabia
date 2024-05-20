import { useEffect, useState } from "react";
import teamData from '../../data/TeamsData/teams_data.json'

export const useCalculate = () => {
    const [teamSumData, setTeamSumData] = useState([]);

    const calculateRowSums = () => {
        const sums = teamData.map((team) => {
            const rowSum = Object.values(team)
            .filter((value, index) => index > 3)
            .reduce((acc, value) => acc + parseFloat(value), 0)
            .toFixed(0);
            return { ...team, sum: rowSum };
        });
        setTeamSumData(sums);
    };
    useEffect(() => {
        calculateRowSums()
  }, [])
  return teamSumData
}
