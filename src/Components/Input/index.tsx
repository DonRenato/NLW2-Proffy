import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string
}
//Essa forma te permite passar todas as propriedades do input para o component
const Input:React.FC<InputProps> = ({ name, label,...rest  }) =>{
    return(
        <div className="input-block">
        <label htmlFor={name}>{label}: </label>
        <input type="text" id={name} {...rest}/>
    </div>
    );

}


export default Input;