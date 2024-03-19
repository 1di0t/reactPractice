import type { FC } from 'react';
import React from 'react';

export type ArrowComponentProps = {
    href: string;
    text: string;
}

const ArrowComponent: FC<ArrowComponentProps> = props => {
    const {href, text} = props
    return(
        <li>
            <a href={href}>{text}</a>
        </li>
    )
}
export default ArrowComponent