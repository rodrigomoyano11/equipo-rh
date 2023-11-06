const getPaginationRange = (cursor = 0, elementsPerPage = 3) => {
  const from = cursor * elementsPerPage
  const to = (cursor + 1) * elementsPerPage - 1

  return { from, to }
}

export { getPaginationRange }
