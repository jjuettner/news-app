import ArticleTile from "../article/ArticleTile";
import { useFetch } from "../../services/hooks";
import "./home.css";

const HomePage = () => {
	const data = useFetch<string>("http://localhost:5000/api/health");

	return (
		<>
			<h2>Home</h2>
			<p>API-Status: {data.data}</p>
			<ArticleTile />
		</>
	);
};

export default HomePage;
