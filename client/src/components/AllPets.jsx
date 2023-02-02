import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import DeleteProductButton from './AdoptPetButton'
import axios from 'axios'

const AllPets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/pets')
            .then(res => {
                console.log(res.data.Pets)
                setPets(res.data.Pets)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='w-50 m-auto'>
            <div className='d-flex justify-content-between m-3'>
                <h1 >Pet Shelter</h1>
                <NavLink to={"/pets/new"} >add a pet to the shelter</NavLink>
            </div>
            <h4 className='m-3'>These pets are looking for a good home</h4>
            <table className='m-3 w-50 table table-striped border border-dark border-2'>
                <thead >
                    <tr >
                        <th className='border border-dark w-auto border-2'>Name</th>
                        <th className='border border-dark w-auto border-2'>Type</th>
                        <th className='border border-dark w-auto border-2'>Actions</th>
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