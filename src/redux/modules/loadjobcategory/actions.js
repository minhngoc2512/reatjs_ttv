export const LOAD_JOBCATEGORY_START = "LOAD_JOBCATEGORY_START";
export const LOAD_JOBCATEGORY_SUCCESS = "LOAD_JOBCATEGORY_SUCCESS";
export const LOAD_JOBCATEGORY_FAILURE = "LOAD_JOBCATEGORY_FAILURE";
const url =
  "/search?preloads=job_carrer,company,job_salary,job_contact,job_contact.industrial_zone,job_contact.province";

export const loadJobCategory = (
  province_id,
  industrial_zone_id,
  carrer_id,
  salary_id,
  job_position_id,
  sort,
  page,
  key_word = ""
) => ({
  types: [
    LOAD_JOBCATEGORY_START,
    LOAD_JOBCATEGORY_SUCCESS,
    LOAD_JOBCATEGORY_FAILURE
  ],
  meta: { viewId: "LOADJOBCATEGORY" },
  promise: ({ api }) =>
    api.get(
      url +
        getKeyWord(key_word) +
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
        "&limit=20"
    )
});
function getKeyWord(key_word) {
  if (key_word === "") {
    return "";
  }
  return "&q[keyword]=" + key_word;
}
