import { renderHook } from "@testing-library/react";
import { useCalculate } from "../../hooks/Data-sum/teamData";

describe("useCalculate", () => {
  it("should correctly calculate the sum of each row in the team data", () => {
    const mockTeamData = [
      {
        overallEngagement: 6.2,
        recgnition: 6.2,
        feedback: 6.2,
        relationshipPeers: 4.5,
        relationshipManager: 8.4,
        satisfaction: 6.2,
        alignment: 6.2,
        happiness: 6.2,
        wellness: 6.2,
        personalGrouth: 6.2,
        ambassadorship: 6.2,
      },
    ];
    const { result } = renderHook(() => useCalculate(mockTeamData));
    const expectedSum = "69";
    expect(result.current[2].sum).toEqual(expectedSum);
  });
});
