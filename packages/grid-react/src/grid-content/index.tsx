import React from 'react';

// Não queria fazer desse jeito eu juro
type ValidGridNumberInformation = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ValidAlignSelf = 'start' | 'end' | 'center' | 'stretch';

interface IGridContentProps {
    children: React.ReactNode,
    rowSpan?:ValidGridNumberInformation,
    colSpan?:ValidGridNumberInformation,
    align?:ValidAlignSelf,
    className?:string,
    style?:React.CSSProperties
}

interface IGridContentStyle {
    gridColumnEnd?: string | number,
    gridRowEnd?: string | number,
    gridColumnStart?: string | number,
    gridRowStart?: string | number,
    alignSelf?: string
}

const checkItemFill = (size:number = 1, field: string): {[key:string]:string | number} => {
    return {[field]: `span ${size}`};
}

const generateGridContentStyle = ({colSpan ,rowSpan, align}:IGridContentProps): IGridContentStyle => {
    return {
        ...checkItemFill(rowSpan, 'gridRowEnd'),
        ...checkItemFill(colSpan, 'gridColumnEnd'),
        ...(align ? {alignSelf: align} : {})
    };
}


const GridContent:React.FC<IGridContentProps> = (props: IGridContentProps) => {
    const {
        children,
        className,
        style
    } = props;

    const contentStyles:IGridContentStyle = generateGridContentStyle(props);


    return <div style={{...style, ...contentStyles}} className={className}>
        {
            children
        }
    </div>;
}

export default GridContent;