import React from 'react'
import style from '../css/gallery.module.css'
import { WrappedFieldProps, WrappedFieldInputProps, WrappedFieldMetaProps } from "redux-form";

export const Input: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={style.formcontrol + " " + (hasError ? style.error : "")}>

      <input {...input} {...props} />
      <div>
        {hasError && <span>{meta.error}</span>}
      </div>

    </div>
  )
}

export const Textarea: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={style.formcontrol + " " + (hasError ? style.error : "")}>

      <textarea {...input} {...props} />
      <div>
        {hasError && <span>{meta.error}</span>}
      </div>

    </div>
  )
}


type FieldSubmitType = {
  input: WrappedFieldInputProps
  meta: WrappedFieldMetaProps
  type: any
}


export const FileSubmitField: React.FC<FieldSubmitType> = ({ input, type, meta }) => {
  const hasError = meta.touched && meta.error
  delete input.value

  return (

    <div className={style.formcontrol + " " + (hasError ? style.error : "")}>

      <label htmlFor={input.name}>
        <input {...input} type={type} />
      </label>
      <div>
        {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  )
}



