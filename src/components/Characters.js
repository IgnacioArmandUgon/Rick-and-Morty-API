import React from 'react'

const Characters = ({characters = []}) => {
  return (
    <div className='row'>
        {
            characters.map((item, index) => (
                <div key={index} className='col mb-4'>
                    <div className='card' style={{maxWidth: "250px"}}>
                        <img src={item.image} alt="" />
                        <div className='card-body'>
                            <h5 className='card-title'>{item.name}</h5>
                            <hr/>
                            <p> Origen: {item.origin.name}</p>
                            <p> Ubicación: {item.location.name}</p>
                            <p> Especie: {item.species}</p>
                            <p> Estatus: {item.status}</p>
                        </div>
                        
                    </div>
                </div>
            ))
        }
        

    </div>
  )
}

export default Characters