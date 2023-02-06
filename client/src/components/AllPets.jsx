import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const AllPets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/pets')
            .then(res => {
                setPets(res.data.Pets)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='col-lg-6 col-md-8 m-auto'>
            <div className='d-flex justify-content-between mt-2'>
                <h1 >Pet Shelter</h1>
                <NavLink to={"/pets/new"} >add a pet to the shelter</NavLink>
            </div>
            <div className=' mb-3'>
                <h4 className='mt-2'>These pets are looking for a good home</h4>
            </div>
            <table className='mt-2 table table-striped border border-dark border-2 p-3'>
                <thead >
                    <tr >
                        <th className='border border-dark  border-2'>Name</th>
                        <th className='border border-dark  border-2'>Type</th>
                        <th className='border border-dark  border-2'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pets.map((pet, id) => {
                            return (<tr key={pet + id + "tr"} ><td className='border border-dark' key={pet + id + "name"}>{pet.name}</td><td className='border border-dark' key={pet + id + "type"}>{pet.petType}</td><td className='border border-dark' key={pet + id + "link"}><NavLink to={"pets/" + pet._id} >details</NavLink> | <NavLink to={"pets/" + pet._id + "/edit"} >edit</NavLink></td></tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllPets