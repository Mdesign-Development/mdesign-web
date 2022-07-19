import styles from '../styles/Title.module.css';

interface TitleProps {
    txt: string,
    accent?: boolean,
    sub?: boolean,
    mt?: string | number| undefined,
    ml?: string | number | undefined

}

const Title = ({txt, accent, sub, mt, ml}:TitleProps) => {
    return <h2 className={ [accent&&styles.accent, sub&&styles.sub].join(" ") } style={{marginTop: mt?mt:0, marginLeft: ml?ml:0}}>{txt}</h2>
}

export default Title