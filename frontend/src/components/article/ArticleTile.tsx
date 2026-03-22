import "./ArticleTile.scss";

interface ArticleTileProps {
	id: string;
	title: string;
	section: string;
	date: string;
	thumbnail: string;
	trailText: string;
	url: string;
}

const ArticleTile = (props: ArticleTileProps) => {
	return (
		<div className="tile">
			<div className="image">
				<img src={props.thumbnail} alt="Image" />
			</div>
			<div className="body">
				<div className="headline">
					<h3>{props.title}</h3>
				</div>
				<div className="content">
					<p>{props.trailText}</p>
				</div>
				<div className="actions">
					<div>Like</div>
					<div>Read</div>
					<div>Comment</div>
				</div>
			</div>
		</div>
	);
};

export default ArticleTile;
