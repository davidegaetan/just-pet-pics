import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import AdoptPetButton from './AdoptPetButton'

const PetDetails = () => {
    const [details, setDetails] = useState({})
    const { petId } = useParams();
    console.log(petId, "petId")
    useEffect(() => {
        axios.get(`http://localhost:8080/api/pets/${petId}`)
            .then(res => {
                console.log(res.data)
                setDetails(res.data.Pets)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='w-50 m-auto'>
            <div className='d-flex justify-content-between m-3'>
                <h1 >Pet Shelter</h1>
                <NavLink to={"/"} >back to home</NavLink>
            </div>
            <div className='d-flex justify-content-between m-3'>
                <h4>Details about {details.name}</h4>
                <AdoptPetButton details={petId} goHome={true} />
            </div>
            <div className='m-3 w-50 border border-dark border-2 p-3'>
                <h5>Pet Type: {details.petType}</h5>
                <h5>Description: {details.description}</h5>
                <div className='d-flex flex-row justify-content-around mt-3'>
                    <div>
                {
                    details.skill1 || details.skill2 || details.skill3 ? <h5>Skills:</h5> : <></>
                    
                }
                <ul>
                    {
                        details.skill1 ? <li><h5>{details.skill1}</h5></li> : <></>
                    }
                    {
                        details.skill2 ? <li><h5>{details.skill2}</h5></li> : <></>
                    }
                    {
                        details.skill3 ? <li><h5>{details.skill3}</h5></li> : <></>
                    }
                </ul>
                    </div>
                    {
                        details.imgUrl ? <img src={details.imgUrl} alt="dobermna puppy" className='w-50'/> : <div className='w-25'></div>
                    }
                
                </div>
                <button className='btn btn-success'>Like</button><p>{details.likes} like(s)</p>
            </div>
        </div>
    )
}

export default PetDetails