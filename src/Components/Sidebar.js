export default function Sidebar(props) {

    const sideClass = props.isOpen ? "sidebar open" : "sidebar";

    const listItems = [
        { name: "Dashboard", },
        { name: "Recruitment" },
        { name: "Schedule" },
        { name: "Employee" },
        { name: "Department" },
        { name: "Support" },
        { name: "Settings" }
    ];

    return (
        <>
            <div className="sidebar open">
                <div className="sidebar--items">
                    <div style={{ float: "start", display: "flex", marginTop: '4rem', marginBottom: '4rem' }} >LOGO</div>
                    <div className="subhead">MAIN MENU</div>
                    <div className="list--item--active"><span>ICON</span>Dashboard</div>
                    <div className="list--item"><span>ICON</span>Recruitment</div>
                    <div className="list--item"><span>ICON</span>Schedule</div>
                    <div className="list--item"><span>ICON</span>Employee</div>
                    <div className="list--item"><span>ICON</span>Department</div>
                    <div className="subhead">OTHER</div>
                    <div className="list--item"><span>ICON</span>Support</div>
                    <div className="list--item"><span>ICON</span>Settings</div>
                </div>
            </div>
        </>
    )
}