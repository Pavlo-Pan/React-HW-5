import { AppleIcon, GoogleIcon, XIcon } from '../../assets/icons/exportIcons.js'
import styles from './LinksIcon.module.css'

const LinksIcon = () => {
    return (
        <div className={styles.container}>
            <a href="#"><AppleIcon className={styles.logo} /></a>
            <a href="#"><GoogleIcon className={styles.logo} /></a>
            <a href="#"><XIcon className={styles.logo} /></a>
        </div>
    )

};
export default LinksIcon;