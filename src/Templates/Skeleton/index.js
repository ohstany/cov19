export const Skeleton1 = ({ row = 1 }) =>
	[...Array(row || 1).keys()].map((i, ix) => (
		<div key={ix} className="skeleton">
			<div className="skeleton-content">
				<h3 className="skeleton-title" style={{ width: "38%" }}></h3>
				<ul className="skeleton-paragraph">
					<li></li>
					<li></li>
					<li style={{ width: "61%" }}></li>
				</ul>
			</div>
		</div>
	));
