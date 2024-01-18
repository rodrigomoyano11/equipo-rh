import { z } from 'zod'
import { contactFormValidations } from './validations'

export type ContactFormFields = z.infer<typeof contactFormValidations>
