'use client'

import { DashboardModal } from '@uppy/react'
import { useId } from 'react'
import { useFileField } from './hook'
import { FileFieldProps } from './types'

const FileField = ({ name, label, ...props }: FileFieldProps) => {
  const { url, openModal, closeModal, isOpen, uppy } = useFileField(props)

  const id = useId()

  return (
    <>
      <label htmlFor={id}>{label}</label>

      <button type="button" onClick={openModal}>
        Open
      </button>

      <input id={id} name={name} type="hidden" value={url} />

      <DashboardModal
        hideCancelButton
        hidePauseResumeButton
        showProgressDetails
        showRemoveButtonAfterComplete
        doneButtonHandler={closeModal}
        open={isOpen}
        plugins={['ImageEditor']}
        proudlyDisplayPoweredByUppy={false}
        uppy={uppy}
        onRequestClose={closeModal}
      />
    </>
  )
}

export { FileField }
export type { FileFieldProps }
