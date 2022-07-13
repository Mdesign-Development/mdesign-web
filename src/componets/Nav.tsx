import styles from '../styles/Nav.module.css'
import {IconFacebook, IconInstagram, IconWhatsApp} from '../componets/Icons';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <img src="/img/logosingle.svg" alt="logo-mdesign" />
            </div>
            <div className={styles.menu}>
                <ItemMenu txt={'¿Quiénes somos?'}/>
                <ItemMenu txt={'¿Cómo lo hacemos?'}/>
                <ItemMenu txt={'¿Por qué lo hacemos?'}/>
                <ItemMenu txt={'¿Qué hacemos?'}/>
            </div>
            <div className={styles.rrss}>
                <ItemMenu icon component={<IconFacebook />}/>
                <ItemMenu icon component={<IconInstagram/>}/>
                <ItemMenu icon component={<IconWhatsApp/>}/>
            </div>
        </div>
    )
}

export default Nav

interface ItemMenuProps {
    txt?: string,
    icon?: boolean,
    component?: React.ReactNode
}

const ItemMenu = ({txt, icon, component}:ItemMenuProps) => {
    return(
        <div className={styles.itemMenu}>
            <div className={styles.txtMenu}>
                {
                    !icon && <h4>{txt}</h4>
                }
                {
                    icon && component
                }
            </div>
            <div className={styles.lineMenu}></div>
        </div>
    )
}