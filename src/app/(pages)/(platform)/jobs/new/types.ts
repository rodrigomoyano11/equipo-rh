import { Enums } from '@/utils/supabase/types'

type Options = {
  visibility: {
    label: string
    value: Enums<'visibility'>
  }[]
}

export type { Options }
