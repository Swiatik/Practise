import { connect } from 'react-redux';
import { NavLink} from 'react-router-dom';
import styles from './menu.module.css'

const Menu = (props: any) => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to={"/account"}> Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to={`/profiles/${props.auth}/posts`}>My posts</NavLink>
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
let mapStateToProps = (state: any) => {
    return {
        auth: state.auth.auth.username
    }
}

export default connect(mapStateToProps, null)(Menu);