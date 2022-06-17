import React from 'react';
import WithGridArea from '../hoc/with-grid-area';
import { ILayoutContent } from './util';

const Footer: React.FC<ILayoutContent> = ({children, customStyles = {}, classNames = [], gridArea}) => {
    
    
    return <div style={{...(customStyles || {}), gridArea}} className={classNames.join(' ')}>
        {
            children
        }
    </div>
}

export default WithGridArea('footer')(Footer)