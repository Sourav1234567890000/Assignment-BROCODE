import axios, { all } from 'axios'

const URL = 'http://localhost:5001';


// POST ADD USER
export const addUser = async (data) => {
    try {
        console.log(data)
       return await axios.post(`${URL}/api/contacts/add `, data)
    } catch (error) {
        console.log("error while user call API to add ", error)
    }
}

// GET all user
export const getUsers = async () => {
    try {

       return await axios.get(`${URL}/api/contacts/all`)
    } catch (error) {
        console.log("error while fetching data for all", error)
    }
}

// GET individual user
export const getUser = async (id) => {
    try{
       return await axios.get(`${URL}/api/contacts/${id}`)
    } catch(error) {
        console.log("error while fetching data for an individual", error)
    }
}

// Edit USER
export const editUser = async (user, id) => {
    try{
       return await axios.put(`${URL}/api/contacts/${id}`,user)
    }
    catch (error){
      console.log("error while calling editing", error)
    }
}

// Delete User
export const delUser = async (id) => {
    try{
        console.log("delete successfully")
      return await axios.delete(`${URL}/api/contacts/${id}`)
    }catch(error){
      console.log("error while deleting",error)
    }
}



// LOCATIONS API

// ADD LOCATION

export const addLocation = async (data) => {
    try {
        console.log(data)
       return await axios.post(`${URL}/api/locations/addlocation `, data)
    } catch (error) {
        console.log("error while user call API to add location ", error)
    }
}

// get LOCATION

export const getLocation = async () => {
    try {

       return await axios.get(`${URL}/api/locations/location`)
    } catch (error) {
        console.log("error while fetching data for all", error)
    }
}