import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ActivityDetailPage.css';

const ActivityDetailPage = () => {
    const { id } = useParams();
    const [activity, setActivity] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.audience && typeof data.audience === 'string') {
                    try {
                        data.audience = JSON.parse(data.audience);
                    } catch {
                    }
                }
                setActivity(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching activity:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!activity) {
        return (
            <>
                <div className="activity-detail-page">
                    <p>No activity found.</p>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="activity-detail-page">
                <Link to="/" className="back-link">← Back to Activities</Link>

                <div className="detail-layout">
                    <div className="main-content">
                        <span className="tag">{activity.type}</span>
                        <h1 className="activity-title">{activity.title}</h1>
                        <p className="summary">{activity.summary}</p>

                        <h3>Activity Description</h3>
                        <ul className="description">
                            <p>{activity.description || 'No additional description provided.'}</p>
                        </ul>

                        <div className="info-grid">
                            <div><strong>Audience:</strong><br />{Array.isArray(activity.audience) ? activity.audience.join(', ') : activity.audience}</div>
                            <div><strong>Eligibility Criteria:</strong><br />Gender Equality</div>
                            <div><strong>Fees:</strong><br />Free</div>
                            <div><strong>Group Size:</strong><br />{activity.size || '1–30'}</div>
                            <div><strong>Delivery Method:</strong><br />{activity.format}</div>
                            <div><strong>Duration:</strong><br />{activity.duration}</div>
                        </div>

                        <div className="tags-section">
                            <button className="tag-btn">Local Authority</button>
                            <button className="tag-btn">Aberdeen City</button>
                            <button className="tag-btn">Aberdeenshire</button>
                            <button className="tag-btn">Dundee</button>
                        </div>

                        <div className="further-info">
                            <strong>Further Information</strong><br />
                            Contact: nhseducation.ac.uk
                        </div>
                    </div>

                    <div className="side-panel">
                        <p className="provider-label">Provided by {activity.provider}</p>
                        <div className="join-card">
                            <h3 className="side-title">Join Our Activity</h3>
                            <p className="label">Activity</p>
                            <p className="text">{activity.title}</p>

                            <p className="label">Activity Location</p>
                            <p className="text">{activity.location}</p>

                            <p className="label">Activity Date</p>
                            <p className="text">{activity.date}</p>

                            <div className="counter">
                                <p className="label">Reserve Your Seat</p>
                                <div className="count-controls">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                            </div>

                            <button className="apply-btn">Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ActivityDetailPage;
