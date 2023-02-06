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
        <div className='col-lg-6 col-md-8 m-auto'>
            <div className='d-flex justify-content-between mt-2 '>
                <h1 >Pet Shelter</h1>
                <NavLink to={"/"} >back to home</NavLink>
            </div>
            <div className=' mb-3'>
                <h4 className='mt-2'>Edit {details.name}</h4>
            </div>
            <form className='mt-2 border border-dark border-2 p-3'>
                <div className='row'>
                    <div className='col'>
                        <label htmlFor="name" >Pet Name</label>
                        <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} defaultValue={details.name} className='form-control' />
                        <label htmlFor="petType" >Pet Type</label>
                        <input type="text" name="petType" id="petType" onChange={e => setPetType(e.target.value)} defaultValue={details.petType} className='form-control' />
                        <label htmlFor="description" >Description</label>
                        <input type="text" name="description" id="description" onChange={e => setDescription(e.target.value)} defaultValue={details.description} className='form-control' />
                        <label htmlFor="imgUrl" >Img Url</label>
                        <input type="text" name="imgUrl" id="imgUrl" onChange={e => setImgUrl(e.target.value)} defaultValue={details.imgUrl} className='form-control' />
                    </div>
                    <div className='col'>
                        <label htmlFor="skill-1" >Skill 1:</label>
                        <input type="text" name="skill-1" id="description" onChange={e => setSkill1(e.target.value)} defaultValue={details.skill1} className='form-control' />
                        <label htmlFor="skill-2" >Skill 2:</label>
                        <input type="text" name="skill-2" id="description" onChange={e => setSkill2(e.target.value)} defaultValue={details.skill2} className='form-control' />
                        <label htmlFor="skill-3" >skill 3:</label>
                        <input type="text" name="skill-3" id="description" onChange={e => setSkill3(e.target.value)} defaultValue={details.skill3} className='form-control' />
                    </div>
                </div>
                <button type="submit" onClick={editProduct} className='mt-3 btn btn-primary'>Edit Pet</button>
            </form>
        </div>
    )
}

export default EditPet