// use environmental API path or custom if not empty
import getConfig from "next/config";

const { API_HOST, API_PREFIX, PROTOCOL } = getConfig().publicRuntimeConfig;

// use environmental API path or custom if not empty
export default {
	protocol: PROTOCOL || "http",
	apipath: "" || API_HOST,
	apiver: "" || API_PREFIX
};
