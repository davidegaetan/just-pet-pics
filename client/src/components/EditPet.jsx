import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const EditPet = () => {
    const [details, setDetails] = useState({})
    const { petId } = useParams();
    const [skill1, setSkill1] = useState(details.skill1)
    const [skill2, setSkill2] = useState(details.skill2)
    const [skill3, setSkill3] = useState(details.skill3)
    const [name, setName] = useState(details.name);
    const [petType, setPetType] = useState(details.petType);
    const [description, setDescription] = useState(details.description);
    const [imgUrl, setImgUrl] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/pets/${petId}`)
            .then(res => {
                setDetails(res.data.Pets)
            })
            .catch(err => console.log(err))
    }, [])

    const editProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/pets/${petId}/edit`, {
            name,
            petType,
            description,
            skill1,
            skill2,
            skill3,
            imgUrl
        })
            .then(res => console.log(res))
            .catch(err => console.log(err, "err"))
    }

    return (
        <div className='w-50 m-auto'>
            <div className='d-flex justify-content-between m-3'>
                <h1 >Pet Shelter</h1>
                <NavLink to={"/"} >back to home</NavLink>
            </div>
            <h4 className='m-3'>Edit {details.name}</h4>
            <form className='m-3 border border-dark border-2 d-flex w-75 justify-content-around'>
                <div className='d-flex flex-column m-3'>
                    <label htmlFor="name" >Pet Name</label>
                    <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} defaultValue={details.name} />
                    <label htmlFor="petType" >Pet Type</label>
                    <input type="text" name="petType" id="petType" onChange={e => setPetType(e.target.value)} defaultValue={details.petType} />
                    <label htmlFor="description" >Description</label>
                    <input type="text" name="description" id="description" onChange={e => setDescription(e.target.value)} defaultValue={details.description} />
                    <label htmlFor="imgUrl" >Img Url</label>
                    <input type="text" name="imgUrl" id="imgUrl" onChange={e => setImgUrl(e.target.value)} defaultValue={details.imgUrl}/>
                    <button type="submit" onClick={editProduct} className='mt-3 btn btn-primary'>Edit Pet</button>
                </div>
                <div className='d-flex flex-column m-3'>
                    <p>Skills (optional):</p>
                    <label htmlFor="skill-1" >Skill 1:</label>
                    <input type="text" name="skill-1" id="description" onChange={e => setSkill1(e.target.value)} defaultValue={details.skill1} />
                    <label htmlFor="skill-2" >Skill 2:</label>
                    <input type="text" name="skill-2" id="description" onChange={e => setSkill2(e.target.value)} defaultValue={details.skill2} />
                    <label htmlFor="skill-3" >skill 3:</label>
                    <input type="text" name="skill-3" id="description" onChange={e => setSkill3(e.target.value)} defaultValue={details.skill3} />
                </div>
            </form>
        </div>
    )
}

export default EditPet