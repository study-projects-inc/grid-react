import React, { Fragment } from "react";
import { ILayoutContent } from "../layout/util";

const WithGridArea = (gridArea:string) => (WrappedComponent:React.FC<ILayoutContent>) => {
    return (props:ILayoutContent) => {
        return <Fragment>
            <WrappedComponent {...props} gridArea={gridArea} />
        </Fragment>
    }
}

export default WithGridArea;