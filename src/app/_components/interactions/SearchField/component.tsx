'use client'

import { Icon } from '@/app/_components/ui/Icon'
import { useDebounce } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'
import { SearchField as AriaSearchField, Button, Input } from 'react-aria-components'
import { SearchFieldProps } from './types'

const SearchField = (props: SearchFieldProps) => {
  // Props
  const { onSearch, className = '' } = props

  // Hooks
  const [value, setValue] = useState<string>()

  const debouncedValue = useDebounce(value, 500)

  // Effects
  useEffect(() => {
    onSearch(debouncedValue)
  }, [debouncedValue])

  // Render
  return (
    <AriaSearchField
      aria-label="Buscar"
      className={`search-field ${className}`}
      onChange={setValue}>
      <Input placeholder="Buscar" />

      <Button>
        <Icon name="close" size="small" />
      </Button>
    </AriaSearchField>
  )
}

export { SearchField }
export type { SearchFieldProps }
