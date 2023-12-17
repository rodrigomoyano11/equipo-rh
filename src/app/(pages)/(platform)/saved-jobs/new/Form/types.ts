import { ListItemProps } from '@/app/_components/forms/SelectField/Item'
import { addSavedJob } from './actions'

type AddApplicationFormProps = {
  candidates: ListItemProps[]
  jobs: ListItemProps[]
  defaultValues: Partial<Awaited<ReturnType<typeof addSavedJob>>>
}

export type { AddApplicationFormProps }
