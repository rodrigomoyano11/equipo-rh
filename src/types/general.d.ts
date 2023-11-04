type Color = `#${string}` | 'currentColor' | `var(--${string})`
type Gradient =
  | `linear-gradient(${string})`
  | `radial-gradient(${string})`
  | `conic-gradient(${string})`
  | `var(--${string})`

export type { Color, Gradient }
