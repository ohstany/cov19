import { make2sideFilter, randomID } from "Library";

/**
 * STORE REDUCER (separate component data, categories, coures etc.)
 * PARAMS: s - store, a - data object (action, data and so on)
 */
export const root_store_reducer = (s, a, params = false) => {
	const { data = [], reduce } = a || {};

	switch (reduce) {
		case "UPDATE_OPTION": {
			const { options } = s;
			const { key, value } = params.data;

			if (!key) return {};

			options[key] = value || {};

			return {
				options
			};
		}

		case "DEFAULT": {
			return {};
		}

		default: {
			return data.single && data.set
				? { [data.single]: { ...s[data.single], ...data.set } }
				: {};
		}
	}
};

/**
 * INITIAL default values of application store
 */

export const root_store_initial_state = {
	mapRef: null,
	geo: false,
	options: {},
	index: undefined,
   loginStatus: false,
   settings: {},
	activity: {
		"0": [
			{
				user: "dadm1231",
				respong: "0",
				date: "2020-02-29 14:10",
				content:
					"No nec mentitum abhorreant, inani errem adipisci per ex."
			},
			{
				user: "kpgek742",
				respong: "1",
				date: "2020-02-29 15:10",
				content: "Lorem ipsum dolor sit amet, tibique officiis has cu."
			},
			{
				user: "l12j44jw",
				respong: "1",
				date: "2020-02-29 16:10",
				content: "Lorem ipsum dolor sit amet, tibique officiis has cu."
			},
			{
				user: "sj12u2302",
				respong: "2",
				date: "2020-02-29 17:10",
				content: "Cibo efficiantur in eos, soleat qualisque mea ne."
			}
		],
		"1": [
			{
				user: "dadm1231",
				respong: "0",
				date: "2020-02-29 14:10",
				content:
					"No nec mentitum abhorreant, inani errem adipisci per ex."
			},
			{
				user: "kpgek742",
				respong: "1",
				date: "2020-02-29 14:10",
				content: "Lorem ipsum dolor sit amet, tibique officiis has cu."
			},
			{
				user: "l12j44jw",
				respong: "1",
				date: "2020-02-29 14:10",
				content: "Lorem ipsum dolor sit amet, tibique officiis has cu."
			},
			{
				user: "sj12u2302",
				respong: "2",
				date: "2020-02-29 14:10",
				content: "Cibo efficiantur in eos, soleat qualisque mea ne."
			}
		],
		"2": [
			{
				user: "dadm1231",
				respong: "0",
				date: "2020-02-29 14:10",
				content:
					"No nec mentitum abhorreant, inani errem adipisci per ex."
			},
			{
				user: "kpgek742",
				respong: "1",
				date: "2020-02-29 14:10",
				content: "Lorem ipsum dolor sit amet, tibique officiis has cu."
			},
			{
				user: "l12j44jw",
				respong: "1",
				date: "2020-02-29 14:10",
				content: "Lorem ipsum dolor sit amet, tibique officiis has cu."
			},
			{
				user: "sj12u2302",
				respong: "2",
				date: "2020-02-29 14:10",
				content: "Cibo efficiantur in eos, soleat qualisque mea ne."
			}
		]
	},
	news: [],
	markers: [
		{
			id: "1",
			title: "Title 1",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/J3Hw1I5iz4c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "2", color: "white" },
			position: { lat: 50.452476, lng: 30.514183 }
		},
		{
			id: "2",
			title: "Title 2",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"Lorem ipsum dolor sit amet, tibique officiis has cu. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "1", color: "white" },
			position: { lat: 50.454225, lng: 30.60482 }
		},
		{
			id: "3",
			title: "Title 3",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugi Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "1", color: "white" },
			position: { lat: 50.443732, lng: 30.569115 }
		},
		{
			id: "4",
			title: "Title 4",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"Inani errem adipisci per ex. Quo autem Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "3", color: "white" },
			position: { lat: 50.419238, lng: 30.505943 }
		},
		{
			id: "5",
			title: "Title 5",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "1", color: "white" },
			position: { lat: 50.398233, lng: 30.415306 }
		},
		{
			id: "6",
			title: "Title 6",
			content:
				"Aperiam invidunt vulputate quo at, ne dicit sonet p Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "1", color: "white" },
			position: { lat: 50.59043, lng: 30.214806 }
		},
		{
			id: "7",
			title: "Title 7",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"Cibo efficiantur in eos, soleat qualisque mea ne. Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "1", color: "white" },
			position: { lat: 50.501199, lng: 30.819397 }
		},
		{
			id: "8",
			title: "Title 8",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"Tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "4", color: "white" },
			position: { lat: 50.346878, lng: 30.920838 }
		},
		{
			id: "9",
			title: "Title 9",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"Tibique officiis has cu. Aperiam invidunt vulputate quo at",
			label: { text: "1", color: "white" },
			position: { lat: 50.317072, lng: 30.929078 }
		},
		{
			id: "10",
			title: "Title 10",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "2", color: "white" },
			position: { lat: 50.341619, lng: 30.852174 }
		},
		{
			id: "11",
			title: "Title 11",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "1", color: "white" },
			position: { lat: 50.392426, lng: 30.964783 }
		},
		{
			id: "12",
			title: "Title 12",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"lputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "1", color: "white" },
			position: { lat: 50.429183, lng: 30.915345 }
		},
		{
			id: "13",
			title: "Title 13",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"fficiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "2", color: "white" },
			position: { lat: 50.038923, lng: 36.434741 }
		},
		{
			id: "14",
			title: "Title 14",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "1", color: "white" },
			position: { lat: 50.081241, lng: 36.127124 }
		},
		{
			id: "15",
			title: "Title 15",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "1", color: "white" },
			position: { lat: 49.904669, lng: 36.313891 }
		},
		{
			id: "16",
			title: "Title 16",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "3", color: "white" },
			position: { lat: 49.975376, lng: 36.017261 }
		},
		{
			id: "17",
			title: "Title 17",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"Lorem ipsum dolor sit amet, tibique officiis has cu. Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "1", color: "white" },
			position: { lat: 50.151689, lng: 36.566577 }
		},
		{
			id: "18",
			title: "Title 18",
			source: [
				"https://www.who.int/ru/emergencies/diseases/novel-coronavirus-2019",
				'<iframe width="560" height="315" src="https://www.youtube.com/embed/XokifoTvmTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
			],
			content:
				"Aperiam invidunt vulputate quo at, ne dicit sonet persecuti pro. No nec mentitum abhorreant, inani errem adipisci per ex. Quo autem commodo cu, eum ubique feugiat vituperatoribus ea. Cibo efficiantur in eos, soleat qualisque mea ne.",
			label: { text: "1", color: "white" },
			position: { lat: 50.299291, lng: 36.236987 }
		}
	]
};
