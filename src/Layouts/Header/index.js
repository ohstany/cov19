import Link from "next/link";

export default () => {
	return (
		<div className="aheader">
			<div className="al">Admin</div>
			<nav>
				{[
					{ url: "/admin", text: "Markers" },
					{ url: "/admin/subscriptions", text: "Subscriptions" },
					{ url: "/admin/settings", text: "Settings" }
				].map((n, nx) => {
					return (
						<Link key={nx} href={n.url}>
							<li
								className={
									typeof window !== "undefined" &&
									window.location.pathname === n.url
										? "current"
										: ""
								}>
								{n.text}
							</li>
						</Link>
					);
				})}
			</nav>
		</div>
	);
};
