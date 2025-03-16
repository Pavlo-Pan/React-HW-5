import LinksIcon from "./LinksIcon/LinksIcon";
import Slogan from "./Slogan/Slogan";
import Header from "./Header/Header";

import styles from './SocialMediaBar.module.css'
const SocialMediaBar = () => {
    return (

        <>
            <div>
                <Header />
            </div>

            <div className={styles.container}>
                <Slogan />
                <LinksIcon />
            </div>

        </>


    )
}
export default SocialMediaBar;
