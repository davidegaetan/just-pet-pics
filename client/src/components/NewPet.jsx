import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'

const NewPet = () => {
    const navigate = useNavigate();
    const [skill1, setSkill1] = useState()
    const [skill2, setSkill2] = useState()
    const [skill3, setSkill3] = useState()
    const [name, setName] = useState();
    const [petType, setPetType] = useState();
    const [description, setDescription] = useState("");
    const [allErrors, setAllErrors] = useState("")

    const newPet = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/pets/new/', {
            name,
            petType,
            description,
            skill1,
            skill2,
            skill3,
            likes: 0
        })
            .then(res => {
                alert(res.data.err.errors.name.message + "\n" + res.data.err.errors.description.message + "\n" + res.data.err.errors.petType.message)
                console.log(res)
                navigate("/");
            })
            .catch(err => console.log(err, "err"))
    }

    return (
        <div className='w-50 m-auto'>
            <div className='d-flex justify-content-between m-3'>
                <h1 >Pet Shelter</h1>
                <NavLink to={"/"} >back to home</NavLink>
            </div>
            <h4 className='m-3'>Know a pet needing a home?</h4>
            <form className='m-3 border border-dark border-2 d-flex w-75 justify-content-around'>
                <div className='d-flex flex-column m-3'>
                    <label htmlFor="name" >Pet Name</label>
                    <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} />
                    <label htmlFor="petType" >Pet Type</label>
                    <input type="text" name="petType" id="petType" onChange={e => setPetType(e.target.value)} />
                    <label htmlFor="description" >Description</label>
                    <input type="text" name="description" id="description" onChange={e => setDescription(e.target.value)} />
                    <button type="submit" className='mt-3 btn btn-primary' onClick={newPet}>Add Pet</button>
                </div>
                <div className='d-flex flex-column m-3'>
                    <p>Skills (optional):</p>
                    <label htmlFor="skill-1" >Skill 1:</label>
                    <input type="text" name="skill-1" id="description" onChange={e => setSkill1(e.target.value)} />
                    <label htmlFor="skill-2" >Skill 2:</label>
                    <input type="text" name="skill-2" id="description" onChange={e => setSkill2(e.target.value)} />
                    <label htmlFor="skill-3" >skill 3:</label>
                    <input type="text" name="skill-3" id="description" onChange={e => setSkill3(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default NewPet