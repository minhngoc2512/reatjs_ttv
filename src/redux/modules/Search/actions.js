export const LOAD_SEARCH_START = "LOAD_SEARCH_START";
export const LOAD_SEARCH_SUCCESS = "LOAD_SEARCH_SUCCESS";
export const LOAD_SEARCH_FAILURE = "LOAD_SEARCH_FAILURE";

const fetchAllURI =
  "/search?preloads=job_carrer,company,job_salary,job_contact,job_contact.industrial_zone,job_contact.province";

export const loadJobSearch = (
  province_id,
  industrial_zone_id,
  carrer_id,
  salary_id,
  job_position_id,
  sort,
  page
) => ({
  types: [LOAD_SEARCH_START, LOAD_SEARCH_SUCCESS, LOAD_SEARCH_FAILURE],
  meta: { viewId: "SEARCH" },
  promise: ({ api }) =>
    api.get(
      fetchAllURI +
        "&q[province_id]=" +
        province_id +
        "&q[industrial_zone_id]=" +
        industrial_zone_id +
        "&q[job_carrer_id]=" +
        carrer_id +
        "&q[job_salary_id]=" +
        salary_id +
        "&q[job_position_id]=" +
        job_position_id +
        "&page=" +
        page +
        "&sort=-" +
        sort +
        "&limit=10"
    )
});
