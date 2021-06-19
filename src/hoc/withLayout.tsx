import React from "react";
import Header from "../components/header/header"
import Menu from "../components/menu/menu";
import styles from '../App.module.css';

const withLayout = (Component: any) => {
    
    class LayoutComponent extends React.Component {
        render() {
            return (
                <div className={styles.app_wrapper}>
                    <Header />
                    <Menu />
                    <div className={styles.app_wrapper_content}>
                        <Component />
                    </div>
                </div>
            )
        }
    }
    
    return LayoutComponent;
}

export default withLayout;