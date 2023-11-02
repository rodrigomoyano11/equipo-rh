const options = {
  identificationType: [
    { value: 'dni', label: 'DNI' },
    { value: 'passport', label: 'Pasaporte' },
    { value: 'other', label: 'Otro' },
  ],
  canRelocate: [
    { value: "true", label: 'Sí' },
    { value: "false", label: 'No' },
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
    { value: 'in_progress', label: 'En curso' },
    { value: 'incomplete', label: 'Incompleto' },
  ],
  experienceLevel: [
    { value: 'need_to_be_taught', label: 'Necesito que me enseñen' },
    { value: 'can_do_with_help', label: 'Puedo hacerlo con ayuda' },
    { value: 'can_do_alone', label: 'Puedo hacerlo solo' },
    { value: 'can_train_others', label: 'Puedo entrenar a otros' },
    { value: 'have_trained_others', label: 'He entrenado a otros' },
  ],
  languages: [
    { value: 'spanish', label: 'Español' },
    { value: 'english', label: 'Inglés' },
    { value: 'portuguese', label: 'Portugués' },
  ],
}

export { options }
