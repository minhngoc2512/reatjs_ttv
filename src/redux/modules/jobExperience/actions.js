export const LOAD_JOBEXPERIENCE_START = "LOAD_JOBEXPERIENCE_START";
export const LOAD_JOBEXPERIENCE_SUCCESS = "LOAD_JOBEXPERIENCE_SUCCESS";
export const LOAD_JOBEXPERIENCE_FAILURE = "LOAD_JOBEXPERIENCE_FAILURE";
const apiJobExperience = "/job_experience?limit=20";
export const loadJobExperience = () => ({
  types: [
    LOAD_JOBEXPERIENCE_START,
    LOAD_JOBEXPERIENCE_SUCCESS,
    LOAD_JOBEXPERIENCE_FAILURE
  ],
  meta: { viewId: "JOBEXPERIENCE" },
  promise: ({ api }) => api.get(apiJobExperience)
});
