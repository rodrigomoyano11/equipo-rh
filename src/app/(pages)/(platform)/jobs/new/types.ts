import { Enums } from '@/db/types'

type Options = {
  visibility: {
    label: string
    value: Enums<'visibility'>
  }[]
}

export type { Options }
