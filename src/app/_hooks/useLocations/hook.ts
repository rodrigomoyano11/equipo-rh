'use client'

import { ListItemProps } from '@/app/_components/forms/SelectField/Item'
import { getLocations } from '@/app/_services/locations'
import { useState } from 'react'

const useLocations = () => {
  // States
  const [currentLocation, setCurrentLocation] = useState<{
    country?: string
    state?: string
    locality?: string
  }>({})

  const [countries, setCountries] = useState<ListItemProps[]>([])
  const [states, setStates] = useState<ListItemProps[]>([])
  const [localities, setLocalities] = useState<ListItemProps[]>([])

  // Methods
  const getCountries = async () => {
    await getLocations().then(setCountries)
  }

  // Handlers
  const handleCountryChange = async (country: string) => {
    setCurrentLocation({ country })

    await getLocations(country).then(setStates)
  }

  const handleStateChange = async (state: string) => {
    setCurrentLocation((prevState) => ({ ...prevState, state }))

    await getLocations(currentLocation.country, state).then(setLocalities)
  }

  const handleLocalityChange = (locality: string) => {
    setCurrentLocation((prevState) => ({ ...prevState, locality }))
  }

  // Return
  return {
    currentLocation,
    countries,
    states,
    localities,
    getCountries,
    handleCountryChange,
    handleStateChange,
    handleLocalityChange,
  }
}

export { useLocations }
