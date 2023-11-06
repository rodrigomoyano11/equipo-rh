'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormEvent, useTransition } from 'react'
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler as RHFSubmitErrorHandler,
  SubmitHandler as RHFSubmitHandler,
  useForm,
} from 'react-hook-form'
import { FormProps, SubmitHandler } from './types'
import { Button } from '../../ui/Button'
import { ZodType } from 'zod'

const Form = <Schema extends FieldValues = FieldValues>(props: FormProps<Schema>) => {
  // Props
  const { schema, children, onSubmit, className = '', defaultValues } = props

  // Hooks
  const methods = useForm<Schema>({
    resolver: zodResolver<ZodType<Schema>>(schema),
    defaultValues,
  })

  const [isPending, startTransition] = useTransition()

  // Handlers
  const handleValidSubmit: RHFSubmitHandler<Schema> = async (data) => {
    startTransition(async () => {
      await onSubmit({ data, isValid: true })
    })
  }

  const handleInvalidSubmit: RHFSubmitErrorHandler<Schema> = async (errors) => {
    startTransition(async () => {
      await onSubmit({ errors, isValid: false })
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    await methods.handleSubmit(handleValidSubmit, handleInvalidSubmit)(e)
  }

  // Render
  return (
    <FormProvider {...methods}>
      <form className={`form ${className}`} onSubmit={handleSubmit}>
        {children}

        <Button type="submit">{isPending ? 'Enviando...' : 'Enviar'}</Button>
      </form>
    </FormProvider>
  )
}

export { Form }
export type { FormProps, SubmitHandler }
