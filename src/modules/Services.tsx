import Title from '../components/Title';
import useWindowSize from '../hooks/useWindowSize';
import styles from '../styles/Services.module.css';

const Services = () => {

    const windowSize = useWindowSize()
    
    return (
        <div className={styles.services}>
            <div className={styles.txtBann}>
                <Title txt={'Diseñamos'} sub accent mt={ windowSize?.width !== undefined && windowSize?.width < 540 ? '48%' : '2%' } ml={'-50%'} />
                <Title txt={'Experiencias,'} accent mt={'-2%'} ml={'-24%'}/>
                <Title txt={'creamos'} sub accent mt={'-2%'} ml={'-4%'}/>
                <Title txt={'Herramientas'} mt={'-2%'} ml={'-4%'}/>
                <Title txt={'para'} sub accent mt={'-3%'} ml={'-50%'}/>
                <Title txt={'Evolucionar'} accent mt={'-2%'} ml={'-16%'}/>
            </div>
            
        </div>
    )
    
}

export default Services