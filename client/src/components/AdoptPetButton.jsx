import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const AdoptPetButton = (props) => {
    const navigate = useNavigate();
    
    const deleteProduct = () => {
        axios.delete(`http://localhost:8080/api/pets/${props.details}/adopt`)
            .then((res)=>{
                if(props.goHome){
                    navigate("/")
                }
            })
            .catch(err=>console.log(err, "error"))
    }
    return (
        <div>
            <button className='btn btn-danger' type="submit" onClick={deleteProduct} formAction="/">Adopt Pet!</button>
        </div>
    )
}

export default AdoptPetButton