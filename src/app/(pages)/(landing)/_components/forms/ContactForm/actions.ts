'use server'


export const submit = async (actionData: FormData): Promise<void> => {
  try {
    // const data = convertFormDataToJSON<ContactFormFields>(actionData)
    // await contactFormValidations.parseAsync(data)
    // await sendEmail({
    //   subject: data.subject,
    //   html: `<p>Nombre: ${data.name}</p><p>Correo: ${data.email}</p><p>Mensaje: ${data.message}</p>`,
    // })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}
