import React from 'react'

import './form-input-component.scss'

const FormInput = ({HandleChange, label , ...otherProps}) =>{
    return(<div className='group'>
            <input className='form-input' onChange={HandleChange}{...otherProps} />
            {
                label ?
                (<label className={`${otherProps.value.label ? 'shrink': ''} form-input-label`}>{label}</label>): null
            }
        </div>

    )
};
export default FormInput