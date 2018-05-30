export const LOAD_JOBBENEFIT_START = "LOAD_JOBBENEFIT_START";
export const LOAD_JOBBENEFIT_SUCCESS = "LOAD_JOBBENEFIT_SUCCESS";
export const LOAD_JOBBENEFIT_FAILURE = "LOAD_JOBBENEFIT_FAILURE";
const apiJobBenefit = "/job_benefit?limit=99";
export const loadJobBenefit = () => ({
  types: [
    LOAD_JOBBENEFIT_START,
    LOAD_JOBBENEFIT_SUCCESS,
    LOAD_JOBBENEFIT_FAILURE
  ],
  meta: { viewId: "JOBBENEFIT" },
  promise: ({ api }) => api.get(apiJobBenefit)
});
