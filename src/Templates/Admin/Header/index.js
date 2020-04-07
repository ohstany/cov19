import Link from "next/link";

const url = "XTP1A5HK8Q";

export default ({ logout }) => {
	return (
		<div className="aheader">
			<div className="al">
				Admin
				<span className="logout" onClick={() => logout(false)}>
					Logout
				</span>
			</div>
			<nav>
				{[
					{ url: `/${url}`, text: "Markers" },
					{ url: `/${url}/subscriptions`, text: "Subscriptions" },
					{ url: `/${url}/settings`, text: "Settings" },
					{ url: `/${url}/members`, text: "Members" },
               { url: `/${url}/chat`, text: "Chat" },
               { url: `/${url}/countries`, text: "Countries" }
				].map((n, nx) => {
					return (
						<Link key={nx} href={n.url}>
							<li
								className={
									typeof window !== "undefined" &&
									window.location.pathname === n.url
										? "current"
										: ""
								}
							>
								{n.text}
							</li>
						</Link>
					);
				})}
			</nav>
		</div>
	);
};
