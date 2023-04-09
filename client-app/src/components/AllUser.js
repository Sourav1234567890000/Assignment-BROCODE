import {React , useEffect , useState } from 'react'
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'


import { getUsers , delUser,addLocation,getLocation } from '../apiService/api'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom';


const TableHeading = styled(TableCell) `
font-size : 20px;
`;

const AllUser = () => {

  const [users,setUsers] = useState([])
  const [locations, setLocation] = useState([])

  useEffect(()=>{
     getAllUsers();
     getAllLocation();

  },[])

  const getAllUsers = async () => {
   let fetchData =  await getUsers();
   setUsers(fetchData.data)
   console.log(fetchData)
  }

  const getAllLocation = async () => {
    let fetchloc = await getLocation();
    setLocation(fetchloc)
    console.log(fetchloc) 
  }

  const deleteUser = async() => {
    await delUser();
    await getAllUsers();
  }
  return (
    <Table>
      <TableHead>
        <TableRow>
           <TableHeading>Id</TableHeading>
           <TableHeading>Name</TableHeading>
           <TableHeading>Age</TableHeading>
           <TableHeading>Email</TableHeading>
           <TableHeading>Phone</TableHeading>
           <TableHeading>Location</TableHeading>
           <TableHeading></TableHeading>           
        </TableRow>
      </TableHead>
         <TableBody>
            {
              users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.Phone}</TableCell>
                  <TableBody></TableBody>
                  <TableCell>
                  </TableCell>
                  <TableCell>
                    <Button variant='contained 'style={{ marginRight:14 }} LinkComponent={Link} to= {`/edit/${user._id}`}>Edit</Button>
                    <Button variant='contained 'style={{ marginLeft:14}} onClick={()=> deleteUser(user._id)}>delete</Button>
                  </TableCell>
                </TableRow>
              ))
            }
         </TableBody>
    </Table>
  )
}

export default AllUser