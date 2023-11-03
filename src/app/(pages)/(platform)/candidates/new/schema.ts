/* eslint-disable camelcase */

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
  created_at: z.string().optional(),

  last_name: smallString,
  first_name: smallString,
  identification_number: z.string(),
  identification_type: z.enum(IdentificationType),
  birthdate: z.string().optional(),

  email: z.string().email(),
  phone: stringToNumber(z.number().optional()),

  country: smallString,
  state: smallString.optional(),
  locality: smallString.optional(),
  address: mediumString.optional(),
  can_relocate: stringToBoolean(z.boolean().optional()),

  education_level: z.enum(EducationLevel),
  education_status: z.enum(EducationStatus),

  experience_level: z.enum(ExperienceLevel),
  best_skills: largeString,
  why_hire_you: largeString,

  professional_profile: largeString.optional(),
  profile_picture: z.string().url().optional(),
  languages: stringOrArrayToStringArray(z.string().array()),
  accepted_terms: stringToBoolean(z.boolean()),
})

type Schema = z.infer<typeof schema>

export { schema }
export type { Schema }
