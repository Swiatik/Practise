import { NavLink} from 'react-router-dom';
import styles from './menu.module.css'

const Menu = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to={"/account"}> Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/profiles/:username/posts">My posts</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/profiles">Users</NavLink>
            </div>
        </nav>
    )
}

export default Menu;