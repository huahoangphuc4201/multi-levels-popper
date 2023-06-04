import React, { createContext, useState } from 'react'

const MultiLevelsContext = createContext()

function MutilLevelsProvider({ children, theme = 'light' }) {
  const [poppers, setPoppers] = useState([children])
  const addPopper = (popper) => {
    setPoppers((prev) => [...prev, popper])
  }
  const removePopper = () => {
    setPoppers(poppers.slice(0, -1))
  }

  return (
    <MultiLevelsContext.Provider
      value={{
        poppers,
        addPopper,
        removePopper,
        theme
      }}
    >
      {poppers[poppers.length - 1]}
    </MultiLevelsContext.Provider>
  )
}

export { MutilLevelsProvider, MultiLevelsContext }
