export const LOAD_TOPINDUSTRIALZONE_START = "LOAD_TOPINDUSTRIALZONE_START";
export const LOAD_TOPINDUSTRIALZONE_SUCCESS = "LOAD_TOPINDUSTRIALZONE_SUCCESS";
export const LOAD_TOPINDUSTRIALZONE_FAILURE = "LOAD_TOPINDUSTRIALZONE_FAILURE";

const url =
  "/top_industrial_zone/job_post?preloads=company,job_salary,job_contact,job_contact.industrial_zone,job_contact.province&limit=10&&sort=-job_post.job_salary_id,-job_post.created_at";
export const loadTopIndusTrialZone = page => ({
  types: [
    LOAD_TOPINDUSTRIALZONE_START,
    LOAD_TOPINDUSTRIALZONE_SUCCESS,
    LOAD_TOPINDUSTRIALZONE_FAILURE
  ],
  meta: { viewId: "TOPINDUSTRIALZONE" },
  promise: ({ api }) => api.get(url + "&page=" + page)
});
