import { ListItemProps } from '@/app/_components/forms/SelectField/Item'
import { Schema } from './schema'

type AddSavedJobFormProps = {
  candidates: ListItemProps[]
  jobs: ListItemProps[]
  defaultValues: Schema
}

export type { AddSavedJobFormProps }
