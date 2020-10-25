export type FieldValidatorType = (value: string) => string | undefined


export const requiredField: FieldValidatorType = (value) => {
    if (value) return undefined
    return 'Please fill the field'
}

export const maxLength = (maxLenght: number): FieldValidatorType => (value) => {
    if (value.length > maxLenght) return `max lenght is ${maxLenght} symbols`
    return undefined
}
