import React from 'react'
import { Popper, PopperItem } from 'multi-levels-popper'
import classnames from 'classnames/bind'
import styles from './SettingPopper.module.scss'
import LanguagePopper from '../LanguagePopper'

const cx = classnames.bind(styles)

function SettingPopper() {
  return (
    <Popper className={cx('wrapper')}>
      <PopperItem>
        <div>Setting 1</div>
      </PopperItem>
      <PopperItem childPopper={<LanguagePopper />}>
        <div>Setting 2 (click me!)</div>
      </PopperItem>
      <PopperItem>
        <div>Setting 3</div>
      </PopperItem>
    </Popper>
  )
}

export default SettingPopper
