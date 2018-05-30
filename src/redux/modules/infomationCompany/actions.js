export const LOAD_INFOMATIONCOMPANY_START = "LOAD_INFOMATIONCOMPANY_START";
export const LOAD_INFOMATIONCOMPANY_SUCCESS = "LOAD_INFOMATIONCOMPANY_SUCCESS";
export const LOAD_INFOMATIONCOMPANY_FAILURE = "LOAD_INFOMATIONCOMPANY_FAILURE";
const ApiInfoCompany = "/company?limit=10&preloads=province&q[id]=";
export const loadInfomationCompany = id => ({
  types: [
    LOAD_INFOMATIONCOMPANY_START,
    LOAD_INFOMATIONCOMPANY_SUCCESS,
    LOAD_INFOMATIONCOMPANY_FAILURE
  ],
  meta: { viewId: "INFOMATIONCOMPANY" },
  promise: ({ api }) => api.get(ApiInfoCompany + id)
});
