'use client'

// import { Form } from '@/app/_components/forms/Form'
// import { Input } from '@/app/_components/forms/Input'
// import { Button } from '@/app/_components/ui/Button'
import { Button, Input } from '@nextui-org/react'
import './styles.css'

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
    <form className={`contact-form-component ${className}`} onSubmit={() => {}}>
      <Input label="Nombre" name="name" placeholder="Juan Perez" />

      <Input label="Correo" name="email" placeholder="ejemplo@mail.com" />

      <Input label="Asunto" name="subject" placeholder="Busco Trabajo" />

      <Input label="Mensaje" name="message" placeholder="Escribe tu mensaje" />

      <Button className="submit" type="submit">
        Enviar
      </Button>
    </form>
  )
}

// export default ContactForm
