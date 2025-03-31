import { SpotifyLogo } from '../../../assets/icons/exportIcons.js';
import styles from './Header.module.css';
const Header = () => {
    return (
        <div className={styles.container}>
            <a href="#">
                <SpotifyLogo className={styles.logo} />
            </a>
        </div>
    )

}
export default Header;