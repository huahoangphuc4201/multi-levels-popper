import React, { Fragment, useState } from 'react'
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
  dark,
  toggle = false
}) {
  const [show, setShow] = useState(false)
  const [trigger, setTrigger] = useState(null)
  const handleShow = (e) => {
    if (trigger === null) {
      setTrigger(e.target)
      setShow(!show)
    }
    if (e.target === trigger) {
      setShow(!show)
    }
  }
  let Component
  if (toggle) {
    visible = true
  }

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

  if (toggle) {
    let Popper
    if (show) {
      Popper = (
        <Fragment>
          {arrow && <span className={cx('arrow')} />}
          <div className={cx('popper')} style={position}>
            <MutilLevelsProvider theme={{ dark }}>
              {basePopper}
            </MutilLevelsProvider>
          </div>
        </Fragment>
      )
    }
    Component = (
      <div className={cx('trigger')} onClick={(e) => handleShow(e)}>
        {children}
        {Popper}
      </div>
    )
  } else {
    Component = (
      <div className={cx('trigger')}>
        {children}
        {arrow && <span className={cx('arrow')} />}
        <div className={cx('popper')} style={position}>
          <MutilLevelsProvider theme={{ dark }}>
            {basePopper}
          </MutilLevelsProvider>
        </div>
      </div>
    )
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
        {Component}
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
  dark: PropTypes.bool,
  toggle: PropTypes.bool
}
export default MultiLevelsPopper
