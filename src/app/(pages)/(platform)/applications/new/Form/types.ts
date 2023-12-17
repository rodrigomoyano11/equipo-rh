import { ListItemProps } from '@/app/_components/forms/SelectField/Item'
import { addApplication } from './actions'

type AddApplicationFormProps = {
  candidates: ListItemProps[]
  jobs: ListItemProps[]
  defaultValues: Partial<Awaited<ReturnType<typeof addApplication>>>
}

export type { AddApplicationFormProps }
