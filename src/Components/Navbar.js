export default function Navbar() {
    return (
        <nav className="navbar--main">
            <div className="navbar--search">
                <div style={{}}>Search</div>
                <div>icon</div>
            </div>
            <div className="navbar--profile">
                <div className="navbar--items">icon</div>
                <div className="navbar--items">icon</div>
                <div className="navbar--items profile--data">
                    <div>pfp</div>
                    <div>name</div>
                    <div>icon</div>
                </div>
            </div>
        </nav>
    )
}