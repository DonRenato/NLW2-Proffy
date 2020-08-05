import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string
    label: string
}
//Essa forma te permite passar todas as propriedades do input para o component
const TextArea:React.FC<TextAreaProps> = ({ name, label,...rest  }) =>{
    return(
        <div className="textarea-block">
        <label htmlFor={name}>{label}: </label>
        <textarea  id={name} {...rest}/>
    </div>
    );

}


export default TextArea;