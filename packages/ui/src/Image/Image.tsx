import React from 'react';

interface Props {
    src: string;
}

export function Image({src}: Props) {
    return <img alt="image" src={src} />
}