const EducationLevel = ['postgraduate', 'primary', 'secondary', 'tertiary', 'university'] as const

const EducationStatus = ['complete', 'inProgress', 'incomplete'] as const

const ExperienceLevel = [
  'canDoAlone',
  'canDoWithHelp',
  'canTrainOthers',
  'haveTrainedOthers',
  'needToBeTaught',
] as const

const IdentificationType = ['dni', 'other', 'passport'] as const

const SkillLevel = ['advanced', 'basic', 'intermediate'] as const

const Visibility = ['private', 'public'] as const

export {
  EducationLevel,
  EducationStatus,
  ExperienceLevel,
  IdentificationType,
  SkillLevel,
  Visibility
}
