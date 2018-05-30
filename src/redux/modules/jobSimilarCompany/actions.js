export const LOAD_SIMILARCOMPANY_START = "LOAD_SIMILARCOMPANY_START";
export const LOAD_SIMILARCOMPANY_SUCCESS = "LOAD_SIMILARCOMPANY_SUCCESS";
export const LOAD_SIMILARCOMPANY_FAILURE = "LOAD_SIMILARCOMPANY_FAILURE";
const apiJobSimilarCompany =
  "/search?preloads=job_salary,company,job_contact.province,job_carrer&limit=6&sort=-created_at&q[province_id]=";
export const loadJobSimilarCompany = provinceId => ({
  types: [
    LOAD_SIMILARCOMPANY_START,
    LOAD_SIMILARCOMPANY_SUCCESS,
    LOAD_SIMILARCOMPANY_FAILURE
  ],
  meta: { viewId: "JOBSIMILARCOMPANY" },
  promise: ({ api }) => api.get(apiJobSimilarCompany + provinceId)
});
