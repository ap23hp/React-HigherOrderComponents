import React from 'react'

function HigherOrderComponent(Component){
  return(props)=>{
return (

  <>
<h3> Hello ,added from hoc </h3>
<Component {...props}/>
  </>
)

  }
}

export default HigherOrderComponent