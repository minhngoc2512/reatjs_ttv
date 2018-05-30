export const SET_VALUE_FILTER_START = "SET_VALUE_FILTER_START";
export const SET_VALUE_FILTER_SUCCESS = "SET_VALUE_FILTER_SUCCESS";
export const SET_VALUE_FILTER_FAILURE = "SET_VALUE_FILTER_FAILURE";

export const setValueFilter = (
  province_id,
  industrial_id,
  carrer_id,
  salary_id,
  position_id,
  sort,
  page
) => ({
  types: [
    SET_VALUE_FILTER_START,
    SET_VALUE_FILTER_SUCCESS,
    SET_VALUE_FILTER_FAILURE
  ],
  meta: { viewId: "SETVALUEFILTER" },
  promise: null
});
