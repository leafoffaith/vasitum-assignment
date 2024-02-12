import React from 'react';

const Announcement = () => {

    const selectStyles = {
        border: '1px solid #EFEFEF',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        color: '#686868',
        padding: '8px',
        fontFamily: 'Roboto',
        fontSize: '12px',
        width: '200px',
        /* Add more styles as needed */
    };

    const announcements = [
        {
            text: "Outing schedule for every department",
            time: "5 minutes ago"
        },
        {
            text: "Meeting HR Department",
            time: "Yesterday, 12.30 PM"
        },
        {
            text: "IT Department need two more talents for UI/UX Design",
            time: "Yesterday, 09.15 AM"
        }
    ];

    return (
        <div className="announcement--outer--main">
            <div className="announcement--head">
                <div>Announcement</div>
                <select style={selectStyles}>
                    <option value="today">Today, 13 Sep 21</option>
                    {/* Add other options here if needed */}
                </select>
            </div>
            <div>
                {announcements.map((announcement, index) => (
                    <div key={index} className="announcement--box">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'left' }}>
                            <span className="announcement--text">{announcement.text}</span>
                            <span style={{ fontSize: '12px', color: '#686868' }} className="announcement--time">{announcement.time}</span>
                        </div>
                        <div>
                            <span>icon</span>
                            <span>icon</span>
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '2.2rem',
                        color: '#FF5151',
                        display: 'inline-block',
                        textAlign: 'center',
                        padding: 'auto',
                        borderTop: '1px #E0E0E0 solid',
                        borderRadius: '0px 0px 10px 10px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'white'
                    }}>
                    See All Announcements
                </div>
            </div>
        </div>
    );
};

export default Announcement;
