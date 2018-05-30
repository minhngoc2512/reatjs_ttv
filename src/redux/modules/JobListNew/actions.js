export const LOAD_JOBLISTNEW_START = "LOAD_JOBLISTNEW_START";
export const LOAD_JOBLISTNEW_SUCCESS = "LOAD_JOBLISTNEW_SUCCESS";
export const LOAD_JOBLISTNEW_FAILURE = "LOAD_JOBLISTNEW_FAILURE";

const url =
  "/job_post?preloads=company,job_salary,job_contact,job_contact.industrial_zone,job_contact.province&sort=-created_at&limit=10";

export const loadJobListNew = page => ({
  types: [
    LOAD_JOBLISTNEW_START,
    LOAD_JOBLISTNEW_SUCCESS,
    LOAD_JOBLISTNEW_FAILURE
  ],
  meta: { viewId: "JOBLISTNEW" },
  promise: ({ api }) => api.get(url + "&page=" + page)
});
