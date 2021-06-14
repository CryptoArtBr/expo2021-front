import { useRef, useLayoutEffect } from 'react'

import { init, setup, end } from './script'

export const Crypto3D = () => {
  const canvasEl = useRef(null)

  useLayoutEffect(() => {
    if (canvasEl.current) {
      setup()
      init()
    }
    return () => {
      end()
    }
  }, [])

  return <div id="container" ref={canvasEl} />
}
