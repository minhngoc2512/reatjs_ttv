export const LOAD_FILTERBYINDUSTRIAL_START = "LOAD_FILTERBYINDUSTRIAL_START";
export const LOAD_FILTERBYINDUSTRIAL_SUCCESS =
  "LOAD_FILTERBYINDUSTRIAL_SUCCESS";
export const LOAD_FILTERBYINDUSTRIAL_FAILURE =
  "LOAD_FILTERBYINDUSTRIAL_FAILURE";

const url = "/industrial_zone?q[province_id]=";

export const loadFilterByIndustrial = province_id => ({
  types: [
    LOAD_FILTERBYINDUSTRIAL_START,
    LOAD_FILTERBYINDUSTRIAL_SUCCESS,
    LOAD_FILTERBYINDUSTRIAL_FAILURE
  ],
  meta: { viewId: "FILTERBYINDUSTRIAL" },
  promise: ({ api }) =>
    api.get(url + province_id + "&fields=name,id,job_avail_count&limit=30")
});
