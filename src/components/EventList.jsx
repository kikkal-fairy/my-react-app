import React, { useEffect, useState } from "react";
import { getEvents } from "../services/eventService";

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getEvents()
            .then((data) => {
                setEvents(data);
            })
            .catch((err) => {
                setError('Failed to load events.');
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h1>Upcoming Events</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if there's one */}
            {events.length === 0 ? (
                <p>No events available.</p>
            ) : (
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                            <p>
                                <strong>Location:</strong> {event.location} ({event.mode})
                            </p>
                            <p>
                                <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                            </p>
                            <p>
                                <strong>Duration:</strong> {event.duration}
                            </p>
                            <p>
                                <strong>Organizer:</strong> {event.organizer}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default EventList;
