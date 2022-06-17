import React, { Fragment } from 'react';
import { GridLayoutType, gridLayoutCssName } from './util';
import scssClasses from './styles.module.scss';

export interface ILayoutProps {
    children: React.ReactNode,
    layoutType?: GridLayoutType

}
const GridLayout:React.FC<ILayoutProps> = ({children, layoutType = 'custom'}: ILayoutProps) => {
    const gridCssStyle = gridLayoutCssName[layoutType];
    return <Fragment>
        <div className={scssClasses[gridCssStyle]}>
        {
            children
        }
        </div>
    </Fragment>
}
export default GridLayout;