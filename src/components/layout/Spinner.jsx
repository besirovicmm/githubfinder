import React from 'react'
import SpinnerGif from './assets/spinner.gif'

const Spinner = () => {
  return (
    <div className="w-100 mt-20">
      <img
        src={SpinnerGif}
        className="text-center mx-auto"
        alt="SpinnerLoading"
      />
    </div>
  )
}

export default Spinner
