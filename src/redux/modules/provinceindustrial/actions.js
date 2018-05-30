export const LOAD_PROVINCES_START = "LOAD_PROVINCES_START";
export const LOAD_PROVINCES_SUCCESS = "LOAD_PROVINCES_SUCCESS";
export const LOAD_PROVINCES_FAILURE = "LOAD_PROVINCES_FAILURE";

const url =
  "/province?preloads=industrial_zones&sort=-job_total_count&fields=name,id,industrial_zones.name,industrial_zones.id,industrial_zones.job_avail_count&limit=4";

export const loadProvinces = () => ({
  types: [LOAD_PROVINCES_START, LOAD_PROVINCES_SUCCESS, LOAD_PROVINCES_FAILURE],
  meta: { viewId: "TOPINDUSTRIALZONE" },
  promise: ({ api }) => api.get(url)
});
