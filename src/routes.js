/* eslint-disable react/jsx-no-bind */
import { IndexRoute, Route, Redirect } from "react-router";
import App from "./components/App";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Company from "./pages/Company";
import Parent from "./pages/Category";
import Child from "./pages/Industrial";
import NotFound from "./pages/NotFound";
import SwitchComponent from "./pages/SwitchComponent";
import Search from "./pages/Search";
import EmployerHome from "./pages/EmployerHome";
import CreatePost from "./pages/CreatePost";
import JobApply from "./pages/JobApply";
import SearchProfile from "./pages/SearchProfile";
import SearchProfileResult from "./pages/SearchProfileResult";
import ProfileDetail from "./pages/ProfileDetail";
import ProfileSaved from "./pages/ProfileSaved";
import PostSubmitted from "./pages/PostSumitted";
import ProfileUser from "./pages/ProfileUser";
import ManageUser from "./pages/ManageUser";
import Introduce from "./pages/Introduce";
// eslint-disable-next-line import/no-dynamic-require
if (process.env.IS_SERVER) {
  global.System = {};
  System.import = module => Promise.resolve(require(module));
}

export default () => (
  <Route component={App} path="/">
    <IndexRoute component={Home} />
    <Route component={Search} path="/tim-kiem/:child" />
    <Route component={CreatePost} path="/create-post" />
    <Route component={SearchProfile} path="/search-profile" />
    <Route component={SearchProfileResult} path="/search-profile-result" />
    <Route component={NotFound} path="/notfound" />
    <Route component={Introduce} path="/gioi-thieu" />
    <Route component={Parent} path="/:parent" />
    <Route component={SwitchComponent} path="/:parent/:child" />

    <Route component={Detail} path="/:parent/:child/:post" />
    {/* <Route component={Industrial} path="/:parent/:child" /> */}
    <Route getComponent={() => System.import("./pages/About")} path="/about" />
    <Route
      getComponent={() => System.import("./pages/NotFound")}
      path="*"
      status={404}
    />
    <Redirect from="/start" to="/" />
  </Route>
);
