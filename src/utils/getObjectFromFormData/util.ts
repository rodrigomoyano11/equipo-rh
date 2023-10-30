const getObjectFromFormData = <T>(formData: FormData): T => {
  const shouldBeExcluded = ([key]: [string, FormDataEntryValue]): boolean =>
    !key.startsWith('$') && key !== 'files[]'

  const entries = [...formData].filter(shouldBeExcluded)

  const object = Object.fromEntries(entries)

  return object as T
}

export { getObjectFromFormData }
