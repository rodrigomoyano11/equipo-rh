'use client'

import { useState } from 'react'
import { GridList } from 'react-aria-components'
import { useAsyncList } from 'react-stately'
import { IntersectionElement } from '../interactions/IntersectionElement/component'
import { SearchField } from '../interactions/SearchField/component'
import { Spinner } from '../ui/Spinner'
import { ListProps } from './types'

const List = <T extends object>(props: ListProps<T>) => {
  // Props
  const { onLoad, children, label } = props

  // Hooks
  const [hasNextPage, setHasNextPage] = useState(true)

  const list = useAsyncList<T, number>({
    load: async ({ cursor, filterText }) => {
      const response = await onLoad(filterText, cursor)

      const { items, cursor: currentCursor } = response

      const nextPage = items.length ? Number(currentCursor) + 1 : undefined

      setHasNextPage(items.length !== 0)

      return { items, cursor: nextPage }
    },
  })

  // Handlers
  const handleSearch = (value?: string) => {
    if (value === undefined) return
    list.setFilterText(value)
  }

  // Data
  const showLoadMore = hasNextPage && list.items.length !== 0 && list.loadingState === 'idle'

  // Render
  return (
    <>
      <SearchField onSearch={handleSearch} />

      <GridList<T>
        aria-label={label}
        items={list.items}
        renderEmptyState={hasNextPage ? () => <Spinner /> : () => 'No se encontraron resultados'}
        selectionMode="none">
        {children}
      </GridList>

      {showLoadMore && (
        <IntersectionElement onIntersect={() => list.loadMore()}>
          <Spinner />
        </IntersectionElement>
      )}
    </>
  )
}

export { List }
