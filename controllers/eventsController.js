const express = require("express")
const events = express.Router()
const {getAllEvents, getOneEvent, createEvent, updateOneEvent, deleteEvent} = require("../queries/events")

function validateEvent (req, res, next){
    const body = req.body
    console.log(body)
    if(!body.name || !body.description || !body.location || !body.type){
        res.status(400).json({payload: "Tell us about the event!!, we need a name, what type of event is it? where is it going to be? details details Details!!"})
    } else{
        next()
    }
}

events.get('/',async(req,res)=> {
    try {
        const getEvents = await getAllEvents()
        console.log(getEvents)
        res.status(200).json({payload: getEvents})
    } catch (error) {
        res.status(404).json({payload: error})
    }
})

events.get('/:eventId', async(req, res)=> {
    const {eventId} = req.params
    try {
        const event = await getOneEvent(eventId)
        res.status(200).json({payload: event})
    } catch (error) {
        
    }
})

events.post('/', validateEvent, async(req, res)=> {
    const body = req.body
    try {
        const newEvent = await createEvent(body)
        res.status(201).json({payload: newEvent})
    } catch (error) {
        res.status(404).json({payload: error})
    }
})

events.put('/:eventId', validateEvent, async(req, res) =>{
    const {eventId} = req.params
    const body = req.body
    try {
        const updateEvent = await updateOneEvent(eventId, body)
        console.log(updateEvent)
        res.status(201).json({payload: updateEvent})
    } catch (error) {
         res.status(404).json({payload: error})
    }
})

events.delete('/:eventId', async(req,res) => {
    const {eventId} = req.params
    try {
        const deletedEvent = await deleteEvent(eventId)
        res.status(201).json({payload: deletedEvent})
    } catch (error) {
        res.status(404).json({payload: error})
    }
})

module.exports = events;