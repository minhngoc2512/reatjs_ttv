export const LOAD_COUNTJOBHOME_START = "LOAD_COUNTJOBHOME_START";
export const LOAD_COUNTJOBHOME_SUCCESS = "LOAD_COUNTJOBHOME_SUCCESS";
export const LOAD_COUNTJOBHOME_FAILURE = "LOAD_COUNTJOBHOME_FAILURE";
const url = "/search?limit=1";

export const loadCountHomeJob = () => ({
  types: [
    LOAD_COUNTJOBHOME_START,
    LOAD_COUNTJOBHOME_SUCCESS,
    LOAD_COUNTJOBHOME_FAILURE
  ],
  meta: { viewId: "LOADCOUNTJOBHOME" },
  promise: ({ api }) => api.get(url)
});
