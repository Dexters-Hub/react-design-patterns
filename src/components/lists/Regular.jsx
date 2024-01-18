import React from 'react'

const RegularList = ({items, sourceName, ItemComponent}) => {
  return (
    <>
        <ul>
            {items.map((item, i) => <ItemComponent key={i} {...{ [sourceName] : item}} />)}
        </ul>
    </>
  )
}

export default RegularList