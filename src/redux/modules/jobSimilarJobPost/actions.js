export const LOAD_SIMILARJOBPOST_START = "LOAD_SIMILARJOBPOST_START";
export const LOAD_SIMILARJOBPOST_SUCCESS = "LOAD_SIMILARJOBPOST_SUCCESS";
export const LOAD_SIMILARJOBPOST_FAILURE = "LOAD_SIMILARJOBPOST_FAILURE";
const apiJobSimilarJobPost =
  "/search?preloads=job_position,job_salary,company,job_contact.province,job_experience,job_level,job_position,job_type,job_benefit,job_carrer&limit=6&sort=-created_at&q[province_id]=";
export const loadJobSimilarJobPost = (province_id, carrerId) => ({
  types: [
    LOAD_SIMILARJOBPOST_START,
    LOAD_SIMILARJOBPOST_SUCCESS,
    LOAD_SIMILARJOBPOST_FAILURE
  ],
  meta: { viewId: "JOBSIMILARJOBPOST" },
  promise: ({ api }) =>
    api.get(
      apiJobSimilarJobPost + province_id + "&q[job_carrer_id]=" + carrerId
    )
});
