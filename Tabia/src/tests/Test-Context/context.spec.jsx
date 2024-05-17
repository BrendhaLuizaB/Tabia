import { render, act, renderHook, fireEvent } from '@testing-library/react'
import {
  GlobalContext,
  GlobalReducer,
  initialState,
  useGlobalContext,
} from '../../Context/Global-context'
import { useReducer } from 'react'

describe('GlobalContext', () => {
  const Wrapper = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState)
    return (
      <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
      </GlobalContext.Provider>
    )
  }
  it('should provide the initial state', () => {
    const { queryByText } = render(
      <GlobalContext.Provider
        value={{ state: initialState, dispatch: () => {} }}
      >
        <TestComponent />
      </GlobalContext.Provider>
    )

    expect(
      queryByText((content, element) =>
        content.includes(`showMenu: ${initialState.showMenu}`)
      )
    ).toBeInTheDocument()
  })

  it('should update state when dispatch is called', () => {
    const { result } = renderHook(() => useGlobalContext(), {
      wrapper: Wrapper,
    })

    act(() => {
      result.current.dispatch({ type: 'setShowMenu', payload: true })
    })

    expect(result.current.state.showMenu).toBe(true)
  })
})

function TestComponent() {
  const { state } = useGlobalContext()

  return (
    <div>
      <div>showMenu: {state.showMenu.toString()}</div>
    </div>
  )
}
