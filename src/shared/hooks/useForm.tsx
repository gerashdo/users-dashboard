import { ChangeEvent, useState } from "react"


export const useForm = <T,>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value
    })
  }

  const reset = () => {
    setValues(initialValues)
  }

  return {
    values,
    handleChange,
    reset
  }
}
