const options = {
  identificationType: [
    { value: 'dni', label: 'DNI' },
    { value: 'passport', label: 'Pasaporte' },
    { value: 'other', label: 'Otro' },
  ],
  canRelocate: [
    { value: 'true', label: 'Sí' },
    { value: 'false', label: 'No' },
  ],
  educationLevel: [
    { value: 'primary', label: 'Primario' },
    { value: 'secondary', label: 'Secundario' },
    { value: 'tertiary', label: 'Terciario' },
    { value: 'university', label: 'Universitario' },
    { value: 'postgraduate', label: 'Posgrado' },
  ],
  educationStatus: [
    { value: 'complete', label: 'Completo' },
    { value: 'inProgress', label: 'En curso' },
    { value: 'incomplete', label: 'Incompleto' },
  ],
  experienceLevel: [
    { value: 'needToBeTaught', label: 'Necesito que me enseñen' },
    { value: 'canDoWithHelp', label: 'Puedo hacerlo con ayuda' },
    { value: 'canDoAlone', label: 'Puedo hacerlo solo' },
    { value: 'canTrainOthers', label: 'Puedo entrenar a otros' },
    { value: 'haveTrainedOthers', label: 'He entrenado a otros' },
  ],
  languages: [
    { value: 'spanish', label: 'Español' },
    { value: 'english', label: 'Inglés' },
    { value: 'portuguese', label: 'Portugués' },
    { value: 'french', label: 'Francés' },
    { value: 'italian', label: 'Italiano' },
    { value: 'german', label: 'Alemán' },
    { value: 'chinese', label: 'Chino' },
    { value: 'japanese', label: 'Japonés' },
    { value: 'russian', label: 'Ruso' },
    { value: 'other', label: 'Otro' },
  ],
}

export { options }
