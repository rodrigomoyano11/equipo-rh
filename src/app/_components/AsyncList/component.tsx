import { GridList } from 'react-aria-components'
import { useAsyncList } from 'react-stately'
import { IntersectionElement } from '../interactions/IntersectionElement/component'
import { SearchField } from '../interactions/SearchField/component'
import { AsyncListProps } from './types'
import { Spinner } from '../ui/Spinner'

const AsyncList = <T extends object>(props: AsyncListProps<T>) => {
  // Props
  const { onLoad: load, children, label } = props

  // Hooks
  const list = useAsyncList<T, number>({ load })

  // Data
  const hasLoadMore = list.items.length !== 0 && list.loadingState === 'idle'

  // Handlers
  const handleSearch = (value?: string) => {
    if (value === undefined) return
    list.setFilterText(value)
  }

  // Render
  return (
    <>
      <SearchField onSearch={handleSearch} />

      <GridList<T>
        aria-label={label}
        items={list.items}
        renderEmptyState={() => 'No se encontraron resultados'}
        selectionMode="none">
        {children}
      </GridList>

      {hasLoadMore && (
        <IntersectionElement onIntersect={() => list.loadMore()}>
          <Spinner />
        </IntersectionElement>
      )}
    </>
  )
}

export { AsyncList }
