
const express = require("express")
const router  = express.Router(); 
const {getLocations,addLocation,getLocation, updateLocation, deleteLocation} = require("../controllers/locationController")


// get all location
router.route('/location').get(getLocations)

// add location
router.route('/addlocation').post(addLocation)

// get individual location
router.route('/:id').get(getLocation)

// update location
router.route('/:id').put(updateLocation)

// delete location
router.route('/:id').delete(deleteLocation)

module.exports = router;

// Now we have all our routes and now we are going to create the controller 
// so that controller is going to contain all our logic for the reequest reponse and is going to connect with our database