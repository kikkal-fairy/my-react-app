import React, { useState } from "react";
import { createEvent } from "../services/eventService";
import "../styles/EventForm.css"

const EventForm = ({ onEventAdded }) => {
    const [eventData, setEventData] = useState({
        title: "",
        type: "",
        message: "",
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
            onEventAdded();
        }
    };

    return (
        <form className="event-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Create Activity Post</h2>

            <div className="title-group">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={eventData.title}
                    onChange={handleChange}
                    className="title-input"
                    required
                />

                <select
                    name="activityType"
                    value={eventData.type}
                    onChange={handleChange}
                    className="activity-type-input"
                    required
                >
                    <option value="" disabled selected>Select Activity Type</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </div>

            <div className="form-group">
                <label>Activity Message</label>
                <textarea
                    name="message"
                    value={eventData.message}
                    onChange={handleChange}
                    className="textarea-field"
                    required
                />
            </div>

            <div className="form-group">
                <label>Activity Description</label>
                <textarea
                    name="description"
                    value={eventData.description}
                    onChange={handleChange}
                    className="textarea-field"
                    required
                />
            </div>

            <div className="form-group">
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    value={eventData.date}
                    onChange={handleChange}
                    className="input-field"
                    required
                />
            </div>

            <div className="form-group">
                <label>Mode</label>
                <select
                    name="mode"
                    value={eventData.mode}
                    onChange={handleChange}
                    className="select-field"
                >
                    <option value="Face to Face">Face to Face</option>
                    <option value="Online">Online</option>
                </select>
            </div>

            <div className="form-group">
                <label>Audience</label>
                <select
                    name="audience"
                    value={eventData.audience}
                    onChange={handleChange}
                    className="select-field"
                >
                    <option value="Secondary (S4-S6), Educators">Secondary (S4-S6), Educators</option>
                    <option value="University Students">University Students</option>
                </select>
            </div>

            <div className="form-group">
                <label>Duration</label>
                <select
                    name="duration"
                    value={eventData.duration}
                    onChange={handleChange}
                    className="select-field"
                >
                    <option value="1-2 hours">1-2 hours</option>
                    <option value="Half-day">Half-day</option>
                    <option value="Full-day">Full-day</option>
                </select>
            </div>

            <div className="form-group">
                <label>Organizer</label>
                <input
                    type="text"
                    name="organizer"
                    value={eventData.organizer}
                    onChange={handleChange}
                    className="input-field"
                    required
                />
            </div>

            <button type="submit" className="submit-button">
                Post activity
            </button>
        </form>
    );
};

export default EventForm;
