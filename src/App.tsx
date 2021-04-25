import React from 'react'
import style from './style/style.less'
import A from './A'

const App: React.FunctionComponent = () => {
  return (
    <div className={style.red}>add react! <A/></div>
  )
}

export default App