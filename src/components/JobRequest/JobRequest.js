import { Component } from "react";
import { object } from "prop-types";
import RenderHtml from "react-render-html";

export default class JobRequest extends Component {
  static contextTypes = {
    i18n: object
  };

  render() {
    const { l } = this.context.i18n;
    const jobRequire = this.props.jobrequire;
    const numberOfRecruitment = conutJob => {
      return conutJob == 0
        ? "Tuyển đến khi đủ số lượng"
        : "Số lượng: " + conutJob;
    };
    const jobPosition = position => {
      if (position !== 0) {
        return RenderHtml(
          '<div className="icon-cap-bac">' +
            "Cấp bậc:" +
            jobRequire.job_position.name +
            "</div>"
        );
      }
      return "";
    };

    return (
      <div className="yeu-cau">
        <div className="icon-so-luong">
          {numberOfRecruitment(jobRequire.number_of_recruitment)}
        </div>
        <div className="icon-kinh-nghiem">
          Kinh Nghiệm:{jobRequire.job_experience.name}
        </div>
        {jobPosition(jobRequire.job_position_id)}
        <div className="icon-hoc-van">
          Trình độ: {jobRequire.job_level.name}
        </div>
      </div>
    );
  }
}
