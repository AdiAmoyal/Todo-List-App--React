import React from 'react';

const Button = props => {
    return (
        <button className={`button + ${props.className}`} type={props.type ? props.type : 'button'} onClick={props.onClick}>{props.children}</button>
    );
};

export default Button;