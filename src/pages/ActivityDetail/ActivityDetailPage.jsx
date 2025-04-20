import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LocationIcon from '../../assets/icons/location_on-2.svg'; 
import LocationIcon2 from '../../assets/icons/location_on.svg'; 
import CalendarIcon from '../../assets/icons/calendar_today.svg';
import MinusIcon from '../../assets/icons/minus.svg';
import PlusIcon from '../../assets/icons/plus.svg';
import './ActivityDetailPage.css';

const ActivityDetailPage = () => {
    const { id } = useParams();
    const [activity, setActivity] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5050/posts/${id}`)
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
            <div className="activity-detail-wrapper">
                {/* 🔷 Top Row: Tag, Title, Provider Label */}
                <div className="back-link">
                    <Link to="/" className="back-text">← Back to Activities</Link>
                </div>
                <div className="top-meta-row">
                    <span className="tag">Awareness, Inspiration and Aspiration</span>
                    <div className="provider-label">
                        Provided by {activity.provider}
                    </div>
                </div>
                <div className="activity-detail-main">
                    <div className="left-section">
                        <h1 className="activity-title">{activity.title}</h1>
                            <p className="summary">{activity.summary}</p>
                        <h3 className="description-heading">Activity Description</h3>
                        <div className="description-container">
                            {!activity.description || activity.description.trim() === "" ? (
                                <p>
                                    Lorem ipsum dolor sit amet consectetur. Vitae odio amet a ullamcorper at eu sagittis vitae id.
                                    Mattis mus magna eget consectetur sed ut magna. Quisque eleifend quis arcu aliquam.
                                    Nec hendrerit quis in varius sed pharetra turpis. Tincidunt pharetra tortor pellentesque convallis tortor massa proin.
                                    Leo sollicitudin ullamcorper ut ut non mauris. Dictum commodo suspendisse tellus enim faucibus sodales nullam neque.
                                </p>
                            ) : (
                                <p>{activity.description}</p>
                            )}
                            <br />

                            <ul className="description-list">
                                <li>Lorem ipsum dolor sit amet consectetur. Vitae odio amet a ullamcorper at eu sagittis vitae id.</li>
                                <li>Mattis mus magna eget consectetur sed ut magna. Quisque eleifend quis arcu aliquam.</li>
                                <li>Nec hendrerit quis in varius sed pharetra turpis. Tincidunt pharetra tortor pellentesque convallis tortor massa proin.</li>
                                <li>Leo sollicitudin ullamcorper ut ut non mauris. Dictum commodo suspendisse tellus enim faucibus sodales nullam neque.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="join-card">
                            <h3 className="section-heading">Join Our Activity</h3>
                            <div className="info-box">
                                <p className="label">Activity</p>
                                <p className="text">Career Insight</p>
                            </div>

                            <div className="info-box">
                                <p className="label">
                                <img src={LocationIcon2} alt="Location icon" className="info-icon" />Activity Location</p>
                                <p className="text">{activity.location}</p>
                            </div>

                            <div className="info-box">
                               <p className="label">
                               <img src={CalendarIcon} alt="Calendar icon" className="info-icon" />Activity Date</p>
                               <p className="text">{activity.date}</p>
                           </div>

                            <div className="seat-reservation">
                                <p className="label">Reserve Your Seat</p>
                                <div className="seat-counter-wrapper">
                                    <button className="seat-btn minus">
                                    <img src={MinusIcon} alt="minus" className="icon-svg" />
                                    </button>

                                    <div className="seat-value">1</div>

                                    <button className="seat-btn plus">
                                    <img src={PlusIcon} alt="plus" className="icon-svg white-icon" />
                                    </button>
                                </div>
                           </div>
                           <button className="apply-button">Apply</button>
                       </div>
                   </div>
                </div>

                <div className='bottom-wrapper'>
                    <div className="activity-detail-bottom">
                        <div className="info-grid">
                            <div>
                                <strong>Audience:</strong>
                                <br />
                                <p>Secondary (S4-S6)</p>
                                <p>Educators</p>
                            </div>

                            <div><strong>Eligibility Criteria:</strong><br /><p>Gender Equality</p></div>
                            <div><strong>Group Size:</strong><br /><p>1–30</p></div>
                            <div><strong>Fees:</strong><br /><p>Free</p></div>
                            <div><strong>Delivery Method:</strong><br /><p>{activity.format}</p></div>
                            <div><strong>Duration:</strong><br /><p>{activity.duration}</p></div>


                            <div className="local-authority-label">
                                <img src={LocationIcon} alt="Location Icon" className="location-icon" />
                                Local Authority
                            </div>
                        </div>

                        <div className="local-authority-tags">
                            {['Aberdeen City',
                            'Aberdeenshire', 'Aberdeenshire', 'Aberdeenshire',
                            'Aberdeenshire', 'Aberdeenshire', 'Aberdeenshire',
                            'Aberdeenshire', 'Aberdeenshire'].map((authority, i) => (
                            <button className="tag-btn" key={i}>{authority}</button>
                            ))}
                        </div>

                        <div className="further-info">
                            <strong>Further Information</strong><br />
                            Contact: nhseducation.ac.uk
                        </div>
                    </div>
                </div>
            </div>
        </>
      );
    };
    
    export default ActivityDetailPage;
    