type City = {
  value: string
  label: string
}

type State = {
  value: string
  label: string
  cities: City[]
}

type Country = {
  value: string
  label: string
  states: State[]
}

export type { Country, State, City }
