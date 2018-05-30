export const LOAD_FILTERBYJOBSALARY_START = "LOAD_FILTERBYJOBSALARY_START";
export const LOAD_FILTERBYJOBSALARY_SUCCESS = "LOAD_FILTERBYJOBSALARY_SUCCESS";
export const LOAD_FILTERBYJOBSALARY_FAILURE = "LOAD_FILTERBYJOBSALARY_FAILURE";

const url = "/job_SALARY?fields=id,job_total_count,name&sort=-job_total_count";

export const loadFilterByJobSalary = () => ({
  types: [
    LOAD_FILTERBYJOBSALARY_START,
    LOAD_FILTERBYJOBSALARY_SUCCESS,
    LOAD_FILTERBYJOBSALARY_FAILURE
  ],
  meta: { viewId: "FILTERBYJOBSALARY" },
  promise: ({ api }) => api.get(url)
});
