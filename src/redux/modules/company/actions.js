export const LOAD_COMPANY_START = "LOAD_COMPANY_START";
export const LOAD_COMPANY_SUCCESS = "LOAD_COMPANY_SUCCESS";
export const LOAD_COMPANY_FAILURE = "LOAD_COMPANY_FAILURE";
const ApiPostCompany =
  "/job_post?limit=10&preloads=job_position,job_salary,company,job_contact.province&q[company_id]=";
export const loadListJobCompany = id => ({
  types: [LOAD_COMPANY_START, LOAD_COMPANY_SUCCESS, LOAD_COMPANY_FAILURE],
  meta: { viewId: "COMPANY" },
  promise: ({ api }) => api.get(ApiPostCompany + id)
});
