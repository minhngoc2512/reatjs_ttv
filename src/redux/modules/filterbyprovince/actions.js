export const LOAD_FILTERBYPROVINCE_START = "LOAD_FILTERBYPROVINCE_START";
export const LOAD_FILTERBYPROVINCE_SUCCESS = "LOAD_FILTERBYPROVINCE_SUCCESS";
export const LOAD_FILTERBYPROVINCE_FAILURE = "LOAD_FILTERBYPROVINCE_FAILURE";

const url = "/province?q[id]=74,75,77,79,80,82,86,92&sort=-job_avail_count";
export const loadFilterByProvince = () => ({
  types: [
    LOAD_FILTERBYPROVINCE_START,
    LOAD_FILTERBYPROVINCE_SUCCESS,
    LOAD_FILTERBYPROVINCE_FAILURE
  ],
  meta: { viewId: "FILTERBYPROVINCE" },
  promise: ({ api }) => api.get(url)
});
