export const LOAD_JOBTYPE_START = "LOAD_JOBTYPE_START";
export const LOAD_JOBTYPE_SUCCESS = "LOAD_JOBTYPE_SUCCESS";
export const LOAD_JOBTYPE_FAILURE = "LOAD_JOBTYPE_FAILURE";
const apiJobTYPE = "/job_type?limit=20";
export const loadJobType = () => ({
  types: [LOAD_JOBTYPE_START, LOAD_JOBTYPE_SUCCESS, LOAD_JOBTYPE_FAILURE],
  meta: { viewId: "JOBTYPE" },
  promise: ({ api }) => api.get(apiJobTYPE)
});
