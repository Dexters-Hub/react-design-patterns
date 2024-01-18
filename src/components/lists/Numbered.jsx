import React from 'react'

const NumberedList = ({items, sourceName, ItemComponent}) => {
  return (
    <>
        <ul>
            {items.map((item, i) => 
            <>
                <h3>{i+1}</h3>
                <ItemComponent key={i} {...{ [sourceName] : item}} />
            </>
            )}
        </ul>
    </>
  )
}

export default NumberedList