import React, { useState } from 'react'
import { FormControl, FormGroup, InputLabel, Input, Typography,styled,Button } from '@mui/material'
import { addLocation } from '../apiService/api';
// import { Link, useNavigate } from 'react-router-dom';



const FormContainer = styled (FormGroup )`
  width : 30%;
  margin : 3% auto 0 auto;
  & > div {
    margin-top : 25px;
  }
`;

const Buttonb = styled(Button) `
  width : 20%;
`;

const defaultValue = {
  name : "",
  age : '',
  email : '',
  Phone : ''
}




const Location = () => {

  const [location,setLocation] = useState(defaultValue);

  // const navigate = useNavigate();

  const onValueChange = (e) => {
    setLocation({
      ...location, [e.target.name] : e.target.value 
    })
  }

  const addLocationDetails = async () => {
    console.log(location)
    await addLocation(location);
 }

  return (
    <div>
      <h1>Location</h1>

      <FormContainer>
          <Typography variant='h3'>ADD Location</Typography>
          <FormControl>
            <InputLabel>
              Name
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "name"/>
          </FormControl>

          <FormControl>
            <InputLabel>
              ADDRESS
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "address"/>
          </FormControl>

          <FormControl>
            <InputLabel>
              CITY
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "city"/>
          </FormControl>

          <FormControl>
            <InputLabel>
              STATE
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="state"/>
          </FormControl>

          <FormControl>
            <InputLabel>
              COUNTRY
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="country"/>
          </FormControl>

          <FormControl>
            <Buttonb variant='outlined' onClick={()=> addLocationDetails()}>Add location</Buttonb>
          </FormControl>
        </FormContainer>
      

    </div>
  )
}

export default Location