import {
  EducationLevel,
  EducationStatus,
  ExperienceLevel,
  IdentificationType,
} from '@/constants/enums'
import {
  largeString,
  mediumString,
  smallString,
  stringOrArrayToStringArray,
  stringToBoolean,
  stringToNumber,
} from '@/constants/validations'
import { z } from 'zod'

const schema = z.object({
  id: z.string().optional(),
  createdAt: z.string().optional(),

  lastName: smallString,
  firstName: smallString,
  identificationNumber: z.string(),
  identificationType: z.enum(IdentificationType),
  birthdate: z.string().optional(),

  email: z.string().email(),
  phone: stringToNumber(z.number().optional()),

  country: z.string(),
  state: z.string().optional(),
  locality: z.string().optional(),
  address: mediumString.optional(),
  canRelocate: stringToBoolean(z.boolean().optional()),

  educationLevel: z.enum(EducationLevel),
  educationStatus: z.enum(EducationStatus),

  experienceLevel: z.enum(ExperienceLevel),
  bestSkills: largeString,
  whyHireYou: largeString,

  professionalProfile: largeString.optional(),
  profilePicture: z.string().url().optional(),
  languages: stringOrArrayToStringArray(z.string().array()),
  resume: z.string().url().optional(),
  acceptedTerms: stringToBoolean(z.boolean()),
})

type Schema = z.infer<typeof schema>

export { schema }
export type { Schema }
