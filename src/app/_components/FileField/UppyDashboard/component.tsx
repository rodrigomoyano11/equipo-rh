'use client'

import { Dashboard } from '@uppy/react'
import { useEffect } from 'react'
import { FieldValues, PathValue, useFormContext } from 'react-hook-form'
import { useFileField } from './hook'
import './styles.css'
import { UppyDashboardProps } from './types'

const UppyDashboard = ({
  name,
  isDisabled,
  maxFileSize = 50,
  ...restOfProps
}: UppyDashboardProps) => {
  // Hooks
  const { url, uppy, isLoading } = useFileField({
    maxFileSize: maxFileSize * 1024 * 1024,
    ...restOfProps,
  })

  const { setValue } = useFormContext()

  // Effects
  useEffect(() => {
    setValue(name, url as PathValue<FieldValues, typeof name>)
  }, [name, setValue, url])

  // Render
  const className = `uppy-dashboard ${isLoading ? 'loading' : ''} ${isDisabled ? 'disabled' : ''}`

  return (
    <div className="uppy-dashboard">
      <Dashboard
        disableInformer
        disableStatusBar
        hideCancelButton
        hidePauseResumeButton
        hideProgressAfterFinish
        showRemoveButtonAfterComplete
        className={className}
        disabled={isDisabled}
        doneButtonHandler={undefined}
        height="100%"
        note={`Tamaño máximo de archivo: ${maxFileSize} MB`}
        proudlyDisplayPoweredByUppy={false}
        showProgressDetails={false}
        uppy={uppy}
        width="100%"
      />
    </div>
  )
}

export { UppyDashboard }
