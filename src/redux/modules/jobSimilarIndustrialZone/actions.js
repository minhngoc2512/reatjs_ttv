export const LOAD_SIMILARINDUSTRIALZONE_START =
  "LOAD_SIMILARINDUSTRIALZONE_START";
export const LOAD_SIMILARINDUSTRIALZONE_SUCCESS =
  "LOAD_SIMILARINDUSTRIALZONE_SUCCESS";
export const LOAD_SIMILARINDUSTRIALZONE_FAILURE =
  "LOAD_SIMILARINDUSTRIALZONE_FAILURE";
const apiJobSimilarIndustrialZone =
  "/search?preloads=job_position,job_salary,company,job_contact.province,job_experience,job_level,job_position,job_type,job_benefit,job_carrer&limit=6&sort=-created_at&";
export const loadJobSimilarIndustrialZone = industrialZoneId => ({
  types: [
    LOAD_SIMILARINDUSTRIALZONE_START,
    LOAD_SIMILARINDUSTRIALZONE_SUCCESS,
    LOAD_SIMILARINDUSTRIALZONE_FAILURE
  ],
  meta: { viewId: "JOBSIMILARINDUSTRIALZONE" },
  promise: ({ api }) => api.get(apiJobSimilarIndustrialZone + industrialZoneId)
});
