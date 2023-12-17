import { ListItemProps } from '@/app/_components/forms/SelectField/Item'
import { Schema } from './schema'

type AddApplicationFormProps = {
  candidates: ListItemProps[]
  jobs: ListItemProps[]
  defaultValues: Schema
}

export type { AddApplicationFormProps }
