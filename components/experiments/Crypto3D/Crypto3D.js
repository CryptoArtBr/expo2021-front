import {useRef, useLayoutEffect} from 'react'

import {init, setup} from './script'

export default () => {
  const canvasEl = useRef(null)

  useLayoutEffect(() => {
    if (canvasEl.current) {
      setup()
      init()
    }
  },[])

  return <div id="container" ref={canvasEl} />
}