export const LOAD_WIDGETS_START = "LOAD_WIDGETS_START";
export const LOAD_WIDGETS_SUCCESS = "LOAD_WIDGETS_SUCCESS";
export const LOAD_WIDGETS_FAILURE = "LOAD_WIDGETS_FAILURE";

export const loadWidgets = () => ({
  types: [LOAD_WIDGETS_START, LOAD_WIDGETS_SUCCESS, LOAD_WIDGETS_FAILURE],
  meta: { viewId: "WIDGETS" },
  promise: ({ api }) =>
    api.get("/job_post/1?preloads=company,job_contact,job_experience")
});
