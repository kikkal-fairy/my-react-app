import React, { useState } from "react";
import { createEvent } from "../services/eventService";

const EventForm = ({ onEventAdded }) => {
    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        location: "",
        mode: "Face to Face",
        date: "",
        audience: "Secondary (S4-S6), Educators",
        duration: "1-2 hours",
        organizer: "NHS Education for Scotland",
    });

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEvent = await createEvent(eventData);
        if (newEvent) {
            alert("Event Created Successfully!");
            onEventAdded(); // Refresh event list
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="event-creation-container">Create New Event</h2>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={eventData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    name="description"
                    value={eventData.description}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full"
                ></textarea>
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium">Location</label>
                <input
                    type="text"
                    name="location"
                    value={eventData.location}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full"
                />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium">Date</label>
                <input
                    type="date"
                    name="date"
                    value={eventData.date}
                    onChange={handleChange}
                    required
                    className="border p-2 w-full"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
            >
                Create Event
            </button>
        </form>
    );
};

export default EventForm;
