import "./ArticleTile.scss";

const ArticleTile = () => {
	return (
		<div className="tile">
			<div className="image">
				<img src="" alt="Image" />
			</div>
			<div className="body">
				<div className="headline">
					<h3>This is a cool project!</h3>
				</div>
				<div className="content">
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo laboriosam
						labore aperiam animi quo, doloremque culpa corporis esse magnam iure
						distinctio quaerat eum repudiandae, corrupti provident eos consequuntur
						nostrum. Quibusdam!
					</p>
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
