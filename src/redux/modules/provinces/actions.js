export const LOAD_PROVINCE_START = "LOAD_PROVINCE_START";
export const LOAD_PROVINCE_SUCCESS = "LOAD_PROVINCE_SUCCESS";
export const LOAD_PROVINCE_FAILURE = "LOAD_PROVINCE_FAILURE";

const fetchAllURI = "/province?limit=70";

export const loadProvinces = params => ({
  types: [LOAD_PROVINCE_START, LOAD_PROVINCE_SUCCESS, LOAD_PROVINCE_FAILURE],
  meta: { viewId: "PROVINCE" },
  promise: ({ api }) => api.get(fetchAllURI + params)
});
