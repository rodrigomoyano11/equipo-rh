'use client'

import { TextField } from '@/app/_components/forms/TextField'
import { Button } from '@/app/_components/ui/Button'
import './styles.css'
import { Form } from '@/app/_components/forms/Form'

export type ContactFormProps = {
  className?: string
}

export const ContactForm = ({ className = '' }: ContactFormProps) => {
  const handleAction = (actionData: FormData) => {
    // const data = convertFormDataToJSON<ContactFormFields>(actionData)
    // const isValid = contactFormValidations.safeParse(data)
    // if (!isValid.success) return
    // startTransition(() => {
    //   void submit(actionData)
    //   // eslint-disable-next-line no-alert
    //   alert('Mensaje enviado')
    // })
  }

  return (
    <Form className={`contact-form-component ${className}`} onSubmit={() => {}}>
      <TextField label="Nombre" name="name" placeholder="Juan Perez" />

      <TextField label="Correo" name="email" placeholder="ejemplo@mail.com" />

      <TextField label="Asunto" name="subject" placeholder="Busco Trabajo" />

      <TextField label="Mensaje" name="message" placeholder="Escribe tu mensaje" />

      <Button className="submit" type="submit">
        Enviar
      </Button>
    </Form>
  )
}

export default ContactForm
