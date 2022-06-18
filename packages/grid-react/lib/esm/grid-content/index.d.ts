import React from 'react';
declare type ValidGridNumberInformation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
declare type ValidAlignSelf = 'start' | 'end' | 'center' | 'stretch';
interface IGridContentProps {
    children: React.ReactNode;
    rowSpan?: ValidGridNumberInformation;
    colSpan?: ValidGridNumberInformation;
    align?: ValidAlignSelf;
    className?: string;
    style?: React.CSSProperties;
}
declare const GridContent: React.FC<IGridContentProps>;
export default GridContent;
