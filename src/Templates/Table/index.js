import { useState, memo } from "react";
import "./style.scss";

const Svg = () => (
	<svg
		className="tea"
		width="37"
		height="48"
		viewBox="0 0 37 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M27.0819 17H3.02508C1.91076 17 1.01376 17.9059 1.0485 19.0197C1.15761 22.5177 1.49703 29.7374 2.5 34C4.07125 40.6778 7.18553 44.8868 8.44856 46.3845C8.79051 46.79 9.29799 47 9.82843 47H20.0218C20.639 47 21.2193 46.7159 21.5659 46.2052C22.6765 44.5687 25.2312 40.4282 27.5 34C28.9757 29.8188 29.084 22.4043 29.0441 18.9156C29.0319 17.8436 28.1539 17 27.0819 17Z"
			stroke="var(--secondary)"
			strokeWidth="2"
		></path>
		<path
			d="M29 23.5C29 23.5 34.5 20.5 35.5 25.4999C36.0986 28.4926 34.2033 31.5383 32 32.8713C29.4555 34.4108 28 34 28 34"
			stroke="var(--secondary)"
			strokeWidth="2"
		></path>
		<path
			id="teabag"
			fill="var(--secondary)"
			fillRule="evenodd"
			clipRule="evenodd"
			d="M16 25V17H14V25H12C10.3431 25 9 26.3431 9 28V34C9 35.6569 10.3431 37 12 37H18C19.6569 37 21 35.6569 21 34V28C21 26.3431 19.6569 25 18 25H16ZM11 28C11 27.4477 11.4477 27 12 27H18C18.5523 27 19 27.4477 19 28V34C19 34.5523 18.5523 35 18 35H12C11.4477 35 11 34.5523 11 34V28Z"
		></path>
		<path
			id="steamL"
			d="M17 1C17 1 17 4.5 14 6.5C11 8.5 11 12 11 12"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			stroke="var(--secondary)"
		></path>
		<path
			id="steamR"
			d="M21 6C21 6 21 8.22727 19 9.5C17 10.7727 17 13 17 13"
			stroke="var(--secondary)"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		></path>
	</svg>
);

export default ({ data, fields, showRow, pagination, onPage, loading }) => {
   const [p, _p] = useState(1);

	const paging = pagination.paging
		? Math.ceil(pagination.paging / pagination.show)
		: 0;

	return (
		<>
			<div className="amarkers">
				<ul className="amk tbf amk-h">
					<li className="cl"></li>

					{fields.map(({ className, title }, fx) => {
						return (
							<li key={fx} {...({ className } || {})}>
								{title || ""}
							</li>
						);
					})}
				</ul>

				{data[p]
					? data[p].map((m, mx) => {
							return (
								<Content
									m={m}
									index={mx}
									key={mx}
									fields={fields}
									showRow={showRow}
								/>
							);
					  })
					: "No markers"}

				{loading && (
					<div className="tableLoader">
						<div className="tloader">
							<Svg />
						</div>
					</div>
				)}
			</div>

			{paging && (
				<div className="paging">
					{Array.from(Array(paging).keys()).map((pg, px) => {
						return (
							<span
								key={px}
								className={
									"cpage" + (pg + 1 === p ? " active" : "")
								}
								onClick={() => {
									_p(pg + 1);
									onPage && onPage(pg + 1);
								}}
							>
								{pg + 1}
							</span>
						);
					})}
				</div>
			)}
		</>
	);
};

const Content = memo(
	({ fields, m, showRow, index }) => {
		const [s, _s] = useState(false);

		return (
			<div className="amko">
				<ul className="amk tbf amk-b">
					<li className="cl">
						<span onClick={() => _s((p) => !p)}>
							{s ? "-" : "+"}
						</span>
					</li>

					{fields.map(({ className, render, path }, fx) => {
						return (
							<li key={fx} {...({ className } || {})}>
								{render(m[path], m, index, fx)}
							</li>
						);
					})}
				</ul>

				<div className="shownc">{showRow(m, s, index)}</div>
			</div>
		);
	},
	(p, n) => p.m === n.m
);
