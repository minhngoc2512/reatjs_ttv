import { Component } from "react";
import { object } from "prop-types";
import ProfileUserDegree from "../ProfileUserDegree";
import ProfileUserExperience from "../ProfileUserExperience";
import ProfileUserInformation from "../ProfileUserInformation";
import ProfileUserInformationBasic from "../ProfileUserInformationBasic";
import ProfileUserInformationGeneral from "../ProfileUserInformationGeneral";
import ProfileUserLanguage from "../ProfileUserLanguage";
import ProfileUserRequire from "../ProfileUserRequire";
import ProfileUserSkill from "../ProfileUserSkill";
export default class ProfileUserIndex extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="col-md-8 u-margin-bottom-1">
        <ProfileUserInformation />
        <ProfileUserInformationBasic />
        <ProfileUserInformationGeneral />
        <ProfileUserSkill />
        <ProfileUserLanguage />
        <ProfileUserExperience />
        <ProfileUserDegree />
        <ProfileUserRequire />
      </div>
    );
  }
}
