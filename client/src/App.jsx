import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllPets from './components/AllPets';
import EditPet from './components/EditPet';
import NewPet from './components/NewPet';
import PetDetails from './components/PetDetails';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<><AllPets /></>} />
          <Route exact path="/pets/new" element={<NewPet />} />
          <Route exact path="/pets/:petId" element={<PetDetails />} />
          <Route exact path="/pets/:petId/edit" element={<EditPet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
