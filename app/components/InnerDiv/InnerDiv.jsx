import React from 'react';

export const InnerDiv = ({height, children, id}) => (
    <div 
        style={{
            display: 'inline-block',
            position: 'absolute',
            overflow: 'hidden',
            backgroundColor: 'yellow', 
            left: 0,
            top: 0,
            width: '100%',
            height: height
        }}
        id={id}
    >
        {children}
    </div>
);
