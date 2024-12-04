import express from 'express';
import { getItineraryByPackage, newItinerary } from '../controllers/iterneraries.contoller.js';  

const router = express.Router();


router.post('/new',newItinerary);  // Handle creating itineraries
router.get('/get/:packageId',getItineraryByPackage);
export default router;
