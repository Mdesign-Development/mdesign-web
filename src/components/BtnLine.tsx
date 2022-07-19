import styles from '../styles/BtnLine.module.css'
interface PropsBtnLine{
  txt: String;
  callback?: ()=>void,
  icon: React.ReactNode
}

const BtnLine = ({txt, callback, icon}:PropsBtnLine) => {
  return (
    <div className={styles.btnLine} onClick={callback}>
      <p className={styles.btnTxt}>{ txt }</p>
      <div className={styles.btnIcon}>{ icon }</div>
    </div>
  )
}

export default BtnLine