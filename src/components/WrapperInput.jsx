import { Field } from "formik";
import React from "react";

export default function WrapperInput({label,name, isTextArea, isSelect,selectOptions, inputClasses,elementClasses,placeholder }) {
    if (isSelect) {
        return (
            <div className={elementClasses}>
                <label htmlFor={name} className="capitalize">{ label}</label>
                <Field id={name} className={inputClasses} as="select" name={name} placeholder={placeholder}>
                    {selectOptions.map((o,index) => (<option className="capitalize" key={index} value={o}>{o}</option>))}
                </Field>
            </div>
        );
    }
    return (
        <div className={elementClasses}>
            <label htmlFor={name} className="capitalize">{label}</label>
            {isTextArea ? <Field id={name} className={`${inputClasses} resize-none`} as="textarea"  name={name} placeholder={placeholder}/> : <Field id={name} className={inputClasses}  name={name} placeholder={placeholder}/>}
        </div>
    );
}
