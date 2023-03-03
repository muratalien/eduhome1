import React from 'react'

function Teacher(props) {
  

  return (
    <>
    <div className='col-3'>
    <div className='teach-img'>
          <img src={props.img} />
        </div>
        <div className='teach-name'>
          <h4>{props.name}</h4>
        </div>
        <div className='teach-job'>
          <h5>{props.job}</h5>
        </div>
      </div></>
  )
}

export default Teacher



