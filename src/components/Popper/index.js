import React, { useContext } from 'react'
import classnames from 'classnames/bind'
import PropTypes from 'prop-types'
import styles from './Popper.module.scss'
import { ArrowIcon } from '../../assets/icons'
import { MultiLevelsContext } from '../../context/MultiLevelsContext'

const cx = classnames.bind(styles)

function Popper({ className = '', title, children, maxHeight }) {
  const multiLevelsContext = useContext(MultiLevelsContext)

  return (
    <div className={className + ' ' + cx('wrapper', multiLevelsContext.theme)}>
      {(title || multiLevelsContext.poppers.length > 1) && (
        <div className={cx('header')}>
          {multiLevelsContext.poppers.length > 1 && (
            <div
              className={cx('arrow-icon')}
              onClick={() => multiLevelsContext.removePopper()}
            >
              <ArrowIcon width={20} height={20} />
            </div>
          )}
          <p className={cx('title')}>{title}</p>
        </div>
      )}
      <div
        className={cx('list-children')}
        style={maxHeight && { maxHeight: maxHeight }}
      >
        {children}
      </div>
    </div>
  )
}

Popper.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  maxHeight: PropTypes.string
}

export default Popper
