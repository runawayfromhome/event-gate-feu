import React from 'react'

const Input = ({ label, type, placeholder, name, defaultValue }) => {
    return (
        <div>
            <fieldset className="fieldset">
                <legend className="fieldset-legend">{label}</legend>
                <input
                    name={name}
                    type={type}
                    className="input"
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
            </fieldset>
        </div>
    );

}

export default Input
