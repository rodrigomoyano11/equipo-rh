import { addCompany } from './actions'

type AddCompanyFormProps = {
  defaultValues: Partial<Awaited<ReturnType<typeof addCompany>>>
}

export type { AddCompanyFormProps }
