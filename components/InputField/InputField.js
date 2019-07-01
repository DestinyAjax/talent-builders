import React from 'react';
import './InputField.scss';

const InputField = props => {
    if(props.fieldType === 'password') {
        return (
            <>
                <input 
                    type={props.fieldType} 
                    className="form-control input-field" 
                    name={props.fieldName}
                    value={props.fieldValue}
                    onChange={props.onChangeField}
                    {...props}
                />
                <span class="fa fa-fw fa-eye field-icon toggle-password" onClick={props.onShowPassword}></span>
            </>
        )
    } else {
        return (
            <>
                <input 
                    type={props.fieldType} className="form-control input-field" 
                    name={props.fieldName}
                    value={props.fieldValue}
                    onChange={props.onChangeField}
                    {...props}
                />
            </>
        );
    }   
}

export default InputField;