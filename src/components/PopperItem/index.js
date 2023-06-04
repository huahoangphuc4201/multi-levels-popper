import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import styles from './PopperItem.module.scss'
import { MultiLevelsContext } from '../../context/MultiLevelsContext'

const cx = classnames.bind(styles)

function PopperItem({ children, childPopper }) {
  const multiLevelsContext = useContext(MultiLevelsContext)

  const handleAddPopper = () => {
    childPopper && multiLevelsContext.addPopper(childPopper)
  }

  return (
    <div
      className={cx('wrapper', multiLevelsContext.theme)}
      onClick={() => handleAddPopper()}
    >
      {children}
    </div>
  )
}

PopperItem.propTypes = {
  children: PropTypes.node,
  childPopper: PropTypes.node
}

export default PopperItem
