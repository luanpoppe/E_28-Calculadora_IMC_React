// Arquivo -> CONTAINER.JSX

import Resultado from '../Resultado'
import styles from './Container.module.css'

const Container = (props) => (
  <div className={styles.container}>
    <h1 className={styles.titulo}>Calculadora IMC - React</h1>
    <form className={styles.form}>{props.children}</form>
    <Resultado valorIMC={props.valorIMC}>Valor de seu IMC: </Resultado>
  </div>
)

export default Container
