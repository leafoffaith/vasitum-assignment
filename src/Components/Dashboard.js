import React from 'react';
import Announcement from "./Announcement";
import './announcement.css';
import RecentActivity from './RecentActivity';
import './recentActivity.css';
import Upcoming from './Upcoming';
import './upcoming.css'



const Dashboard = () => {
    const statItems = [
        { backgroundColor: '#FFEFE7', title: 'Available Position', value: '24', description: '4 Urgently Needed' },
        { backgroundColor: '#E8F0FB', title: 'Available Position', value: '24', description: '4 Active Hiring' },
        { backgroundColor: '#FDEBF9', title: 'New Employees', value: '24', description: '4 Department' }
    ];

    const graphs = [
        { title: 'Total Employees', value: '216', men: '120 Men', women: '96 Women' },
        { title: 'Talent Request', value: '16', men: '6 Men', women: '10 Women' }
    ];

    return (
        <div className="dashboard">
            <div className="dashboard--header">
                Dashboard
            </div>
            <div className="dashboard--content--main">
                <div className="dashboard--content--left">
                    <div className="dashboard--stats">
                        {statItems.map((item, index) => (
                            <div key={index} className="dashboard--stat--items" style={{ backgroundColor: item.backgroundColor, padding: '20px' }}>
                                <span>{item.title}</span>
                                <span style={{ fontSize: '36px' }}>{item.value}</span>
                                <span style={{ fontFamily: 'Roboto', fontSize: '16px', color: item.backgroundColor === '#FFEFE7' ? '#FF5151' : item.backgroundColor === '#E8F0FB' ? '#3786F1' : '#EE61CF' }}>{item.description}</span>
                            </div>
                        ))}
                    </div>
                    <div className="dashboard--graphs">
                        {graphs.map((graph, index) => (
                            <div key={index} className="graph" style={{ marginRight: index === 0 ? '20px' : 0 }}>
                                <span style={{ fontSize: '18px' }}>{graph.title}</span>
                                <span style={{ fontSize: '48px', fontWeight: "600" }}>{graph.value}</span>
                                <span style={{ fontSize: '12px', color: '#686868' }}>{graph.men}</span>
                                <span style={{ fontSize: '12px', color: '#686868' }}>{graph.women}</span>
                            </div>
                        ))}
                    </div>
                    <Announcement />
                </div>
                <div className="dashboard--recents">
                    <RecentActivity></RecentActivity>
                    {/* <div className="dashboard--upcoming--schedule">
                        Upcoming Schedule
                    </div> */}
                    <Upcoming></Upcoming>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;
