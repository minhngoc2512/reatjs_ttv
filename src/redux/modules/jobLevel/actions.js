export const LOAD_JOBLEVEL_START = "LOAD_JOBLEVEL_START";
export const LOAD_JOBLEVEL_SUCCESS = "LOAD_JOBLEVEL_SUCCESS";
export const LOAD_JOBLEVEL_FAILURE = "LOAD_JOBLEVEL_FAILURE";
const url =
  "/job_post?preloads=company,job_salary,job_contact,job_contact.industrial_zone,job_contact.province&sort=-job_salary_id,-created_at&limit=10";

export const loadJobList = () => ({
  types: [LOAD_JOBLEVEL_START, LOAD_JOBLEVEL_SUCCESS, LOAD_JOBLEVEL_FAILURE],
  meta: { viewId: "JOBLEVEL" },
  promise: ({ api }) => api.get(url)
});
