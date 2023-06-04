import React from 'react'

import { MultiLevelsPopper } from 'multi-levels-popper'
import SettingPopper from './components/SettingPopper'

const App = () => {
  return (
    <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
      <MultiLevelsPopper arrow right dark basePopper={<SettingPopper />}>
        <div>Hover me!</div>
      </MultiLevelsPopper>
    </div>
  )
}

export default App
