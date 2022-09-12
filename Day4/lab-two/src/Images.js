import React, { useState, Fragment} from 'react'

const Images = () => {
    const [image, setImage] = useState(6);

    const arrayLeft = () => {
    
    }
  return (
    <div className="">
        <div onClick={arrayLeft} className="arrow-left">
            &#10094;
        </div>
        <img src={`./img/${image}.jpeg`}></img>
        <div className="">
            &#10095;
        </div>
    </div>
  )
}

// object-fit: cover

export default Images