'use client'

import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'
import '@uppy/image-editor/dist/style.min.css'
import { DashboardModal } from '@uppy/react'
import { useFileField } from './hook'
import { FileFieldProps } from './types'

const FileField = ({ name, ...props }: FileFieldProps) => {
  const { url, openModal, closeModal, isOpen, uppy } = useFileField(props)

  return (
    <>
      <button type="button" onClick={openModal}>
        Open
      </button>

      <input name={name} type="hidden" value={url} />

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
