import {React, useState, useEffect} from 'react'

import { FormControl, FormGroup, InputLabel, Input, Typography,styled,Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

import { editUser, getUser } from '../apiService/api';
import { useNavigate, useParams } from 'react-router-dom';

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



    const EditUser = () => {

      const [user,setUser] = useState(defaultValue);

      const navigate = useNavigate();

      const { id } = useParams();

      useEffect(() => {
          loadUserDetails();
        },[])

      const loadUserDetails = async () => {
        const response = await getUser(id);
        setUser(response.data)

      }

      const onValueChange = (e) => {
        setUser({
          ...user, [e.target.name] : e.target.value 
        })
      }

      const editUserDetails = async () => {
         console.log(user)
       await editUser(user, id);
       navigate('/all')

      }
      
      return (
        <FormContainer>
          <Typography variant='h3'><EditIcon fontSize='large'/></Typography>
          <FormControl>
            <InputLabel>
              Name
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "name" value={user.name}/>
          </FormControl>

          <FormControl>
            <InputLabel>
              AGE
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "age" value={user.age}/>
          </FormControl>

          <FormControl>
            <InputLabel>
              EMAIL
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name = "email" value={user.email}/>
          </FormControl>

          <FormControl>
            <InputLabel>
              PHONE
            </InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="Phone" value={user.Phone}/>
          </FormControl>

          <FormControl>
            <Buttonb variant='outlined' onClick={()=> editUserDetails()}>EditUser</Buttonb>
          </FormControl>
        </FormContainer>
      )
    }
    
    export default EditUser