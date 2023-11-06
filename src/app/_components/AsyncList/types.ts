import { GridListProps } from 'react-aria-components'
import { AsyncListOptions } from 'react-stately'

type AsyncListProps<T extends object> = {
  label: string
  onLoad: AsyncListOptions<T, number>['load']
  children: GridListProps<T>['children']
}

export type { AsyncListProps }
