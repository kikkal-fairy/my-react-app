import axios from "axios";

const API_URL = "https://localhost:5001/api/event"; // Your .NET API URL

export const getEvents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching events", error);
        return [];
    }
};

export const createEvent = async (eventData) => {
    try {
        const response = await axios.post(API_URL, eventData);
        return response.data;
    } catch (error) {
        console.error("Error creating event", error);
        return null;
    }
};
