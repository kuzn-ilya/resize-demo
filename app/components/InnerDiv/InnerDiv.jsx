import React from 'react';

export const InnerDiv = ({children, id}) => (
    <div 
        style={{
            display: 'inline-block',
            position: 'absolute',
            overflow: 'hidden',
            backgroundColor: 'yellow', 
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
        }}
        id={id}
    >
        {children}
    </div>
);
