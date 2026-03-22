import "./App.scss";
import HomePage from "./components/home/home";

function App() {
	return (
		<>
			<div className="header">
				<div className="menu">
					{/* burger menu icon */}
					<img src="assets/menu.svg" className="menu-icon svg" alt="menu" />
					{/* <div className="menu-icon"></div> */}
				</div>
				<div className="title">
					<h1>News-App</h1>
				</div>
				<div className="settings">
					<img
						src="assets/profile-circle.svg"
						className="profile-icon svg"
						alt="settings"
					/>
				</div>
			</div>
			<div className="content">
				<HomePage />
			</div>
			<div className="footer">
				<div>© Jens Jüttner, 2026</div>
				<img src="assets/poweredbyguardianWHITE.png" alt="Guardian Logo" />
			</div>
		</>
	);
}

export default App;
