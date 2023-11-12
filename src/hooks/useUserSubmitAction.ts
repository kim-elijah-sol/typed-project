import React from 'react'

function useUserSubmitAction(callback: () => void) {
  function onBlur(e: React.FocusEvent<HTMLInputElement>) {
    callback()
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      callback()
    }
  }

  return {
    onBlur,
    onKeyDown,
  }
}

export default useUserSubmitAction
