/// <reference path=".snaplet/snaplet.d.ts" />

import { copycat, faker } from '@snaplet/copycat'
import { defineConfig } from 'snaplet'

copycat.setHashKey('U0X+FyuHVx0hMNsX')

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

const Visibility = ['private', 'public'] as const

const languages = [
  'spanish',
  'english',
  'portuguese',
  'french',
  'italian',
  'german',
  'chinese',
  'japanese',
  'russian',
  'other',
] as const

const config = defineConfig({
  generate: {
    run: async (snaplet) => {
      const userIds = Array.from({ length: 10 }, () => faker.string.uuid())

      const users = snaplet.users((x) =>
        x(userIds.length, (index) => ({
          id: userIds[index],
          name: faker.person.fullName(),
          email: faker.internet.email(),
          createdAt: faker.date.past().toISOString(),
        })),
      )

      const candidates = snaplet.candidates(
        (x) =>
          x(userIds.length, (index) => ({
            id: userIds[index],
            email: faker.internet.email(),
            createdAt: faker.date.past().toISOString(),
            acceptedTerms: faker.datatype.boolean(),
            address: faker.location.streetAddress(),
            phone: Number(faker.phone.number('##########')),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            birthdate: faker.date.birthdate().toISOString(),
            profilePicture: faker.image.avatarGitHub(),
            canRelocate: faker.datatype.boolean(),
            country: faker.location.country(),
            state: faker.location.state(),
            locality: faker.location.city(),
            identificationNumber: faker.number.int().toString(),
            identificationType: faker.helpers.arrayElement(IdentificationType),
            educationLevel: faker.helpers.arrayElement(EducationLevel),
            educationStatus: faker.helpers.arrayElement(EducationStatus),
            experienceLevel: faker.helpers.arrayElement(ExperienceLevel),
            bestSkills: faker.lorem.words(5),
            whyHireYou: faker.lorem.paragraph(),

            languages: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () =>
              faker.helpers.arrayElement(languages),
            ),

            professionalProfile: faker.person.bio(),
            resume: faker.internet.url(),
          })),
        { autoConnect: true },
      )

      const companies = snaplet.companies(
        (x) =>
          x(20, () => ({
            id: faker.string.uuid(),
            name: faker.company.name(),
            createdAt: faker.date.past().toISOString(),
            description: faker.company.catchPhrase(),
            logo: faker.image.url(),
          })),
        { autoConnect: true },
      )

      const jobs = snaplet.jobs(
        (x) =>
          x(50, () => ({
            id: faker.string.uuid(),
            title: faker.person.jobTitle(),
            createdAt: faker.date.past().toISOString(),
            description: faker.lorem.paragraph(),
            salary: Number(faker.finance.amount()),
            visibility: faker.helpers.arrayElement(Visibility),
          })),
        { autoConnect: true },
      )

      const applications = snaplet.applications(
        (x) =>
          x(20, () => ({
            id: faker.string.uuid(),
            createdAt: faker.date.past().toISOString(),
          })),
        { autoConnect: true },
      )

      const savedJobs = snaplet.savedJobs(
        (x) =>
          x(10, () => ({
            id: faker.string.uuid(),
            createdAt: faker.date.past().toISOString(),
          })),
        { autoConnect: true },
      )

      await snaplet.$pipe([users, candidates, companies, jobs, applications, savedJobs])
    },
  },
})

export default config
