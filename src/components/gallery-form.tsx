import React from 'react'
import style from '../css/gallery.module.css'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { requiredField, maxLength } from '../validators/validators'
import { Textarea, Input, FileSubmitField } from '../validators/formControls'

const maxLength5 = maxLength(5)
const maxLength25 = maxLength(25)

const ImageForm: React.FC<InjectedFormProps> = React.memo((props) => {
    return <div className={style.item__form}>
        <form onSubmit={props.handleSubmit}>

            <div className={`${style.item__title} ${style.item__text}`}>
                <label>Please write image title
                    <Field validate={[requiredField, maxLength5]} component={Input} type={'text'} name={'title'} />
                </label>
            </div>

            <div className={`${style.item__descr} ${style.item__text}`}>
                <label>Please write image description
                    <Field validate={[requiredField, maxLength25]} component={Textarea} type={'text'} name={'descr'} />
                </label>
            </div>

            <div className={`${style.item__upload} ${style.item__text}`}>
                <label className={style.selectImage}>Select the image
                <Field validate={[requiredField]} name="file" type="file" component={FileSubmitField} />
                </label>
            </div>

            <button>Submit</button>
        </form>
    </div>
}
)

const GalleyReduxForm = reduxForm({ form: 'imageForm' })(ImageForm)

export default GalleyReduxForm