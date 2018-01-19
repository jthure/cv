import React from 'react'

const Background = function Background(props) {
  return (
    <div
      style={{
        width: '100%', height: '100%', position: 'fixed', top: '0', left: '0', backgroundImage: `url(${props.src})`,
      }}
    />
  )
}
export default Background
