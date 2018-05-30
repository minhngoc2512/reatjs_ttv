import { routerReducer } from "react-router-redux";
import { reducer as reduxAsyncConnect } from "redux-connect";
import widgets from "./modules/widgets";
import dataView from "./modules/dataView";
import province from "./modules/province";
import listJobCompany from "./modules/company";
import jobDetail from "./modules/jobDetail";
import jobInCompany from "./modules/jobInCompany";
import provinces from "./modules/provinceindustrial";
import joblistfeature from "./modules/JobList";
import joblistnew from "./modules/JobListNew";
import topindustrialzone from "./modules/topindustrialzone";
import jobSimilarJobPost from "./modules/jobSimilarJobPost";
import jobSimilarCompany from "./modules/jobSimilarCompany";
import jobSimilarIndustrialZone from "./modules/jobSimilarIndustrialZone";
import informationCompany from "./modules/infomationCompany";
import filterbyprovince from "./modules/filterbyprovince";
import filterbyjobcarrer from "./modules/filterbyjobcarrer";
import filterbyposition from "./modules/filterbyposition";
import loadjobcategory from "./modules/loadjobcategory";
import categorysummary from "./modules/categorysummary";
import filterbyindustrial from "./modules/filterbyindustrial";
import setvaluefilter from "./modules/setvaluefilter";
import Search from "./modules/Search";
import jobExperience from "./modules/jobExperience";
import jobType from "./modules/jobType";
import jobBenefit from "./modules/jobBenefit";
import countJobHome from "./modules/countJobHome";

export default function createReducers(asyncReducers) {
  return {
    routing: routerReducer,
    reduxAsyncConnect,
    // widgets,
    provinces,
    dataView,
    province,
    jobSimilarJobPost,
    listJobCompany,
    jobDetail,
    jobInCompany,
    provinces,
    joblistfeature,
    joblistnew,
    topindustrialzone,
    informationCompany,
    filterbyprovince,
    filterbyjobcarrer,
    filterbyposition,
    loadjobcategory,
    categorysummary,
    filterbyindustrial,
    setvaluefilter,
    Search,
    jobExperience,
    jobType,
    jobBenefit,
    jobSimilarCompany,
    jobSimilarIndustrialZone,
    countJobHome,
    ...asyncReducers
  };
}
