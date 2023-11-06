import { GridListProps } from 'react-aria-components'

type OnLoad<T extends object> = (
  searchValue?: string,
  cursor?: number,
) => Promise<{ cursor: number | null; items: T[] }>

type AsyncListProps<T extends object> = {
  label: string
  onLoad: OnLoad<T>
  children: GridListProps<T>['children']
}

export type { AsyncListProps, OnLoad }
