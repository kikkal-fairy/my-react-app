import React, {useEffect, useRef, useState} from "react";
import "/src/styles/EventForm.css"

const EventForm = () => {
    const [eventData, setEventData] = useState({
        type: "",
        title: "",
        summary: "",
        description: "",
        date: "",
        format: "",
        location: "",
        duration: "",
        audience: [],
        size: 0,
        provider: ""
    });

    const handleChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5050/add-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        });

        const data = await response.json();
        if (response.ok) {
            alert('Post added successfully!');
            setEventData({
                type: "",
                title: "",
                summary: "",
                description: "",
                date: "",
                format: "",
                location: "",
                duration: "",
                audience: [],
                size: 0,
                provider: ""
            });
        } else {
            alert(`Error: ${data.error}`);
        }
    };

    const audienceOptions = [
        "P1", "P2", "P3", "P4", "P5", "P6", "P7",
        "S1", "S2", "S3", "S4", "S5", "S6",
        "Post-School", "Parents", "Educators"
    ];

    const [showDropdown, setShowDropdown] = useState(false);

    const handleAudienceChange = (e) => {
        const { value, checked } = e.target;
        let updated = [...eventData.audience];

        if (checked) {
            updated.push(value);
        } else {
            updated = updated.filter(item => item !== value);
        }

        setEventData({ ...eventData, audience: updated });
    };

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <form className="event-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Create Activity Post</h2>

            <div className="form-group-2">
                <div className="field-wrapper">
                    <label htmlFor="title">Activity Title <span className="required">*</span></label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter Activity Title"
                        value={eventData.title}
                        onChange={handleChange}
                        className="input-base input-text"
                        required
                    />
                </div>

                <div className="field-wrapper">
                    <label htmlFor="type">Activity Type <span className="required">*</span></label>
                    <select
                        name="type"
                        id="type"
                        value={eventData.type}
                        onChange={handleChange}
                        className="input-base input-text"
                        required
                    >
                        <option value="" disabled>Select Activity Type</option>
                        <option value="Awareness, Inspiration & Aspiration">Awareness, Inspiration & Aspiration</option>
                        <option value="Skills Development & Preparation">Skills Development & Preparation</option>
                        <option value="Work Experience">Work Experience</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label>Activity Summary <span className="required">*</span></label>
                <textarea
                    name="summary"
                    value={eventData.summary}
                    onChange={handleChange}
                    className="input-base textarea"
                    required
                />
            </div>

            <div className="form-group">
                <label>Activity Description <span className="required">*</span></label>
                <textarea
                    name="description"
                    value={eventData.description}
                    onChange={handleChange}
                    className="input-base textarea"
                    required
                />
            </div>

            <h3>Activity Details</h3>
            <div className="form-group-2">
                <div className="field-wrapper">
                    <label htmlFor="date">Date <span className="required">*</span></label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={eventData.date}
                        onChange={handleChange}
                        className="input-base input-text"
                        required
                    />
                </div>

                <div className="field-wrapper">
                    <label htmlFor="format">Format <span className="required">*</span></label>
                    <select
                        name="format"
                        id="format"
                        value={eventData.format}
                        onChange={handleChange}
                        className="input-base input-text"
                        required
                    >
                        <option value="" disabled>Select Format</option>
                        <option value="Face to Face">Face to Face</option>
                        <option value="Virtual">Virtual</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Face to Face or Virtual">Face to Face or Virtual</option>
                    </select>
                </div>
            </div>

            <div className="form-group-2">
                <div className="field-wrapper">
                    <label htmlFor="location">Location <span className="required">*</span></label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={eventData.location}
                        onChange={handleChange}
                        className="input-base input-text"
                        placeholder="Enter Activity Location"
                        required
                    />
                </div>

                <div className="field-wrapper">
                    <label htmlFor="duration">Duration <span className="required">*</span></label>
                    <select
                        name="duration"
                        id="duration"
                        value={eventData.duration}
                        onChange={handleChange}
                        className="input-base input-text"
                        required
                    >
                        <option value="" disabled>Select Duration</option>
                        <option value="<1 Hour">&lt;1 Hour</option>
                        <option value="1-2 Hours">1-2 Hours</option>
                        <option value="2-3 Hours">2-3 Hours</option>
                        <option value="3-4 Hours">3-4 Hours</option>
                        <option value="4+ Hours">4+ Hours</option>
                    </select>
                </div>
            </div>


            <h3>Participant DetailS</h3>
            <div className="form-group-2">
                <div className="field-wrapper" ref={dropdownRef}>
                    <label htmlFor="audience">Audience <span className="required">*</span></label>
                    <div className="custom-dropdown">
                        <div className="dropdown-toggle" onClick={() => setShowDropdown(!showDropdown)}>
                            {eventData.audience.length > 0 ? eventData.audience.join(", ") : "Select Audience Type"}
                        </div>
                        {showDropdown && (
                            <div className="dropdown-menu">
                                {audienceOptions.map(option => (
                                    <label key={option} className="dropdown-item">
                                        <input
                                            type="checkbox"
                                            value={option}
                                            checked={eventData.audience.includes(option)}
                                            onChange={handleAudienceChange}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                </div>


                <div className="field-wrapper">
                    <label htmlFor="size">Group Size <span className="required">*</span></label>
                    <select
                        name="size"
                        id="size"
                        value={eventData.size}
                        onChange={handleChange}
                        className="input-base input-text"
                        required
                    >
                        <option value="" disabled>Select Size</option>
                        <option value="1-30">1-30</option>
                        <option value="31-50">31-50</option>
                        <option value="51-100">51-100</option>
                        <option value="100+">100+</option>
                    </select>
                </div>
            </div>


            <div className="form-group">
                <label>Organizer <span className="required">*</span></label>
                <input
                    type="text"
                    name="provider"
                    value={eventData.provider}
                    onChange={handleChange}
                    className="input-base input-text"
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
