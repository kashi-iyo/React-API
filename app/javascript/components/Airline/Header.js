import React from 'react'

const Header = (props) => {
  const {name, image_url} = props.attributes

  return (
    <div className="warpper">
      <h1><img src={image_url} alt={name} width="50" /> {name} </h1>
    </div>
  )
}

export default Header
