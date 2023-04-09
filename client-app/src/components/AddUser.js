import {React, useState} from 'react'

import { FormControl, FormGroup, InputLabel, Input, Typography,styled,Button } from '@mui/material'

import { addUser } from '../apiService/api';
import { Link } from 'react-router-dom';

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



    const AddUser = () => {

      const [user,setUser] = useState(defaultValue);

      const onValueChange = (e) => {
        setUser({
          ...user, [e.target.name] : e.target.value 
        })
      }

      const addUserDetails = async () => {
         console.log(user)
       await addUser(user);
      }
      
      return (
        <FormContainer>
          <Typography variant='h3'>ADD USER</Typography>
          <FormControl>
            <InputLabel>
              Name
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "name"/>
          </FormControl>

          <FormControl>
            <InputLabel>
              AGE
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "age"/>
          </FormControl>

          <FormControl>
            <InputLabel>
              EMAIL
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "email"/>
          </FormControl>

          <FormControl>
            <InputLabel>
              PHONE
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="Phone"/>
          </FormControl>

          <FormControl>
            <Buttonb variant='outlined' onClick={()=> addUserDetails()}>Add User</Buttonb>
            <Button variant='contained 'style={{ marginRight:14 , fontSize:20}}  LinkComponent={Link} to= {`/addlocation`}>add Location</Button>
          </FormControl>
        </FormContainer>
      )
    }
    
    export default AddUser