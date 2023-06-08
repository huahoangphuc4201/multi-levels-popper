import React from 'react'

import { MultiLevelsPopper } from 'multi-levels-popper'
import SettingPopper from './components/SettingPopper'
import Tippy from '@tippyjs/react/headless'

const App = () => {
  return (
    <Tippy
      interactive
      placement='right-start'
      render={(attrs) => (
        <MultiLevelsPopper>
          <SettingPopper />
        </MultiLevelsPopper>
      )}
    >
      <button style={{ position: 'absolute', top: '200px', left: '200px' }}>
        My button
      </button>
    </Tippy>
  )
}

export default App
