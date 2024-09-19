import React from 'react'

function TollywoodHeros(props) {
  return (
    
        <div className="herosDiv">
      <img src={props.pic} alt=''></img>
      <h2>Name:{props.name}</h2>
      <h2>Age:{props.age}</h2>
    </div>
      
   
  )
}

export default TollywoodHeros
