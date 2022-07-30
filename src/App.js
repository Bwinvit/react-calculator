import './App.css';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Calculator = styled.div`
  max-width: 700px;
  max-height: 840px;
  width: 50vw;
  height: 60vh;
  background-color: white;
  border-radius: 3%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* align-items: center; */
`

const Display = styled.div`
  margin: 5%;
  width: 90%;
  height: 30%;
  background-color: black;
`

const CalculatorGroupButton = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 70%;
`

const CalculatorButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.2px solid grey;
`

const buttonArray = [
  '7', '8', '9', '/',
  '4', '5', '6', 'x',
  '1', '2', '3', '-',
  '.', '0', '=', '+',
]

const App = () => {
  return (
    <Wrapper>
      <Calculator>
        <Display></Display>
        <CalculatorGroupButton>
          {buttonArray.map(eachButton => {
            return (
              <CalculatorButton>{eachButton}</CalculatorButton>
            )
          })}
        </CalculatorGroupButton>
      </Calculator>
    </Wrapper>
  )
}

export default App;
