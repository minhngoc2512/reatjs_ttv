export const LOAD_JOBINCOMPANY_START = "LOAD_JOBINCOMPANY_START";
export const LOAD_JOBINCOMPANY_SUCCESS = "LOAD_JOBINCOMPANY_SUCCESS";
export const LOAD_JOBINCOMPANY_FAILURE = "LOAD_JOBINCOMPANY_FAILURE";
const apiJobInCompany =
  "/job_post?limit=5&preloads=job_position,job_salary,company,job_contact.province&sort=-created_at&q[company_id]=";
export const loadJobInCompany = companyId => ({
  types: [
    LOAD_JOBINCOMPANY_START,
    LOAD_JOBINCOMPANY_SUCCESS,
    LOAD_JOBINCOMPANY_FAILURE
  ],
  meta: { viewId: "JOBCOMPANY" },
  promise: ({ api }) => api.get(apiJobInCompany + companyId)
});
