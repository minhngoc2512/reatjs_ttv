export const LOAD_FILTERBYJOBCARRER_START = "LOAD_FILTERBYJOBCARRER_START";
export const LOAD_FILTERBYJOBCARRER_SUCCESS = "LOAD_FILTERBYJOBCARRER_SUCCESS";
export const LOAD_FILTERBYJOBCARRER_FAILURE = "LOAD_FILTERBYJOBCARRER_FAILURE";

const url =
  "/job_carrer?fields=id,job_avail_count,name&sort=-job_avail_count&limit=";

export const loadFilterByJobCarrer = limit => ({
  types: [
    LOAD_FILTERBYJOBCARRER_START,
    LOAD_FILTERBYJOBCARRER_SUCCESS,
    LOAD_FILTERBYJOBCARRER_FAILURE
  ],
  meta: { viewId: "FILTERBYJOBCARRER" },
  promise: ({ api }) => api.get(url + limit)
});
