// Arquivo -> INPUTS.JSX

import styles from './Inputs.module.css'

const Inputs = (props) => {
  function calculoDoIMC(evento) {
    return props.pegarValor(evento.target.value)
  }

  return (
    <>
      <div className={styles.secao}>
        <label className={styles.label} htmlFor={props.id}>
          {props.id}:
        </label>
        <input
          className={styles.input}
          placeholder={props.placeholder}
          id={props.id}
          type="number"
          onChange={calculoDoIMC}
        />
      </div>
    </>
  )
}

export default Inputs
