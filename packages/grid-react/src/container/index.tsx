import React from "react";
import styles from './style.module.scss';
interface IGridContainerProps {
    children:React.ReactNode
}

const GridContainer:React.FC<IGridContainerProps> = ({children}) => {
    return <div className={styles.gridContainer}>
        {
            children
        }
    </div>
}

export default GridContainer;