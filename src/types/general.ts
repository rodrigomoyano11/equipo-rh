type Color = 'currentColor' | `#${string}` | `var(--${string})`
type Gradient =
  | `conic-gradient(${string})`
  | `linear-gradient(${string})`
  | `radial-gradient(${string})`
  | `var(--${string})`

export type { Color, Gradient }
