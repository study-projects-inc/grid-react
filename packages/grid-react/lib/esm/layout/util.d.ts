import { ReactNode } from "react";
export declare type GridLayoutType = 'classic' | 'stack' | 'custom';
export declare const gridLayoutCssName: {
    [x: string]: string;
};
export interface ILayoutContent {
    children: ReactNode;
    classNames?: string[];
    customStyles?: {
        [key: string]: string;
    };
    gridArea?: string;
}
