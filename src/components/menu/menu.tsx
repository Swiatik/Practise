import { connect } from 'react-redux';
import { NavLink} from 'react-router-dom';
import { AppStateType } from '../../redux/store';
import styles from './menu.module.css'

type PropsType = {
    auth?: string
}

const Menu = (props: PropsType) => {
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
let mapStateToProps = (state: AppStateType) => {
    return {
        auth: state.auth.auth.username
    }
}

export default connect(mapStateToProps, null)(Menu);