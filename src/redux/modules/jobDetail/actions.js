export const LOAD_DETAIL_START = "LOAD_DETAIL_START";
export const LOAD_DETAIL_SUCCESS = "LOAD_DETAIL_SUCCESS";
export const LOAD_DETAIL_FAILURE = "LOAD_DETAIL_FAILURE";
const ApiJobPost =
  "/job_post?preloads=job_position,video,job_salary,company,job_contact.province,job_experience,job_level,job_position,job_type,job_benefit,job_carrer,job_contact.industrial_zone&limit=1&sort=-id&q%5Bslug%5D=";
export const loadDetail = slug => ({
  types: [LOAD_DETAIL_START, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_FAILURE],
  meta: {
    viewId: "DETAIL"
  },
  promise: ({ api }) => api.get(ApiJobPost + slug)
});
