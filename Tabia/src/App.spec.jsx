import { render } from "@testing-library/react"
import App from '../src/App.jsx'

describe('App component', () => {
    it('should work', ()=> {
        expect(1).toBe(1)
    })
    it('should display element', ()=> {
        render(<App />)
    })
})