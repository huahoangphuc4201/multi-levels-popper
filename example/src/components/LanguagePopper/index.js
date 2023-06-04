import React from 'react'
import { Popper, PopperItem } from 'multi-levels-popper'
function LanguagePopper() {
  return (
    <Popper maxHeight='200px' title='Languages'>
      <PopperItem>
        <div>English</div>
      </PopperItem>
      <PopperItem>
        <div>Chinese</div>
      </PopperItem>
      <PopperItem>
        <div>Japanese</div>
      </PopperItem>
      <PopperItem>
        <div>French</div>
      </PopperItem>
      <PopperItem>
        <div>Spanish</div>
      </PopperItem>
      <PopperItem>
        <div>Vietnamese</div>
      </PopperItem>
    </Popper>
  )
}

export default LanguagePopper
