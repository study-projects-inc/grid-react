import React from 'react';
import WithGridArea from '../hoc/with-grid-area';
import { ILayoutContent } from './util';

const MainContent: React.FC<ILayoutContent> = ({children, customStyles = {}, classNames = [], gridArea}) => {
    
    
    return <div style={{...(customStyles || {}), gridArea}} className={classNames.join(' ')}>
        {
            children
        }
    </div>
}

export default WithGridArea('main')(MainContent)