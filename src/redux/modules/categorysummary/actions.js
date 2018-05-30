export const LOAD_CATEGORYSUMMARY_START = "LOAD_CATEGORYSUMMARY_START";
export const LOAD_CATEGORYSUMMARY_SUCCESS = "LOAD_CATEGORYSUMMARY_SUCCESS";
export const LOAD_CATEGORYSUMMARY_FAILURE = "LOAD_CATEGORYSUMMARY_FAILURE";
const url = "/taxonomy?";

export const loadCategorySummary = slug => ({
  types: [
    LOAD_CATEGORYSUMMARY_START,
    LOAD_CATEGORYSUMMARY_SUCCESS,
    LOAD_CATEGORYSUMMARY_FAILURE
  ],
  meta: { viewId: "LOADCATEGORYSUMMARY" },
  promise: ({ api }) => api.get(url + "&q[slug]=" + slug)
});
