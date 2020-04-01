import { withTranslation } from "i18n";
import countries from "Library/countries-object.json";

export const CountryList = withTranslation("countries")(
	({ t, value, onChange = () => false, markers, usersCc = false }) => {
		const f = markers
			.reduce((p, n) => {
				if (usersCc && p.indexOf(usersCc) === -1) {
					p.unshift(usersCc);
				}

				if (p.indexOf(n.locale) === -1) {
					p.push(n.locale);
				}
				return p;
			}, [])
			.map(cc => {
				return {
					locale: cc,
					infections: markers
						.filter(i => i.locale === cc)
						.reduce((p, n) => (p += n.infected), 0)
				};
			})
			.sort((a, b) => {
				return b.infections - a.infections;
			});

		return (
			<select value={value || ""} onChange={onChange}>
				><option value="">{t("selectCountry")}</option>
				{f.map((c, ci) => {
					return (
						<option key={ci} value={c.locale}>
							{`${t(countries[c.locale].name)} (${c.infections})`}
						</option>
					);
				})}
			</select>
		);
	}
);

export const CityList = withTranslation("cities")(
	({ t, value, regions, onChange = () => false, markers, country_code }) => {
		return (
			<select value={value} onChange={onChange}>
				<option value="">{t("selectCity")}</option>
				{(regions || [])
					.map((r, ri) => {
						r.inf = markers
							.filter(
								i =>
									i.locale === country_code &&
									"" + i.region === "" + r.region_code
							)
							.reduce((p, n) => (p += n.infections), 0);
						return r;
					})
					.sort((a, b) => {
						return b.inf - a.inf;
					})
					.map((r, ri) => {
						return (
							<option key={ri} value={r.region_code}>
								{`${t(r.name)} (${r.inf})`}
							</option>
						);
					})}
			</select>
		);
	}
);
