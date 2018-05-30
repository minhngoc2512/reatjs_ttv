export const LOAD_JOB_SALARY_START = "LOAD_JOB_SALARY_START";
export const LOAD_JOB_SALARY_SUCCESS = "LOAD_JOB_SALARY_SUCCESS";
export const LOAD_JOB_SALARY_FAILURE = "LOAD_JOB_SALARY_FAILURE";

const fetchAllURI = "/job_salary";

export const loadJobSalary = () => ({
  types: [
    LOAD_JOB_SALARY_START,
    LOAD_JOB_SALARY_SUCCESS,
    LOAD_JOB_SALARY_FAILURE
  ],
  meta: { viewId: "JOB_SALARY" },
  promise: ({ api }) => api.get(fetchAllURI)
});
