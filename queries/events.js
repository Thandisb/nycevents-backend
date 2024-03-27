const db = require("../db/dbConfig")


const getAllEvents = async () => {
    try {
        const events = await db.any("SELECT * FROM events");
        return events
    } catch (error) {
        return error
    }
}

const getOneEvent = async (eventId) => {
try {
    const event = await db.one("SELECT * FROM events WHERE id =$1", eventId)
    return event
} catch (error) {
    return error
    
}

}

const createEvent = async({name, description, time, location, type, is_free, photo, url }) => {
    try {
       const newEvent = await db.one("INSERT INTO events(name, description, time, location, type, is_free, photo, url) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",[name, description, time, location, type, is_free, photo, url])
       return newEvent 
    } catch (error) {
        return error
    }

}

const updateOneEvent = async (id, body)=> {
    const{name, description, time, location, type, is_free, photo, url} = body
    try {
        const updateEvent = await db.one("UPDATE events SET name = $1, description = $2, time = $3, location = $4, type = $5, is_free = $6, photo = $7, url = $8 WHERE id =$9 RETURNING *", [name, description, time, location, type, is_free, photo, url, id])
        return updateEvent
    } catch (error) {
        return error
    }
}

const deleteEvent = async(eventId) => {
    try {
        const deletedEvent = await db.one("DELETE FROM events WHERE id=$1 RETURNING *", eventId)
        return deletedEvent
    } catch (error) {
        return error
    }
}

module.exports={
    getAllEvents, 
    getOneEvent,
    createEvent,
    updateOneEvent,
    deleteEvent
}