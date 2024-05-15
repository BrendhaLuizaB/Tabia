import { render, act, renderHook } from "@testing-library/react";
import {
  GlobalContext,
  initialState,
  useGlobalContext,
} from "../../Context/Global-context";

describe("GlobalContext", () => {
  it("should provide the initial state", () => {
    const { getByText } = render(
      <GlobalContext.Provider
        value={{ state: initialState, dispatch: () => {} }}
      >
        <TestComponent />
      </GlobalContext.Provider>
    );

    expect(getByText(`showMenu: ${initialState.showMenu}`)).toBeInTheDocument();
    expect(
      getByText(`showTeams: ${initialState.showTeams}`)
    ).toBeInTheDocument();
  });

  it("should update state when dispatch is called", () => {
    const { result } = renderHook(() => useGlobalContext());

    act(() => {
      result.current.dispatch({ type: "setShowMenu", payload: "50%" });
    });

    expect(result.current.state.showMenu).toBe("-100%");

    act(() => {
      result.current.dispatch({ type: "setShowTeams", payload: "0%" });
    });

    expect(result.current.state.showTeams).toBe("-100%");
  });
});

function TestComponent() {
  const { state } = useGlobalContext();

  return (
    <div>
      <div>showMenu: {state.showMenu}</div>
      <div>showTeams: {state.showTeams}</div>
    </div>
  );
}
