import React from 'react';

const Upcoming = () => {

    const selectStyles = {
        border: '1px solid #EFEFEF',
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        color: '#686868',
        padding: '8px',
        fontFamily: 'Roboto',
        fontSize: '12px',
        width: '150px',
        /* Add more styles as needed */
    };

    const schedules = [

        {
            urgency: 'Other',
            text: "Interview with candidates",
            time: "Today 10.30 AM"
        },
        {
            urgency: 'Other',
            text: "Short Meeting with product designer",
            time: "Today, 09.15 AM"
        },
    ];

    const priority = [
        {
            urgency: 'Priority',
            text: "Review candidate applications",
            time: "5 minutes ago"
        },
    ];

    return (
        <div className="schedules--outer--main">
            <div className="schedules--head">
                <div>Upcoming Schedule</div>
                <select style={selectStyles}>
                    <option value="today">Today, 13 Sep 21</option>
                    {/* Add other options here if needed */}
                </select>
            </div>
            <div style={{ overflow: 'clip', padding: '10px' }} >
                <div style={{ paddingLeft: '10px' }}>Priority</div>
                {priority.map((schedules, index) => (
                    <div key={index} className="schedules--box">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'left' }}>
                            <span className="schedules--text">{schedules.text}</span>
                            <span style={{ fontSize: '12px', color: '#686868' }} className="schedules--time">{schedules.time}</span>
                        </div>
                        <div>
                            <span>icon</span>
                            <span>icon</span>
                        </div>
                    </div>
                ))}
                <div style={{ paddingLeft: '10px' }}>Other</div>
                {/* <div style={{ display: 'inline-block', verticalAlign: 'top', overflow: 'clip' }} > */}
                {schedules.map((schedules, index) => (
                    <div key={index} className="schedules--box">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'left' }}>
                            <span className="schedules--text">{schedules.text}</span>
                            <span style={{ fontSize: '12px', color: '#686868' }} className="schedules--time">{schedules.time}</span>
                        </div>
                        <div>
                            <span>icon</span>
                            <span>icon</span>
                        </div>
                    </div>
                ))}
                {/* </div> */}
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
                    Create a New Schedule
                </div>
            </div>
        </div >
    );
};

export default Upcoming;
