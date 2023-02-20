import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AdoptPetButton = (props) => {
    const navigate = useNavigate();

    const deletePet = () => {
        axios.delete(`http://localhost:8080/api/pets/${props.details}/adopt`)
            .then((res) => {
                console.log(res)
                if (props.goHome) {
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <button className='btn btn-danger' type="submit" onClick={deletePet} formAction="/">Adopt Pet!</button>
        </div>
    )
}

export default AdoptPetButton