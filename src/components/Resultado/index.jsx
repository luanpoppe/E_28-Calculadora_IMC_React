// Arquivo -> RESULTADO.JSX

import styles from './Resultado.module.css'

const Resultado = (props) => {
  let classificacaoIMC = 'Sem classificação'

  if (props.valorIMC < 18.5) {
    classificacaoIMC = 'Baixo peso'
  } else if (props.valorIMC >= 18.5 && props.valorIMC < 25) {
    classificacaoIMC = 'Peso adequado'
  } else if (props.valorIMC >= 25 && props.valorIMC < 30) {
    classificacaoIMC = 'Sobrepeso'
  } else if (props.valorIMC >= 30 && props.valorIMC < 35) {
    classificacaoIMC = 'Obesidade grau I'
  } else if (props.valorIMC >= 35 && props.valorIMC < 40) {
    classificacaoIMC = 'Obesidade grau II'
  } else if (props.valorIMC >= 40) {
    classificacaoIMC = 'Obesidade grau III'
  }

  return props.valorIMC == 0 ||
    isNaN(props.valorIMC) ||
    !isFinite(props.valorIMC) ? (
    <div></div>
  ) : (
    <>
      <div className={styles.containerResultado}>
        <div className={styles.containerValor}>
          <h3 className={styles.h3}>{props.children}</h3>
          <span className={styles.valorResultado}>{props.valorIMC}</span>
        </div>
        <h3 className={styles.h3}>
          Classificação:
          <span className={styles.valorClassificacao}>{classificacaoIMC}</span>
        </h3>
      </div>
    </>
  )
}

export default Resultado
