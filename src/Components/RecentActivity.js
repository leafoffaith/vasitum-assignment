export default function RecentActivity() {

    return (
        <>
            <div className="activity--main">
                <div className="activity--header">Recent Activity</div>
                <div style={{ padding: '1rem' }}>
                    <div className="activity--time--date">10.40 AM, Fri 10 Sept 2021</div>
                    <div className="activity--title">You Posted a New Job</div>
                    <div className="activity--text">Kindly check the requirements and terms of work and make sure everything is right</div>
                    <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                        <div className="activity--summary">Today you have 12 Activities</div>
                        <button className="activity--button">See All Activity</button>
                    </div>
                </div>
            </div>
        </>
    )
}