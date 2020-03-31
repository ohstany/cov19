export const markers = {
	Address: {
		path: "address",
		sample: "New York city, USA",
		defaultValue: ""
	},
	Content: {
		path: "details.content",
		sample: "Marker contents..",
		defaultValue: ""
	},
	"Source #1": {
		path: "details.source",
		sample: "http://google.com",
		defaultValue: ""
	},
	"Source #2": {
		path: "details.source2",
		sample: "http://youtube.com",
		defaultValue: ""
	},
	Number: {
		path: "number",
		sample: 1,
		defaultValue: 0
	},
	Locale: {
		path: "locale",
		sample: "UA",
		defaultValue: ""
	},
	Region: {
		path: "region",
		sample: "12",
		defaultValue: ""
	},
	LatLng: {
		path: "latlng",
		sample: [126.21, 12.22],
		defaultValue: ""
	},
	Condition: {
		path: "condition",
		select: {
			none: "none",
			suspicion: "suspicion",
			infected: "infected",
			cured: "cured",
			mortal: "mortal"
		},
		sample: "infected"
	},
	Type: {
		path: "type",
		select: {
			witness: "witness",
			osource: "osource",
			source: "source"
		},
		sample: "witness"
	}
};

const defaultFields = {
	"№": {
		path: "key"
	},
	ID: {
		path: "ID"
	},
	Status: {
		path: "status",
		select: {
			published: "published",
			hidden: "hidden"
		},
		defaultValue: "hidden",
		sample: "hidden"
	},
	"Data Type": {
		path: "data_type",
		select: {
			marker: "marker"
		},
		sample: "marker"
	},
	Date: {
		path: "date",
		sample: "2019-07-10 05:33:21"
	}
};

export default {
	markers: {
		...defaultFields,
		...markers
	}
};
