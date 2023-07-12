import { useState } from 'react'

import Container from './components/Container'
import Inputs from './components/Inputs'

function App() {
  const [valorAltura, setValorAltura] = useState(0)
  const [valorPeso, setValorPeso] = useState(0)
  // console.log(valorAltura, valorPeso)
  let valorIMC = (valorPeso / valorAltura / valorAltura).toFixed(1)
  console.log(valorIMC)

  return (
    <div>
      <Container valorIMC={valorIMC}>
        <Inputs
          pegarValor={(valor) => setValorAltura(valor)}
          id="Altura"
          placeholder="Digite sua altura"
        />
        <Inputs
          pegarValor={(valor) => setValorPeso(valor)}
          id="Peso"
          placeholder="Digite seu peso"
        />
      </Container>
    </div>
  )
}

export default App
