import React from 'react';
import { GridLayoutType } from './util';
export interface ILayoutProps {
    children: React.ReactNode;
    layoutType?: GridLayoutType;
}
declare const GridLayout: React.FC<ILayoutProps>;
export default GridLayout;
