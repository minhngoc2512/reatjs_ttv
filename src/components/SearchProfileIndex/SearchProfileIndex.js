import { Component } from "react";
import { object } from "prop-types";
import { connect } from "react-redux";
export default class SearchProfileIndex extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    const job_carrer = this.props.job_carrer.data.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });
    const job_experience = this.props.experience.data.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });
    const job_type = this.props.job_type.data.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });
    const job_salary = this.props.job_salary.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });
    const province = this.props.province.data.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });
    const position = this.props.position.data.map((item, index) => {
      return (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      );
    });
    return (
      <div className="col-md-8 col-md-offset-2 container-employer">
        <div className="row title-content">
          <div className="line-color" />
          <h2 className="title-employer">TÌM KIẾM HỒ SƠ</h2>
          <div className="line-color" />
        </div>
        <div className="row">
          <h3 className="info-job">Thông tin tìm kiếm:</h3>
        </div>
        <div className="row">
          <form className="form-group">
            <div className="row col-md-12 row-line">
              <div className="col-md-3 title-infor"> Tìm theo từ khóa:</div>
              <div className="col-md-9">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row col-md-12 row-line">
              <div className="col-md-3 title-infor"> Chọn nghành nghề:</div>
              <div className="col-md-9">
                <div className="col-md-4 custom-padding-left padding-0">
                  <select className="form-control">
                    <option>Chọn nghành nghề</option>
                    {job_carrer}
                  </select>
                </div>
                <div className="col-md-4 padding-0 padding-top-e">
                  <div className="title-infor">Chọn trình độ:</div>
                </div>
                <div className="col-md-4  custom-padding-right padding-0">
                  <select className="form-control">
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row col-md-12 row-line">
              <div className="col-md-3 title-infor"> Nơi làm việc:</div>
              <div className="col-md-9">
                <select className="form-control">
                  <option>Chọn nơi làm việc</option>
                  {province}
                </select>
              </div>
            </div>

            <div className="row col-md-12 row-line">
              <div className="col-md-3 title-infor"> Mức lương(VND):</div>
              <div className="col-md-9">
                <div className="col-md-4 custom-padding-left padding-0">
                  <select className="form-control margin-bottom-s">
                    <option>Từ:</option>
                    {job_salary}
                  </select>
                  <select className="form-control ">
                    <option>Đến:</option>
                    {job_salary}
                  </select>
                </div>
                <div className="col-md-4 padding-0 padding-top-e">
                  <div className="title-infor">Tuổi:</div>
                </div>
                <div className="col-md-4  custom-padding-right padding-0">
                  <input
                    className="form-control margin-bottom-s"
                    type="number"
                    placeholder="Từ:"
                  />
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Đến:"
                  />
                </div>
              </div>
            </div>
            <div className="row col-md-12 row-line">
              <div className="col-md-3 title-infor"> Kinh nghiệm:</div>
              <div className="col-md-9">
                <div className="col-md-4 custom-padding-left padding-0">
                  <select className="form-control">
                    <option>Chọn kinh nghiệm</option>
                    {job_experience}
                  </select>
                </div>
                <div className="col-md-4 padding-top-e padding-0">
                  <div className="title-infor">Giới tính:</div>
                </div>
                <div className="col-md-4  custom-padding-right padding-0">
                  <select className="form-control">
                    <option>Nam</option>
                    <option>Nữ</option>
                    <option>Khác</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row col-md-12 form-btn-e ">
              <center>
                <input
                  type="submit"
                  value="TÌM KIẾM HỒ SƠ"
                  className="btn-submit-em"
                />
              </center>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
