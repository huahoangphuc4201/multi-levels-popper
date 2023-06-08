import React from 'react'
import PropTypes from 'prop-types'
import { MutilLevelsProvider } from '../../context/MultiLevelsContext'
import GlobalStyles from '../GlobalStyles'

function MultiLevelsPopper({ children, dark }) {
  return (
    <GlobalStyles>
      <MutilLevelsProvider theme={{ dark }}>{children}</MutilLevelsProvider>
    </GlobalStyles>
  )
}

MultiLevelsPopper.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool
}
export default MultiLevelsPopper
