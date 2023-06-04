import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './MultiLevelsPopper.module.scss'
import { MutilLevelsProvider } from '../../context/MultiLevelsContext'
import GlobalStyles from '../GlobalStyles'

const cx = classnames.bind(styles)

function MultiLevelsPopper({
  arrow,
  className,
  basePopper,
  children,
  visible,
  right,
  left,
  top,
  bottom,
  popperPosition,
  dark
}) {
  let position = {}
  if (popperPosition) {
    if (popperPosition.top) {
      position = { ...position, top: popperPosition.top }
    }
    if (popperPosition.bottom) {
      position = { ...position, bottom: popperPosition.bottom }
    }
    if (popperPosition.right) {
      position = { ...position, right: popperPosition.right }
    }
    if (popperPosition.left) {
      position = { ...position, left: popperPosition.left }
    }
  }

  return (
    <GlobalStyles>
      <div
        className={
          cx('wrapper', { right, left, top, bottom, visible, dark }) +
          ' ' +
          className
        }
      >
        <div className={cx('trigger')}>
          {children}
          {arrow && <span className={cx('arrow')} />}
          <div className={cx('popper')} style={position}>
            <MutilLevelsProvider theme={{ dark }}>
              {basePopper}
            </MutilLevelsProvider>
          </div>
        </div>
      </div>
    </GlobalStyles>
  )
}

MultiLevelsPopper.propTypes = {
  arrow: PropTypes.bool,
  className: PropTypes.string,
  basePopper: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  right: PropTypes.bool,
  left: PropTypes.bool,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  popperPosition: PropTypes.shape({
    top: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string
  }),
  dark: PropTypes.bool
}
export default MultiLevelsPopper
