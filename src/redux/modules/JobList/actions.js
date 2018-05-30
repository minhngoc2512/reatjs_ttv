export const LOAD_JOBLIST_START = "LOAD_JOBLIST_START";
export const LOAD_JOBLIST_SUCCESS = "LOAD_JOBLIST_SUCCESS";
export const LOAD_JOBLIST_FAILURE = "LOAD_JOBLIST_FAILURE";
const url =
  "/job_post?preloads=company,job_salary,job_contact,job_contact.industrial_zone,job_contact.province&sort=-job_salary_id,-created_at&limit=10";

export const loadJobList = page => ({
  types: [LOAD_JOBLIST_START, LOAD_JOBLIST_SUCCESS, LOAD_JOBLIST_FAILURE],
  meta: { viewId: "JOBLIST" },
  promise: ({ api }) => api.get(url + "&page=" + page)
});
