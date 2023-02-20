import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

import AdoptPetButton from './AdoptPetButton'

const PetDetails = () => {
    const [details, setDetails] = useState({})
    const [like, setLike] = useState()
    const [liked, setLiked] = useState(false)
    const { petId } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/pets/${petId}`)
            .then(res => {
                console.log(res)
                setDetails(res.data.Pets)
            })
            .catch(err => console.log(err))
    }, [])

    const likeButton = (e) => {
        if (!liked) {
            const newLike = details.likes + 1
            setLike(newLike)
            axios.put(`http://localhost:8080/api/pets/${petId}/edit`, {
                ...details,
                likes: newLike
            })
                .then(res => console.log(res))
                .catch(err => console.log(err))

            axios.get(`http://localhost:8080/api/pets/${petId}`)
                .then(res => {
                    console.log(res)
                    setDetails(res.data.Pets)
                })
                .catch(err => console.log(err))
            setLiked(true);
        }

    }

    return (
        <div className='col-lg-6 col-md-8 m-auto'>
            <div className='d-flex justify-content-between mt-2'>
                <h1 >Pet Shelter</h1>
                <NavLink to={"/"} >back to home</NavLink>
            </div>
            <div className='d-flex justify-content-between'>
                <h4 className='mt-2'>Details about {details.name}</h4>
                <AdoptPetButton details={petId} goHome={true} />
            </div>
            <div className='mt-2 border border-dark border-2 p-3 d-flex'>
                <div className='mt-2 mb-3  w-50 d-flex flex-column'>
                    <div>

                        <h5>Pet Type: {details.petType}</h5>
                        <h5>Description: {details.description}</h5>
                        <div>
                            {
                                details.skill1 || details.skill2 || details.skill3 ? <h5>Skills:</h5> : <></>

                            }
                            <ul >
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
                            <div className=''>
                                {!liked ? details.likes : like} like(s)
                            </div>
                            <button className='btn btn-success' onClick={likeButton}>Like</button>
                        </div>
                    </div>
                </div>
                <div className='mt-2 mb-3 w-50 flex-wrap'>
                    {
                        details.imgUrl ? <img src={details.imgUrl} alt="pet" className='w-100' /> : <img src="http://www.clipartbest.com/cliparts/xTg/ojp/xTgojpXXc.jpeg" alt="pet" className='w-100' />
                    }
                </div>
            </div>
        </div>
    )
}

export default PetDetails