import React, { useState } from 'react'
import QRCode from 'qrcode.react'
import { useInterval } from './hooks/set-interval'
import moment from 'moment'
import withSizes from 'react-sizes'

const getTime = () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

const App = ({ width, height }) => {
  let [time, setTime] = useState(getTime())

  useInterval(() => {
    setTime(getTime())
  }, 1000)
  return (
    <div className='main-container'>
      <div style={{ color: '#ccc', height: 25 }}>{ `QR-Clock by kaelhem ©2019 - ${time}` }</div>
      <div className='clock-container'>
        <QRCode
          value={ time }
          renderAs='svg'
          size={ Math.min(width, height) - 50 }
          bgColor={ '#26b777' }
          fgColor={ '#FFF' }
        />
      </div>
    </div>
  )
}

export default withSizes(sizes => sizes)(App)
