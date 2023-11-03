const EducationLevel = ['postgraduate', 'primary', 'secondary', 'tertiary', 'university'] as const

const EducationStatus = ['complete', 'in_progress', 'incomplete'] as const

const ExperienceLevel = [
  'can_do_alone',
  'can_do_with_help',
  'can_train_others',
  'have_trained_others',
  'need_to_be_taught',
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
