import { ReactNode } from "react";

const [CLASSIC, STACK, CUSTOM] = ['classic', 'stack', 'custom'];

export type GridLayoutType = 'classic'|'stack'|'custom' ;
export const gridLayoutCssName = {
    [CLASSIC]: 'classicLayout',
    [STACK]: 'stackLayout',
    [CUSTOM]: 'customLayout'
}

export interface ILayoutContent {
    children: ReactNode,
    classNames?: string[]
    customStyles?: {[key: string]: string},
    gridArea?: string
}