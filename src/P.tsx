import type {FC,PropsWithChildren} from 'react'
import React from 'react'

export type PProps = {}
const P: FC<PropsWithChildren<PProps>> = props => {
    return <p {...props}/>
}
export default P