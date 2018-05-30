import { Component } from "react";
import { object } from "prop-types";
import SearchBarNotIndex from "../../components/SearchBarNotIndex";
import { asyncConnect } from "redux-connect";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { loadFilterByJobCarrer } from "./../../redux/modules/filterbyjobcarrer/actions";
import { loadFilterByPosition } from "../../redux/modules/filterbyposition/actions";
import { loadJobExperience } from "../../redux/modules/jobExperience/actions";
import { loadJobType } from "./../../redux/modules/jobType/actions";
import { loadJobBenefit } from "./../../redux/modules/jobBenefit/actions";
import { loadFilterByProvince } from "./../../redux/modules/filterbyprovince/actions";
import Select from "react-select";
@asyncConnect([
  {
    key: "job_carrer",
    promise: ({ store, params }) => store.dispatch(loadFilterByJobCarrer(999))
  },
  {
    key: "position",
    promise: ({ store, params }) => store.dispatch(loadFilterByPosition())
  },
  {
    key: "experience",
    promise: ({ store, params }) => store.dispatch(loadJobExperience())
  },
  {
    key: "job_type",
    promise: ({ store, params }) => store.dispatch(loadJobType())
  },
  {
    key: "job_benefit",
    promise: ({ store, params }) => store.dispatch(loadJobBenefit())
  },
  {
    key: "province",
    promise: ({ store, params }) => store.dispatch(loadFilterByProvince())
  }
])
class CreatePost extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };
  constructor(props, context) {
    super(props, context);
    this.benefitChange = this.benefitChange.bind(this);
    this.state = {
      benefit: []
    };
  }
  benefitChange(event) {
    console.log("Selected: ", event.target.checked);
    let value = event.target.value;
    let status = event.target.checked;
    let listValue = this.state.benefit;
    if (status === true) {
      listValue.unshift(value);
    } else {
      var index = listValue.indexOf(value);
      listValue.splice(index, 1);
    }
    // console.log(listValue);
    this.setState(
      function(prevState) {
        return {
          benefit: listValue
        };
      }.bind(listValue)
    );
    console.log(this.state.benefit);
  }
  updateSearch = (key, province_id, salary_id) => {
    const provinces = province_id !== "" ? province_id : "";
    const salary = salary_id !== "" ? salary_id : "";
    const key_word = key !== "" ? key : "";

    const search =
      "?" +
      (key !== "" ? "key_word=" + key + "&" : "") +
      (province_id !== "" ? "province_id=" + province_id + "&" : "") +
      (salary_id !== "" ? "salary_id=" + salary_id + "&" : "");
    this.context.store.dispatch(
      push("/" + "tim-viec" + search.substring(0, search.length - 1))
    );
  };

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

    let job_benefit = this.props.job_benefit.data.map((item, index) => {
      return (
        <li key={index}>
          <input
            type="checkbox"
            className={"province" + index}
            id={"province" + index}
            value={item.id}
            onClick={this.benefitChange}
          />
          <label htmlFor={"province" + index} className="field_search">
            {item.name}
          </label>
        </li>
        // <div className="checkbox" key={index}>
        //   <label>
        //     <input
        //       type="checkbox"
        //       onClick={this.benefitChange}
        //       value={item.id}
        //     />{" "}
        //     {item.name}
        //   </label>
        // </div>
      );
    });
    return (
      <main>
        <section className="category">
          <div className="container form-wrapper">
            <h2>Hàng Ngàn Công Việc Mới Đang Chờ Bạn</h2>
            <span>Đúng Người - Đúng Việc - Nhanh Chóng - Chính Xác</span>
          </div>
        </section>
        <SearchBarNotIndex updateSearch={this.updateSearch} />
        <div className="container-fluid page-background-1">
          <div className="col-md-8 col-md-offset-2 container-employer">
            <div className="row title-content">
              <div className="line-color" />
              <h2 className="title-employer">ĐĂNG TIN TUYỂN DỤNG</h2>
              <div className="line-color" />
            </div>
            <div className="row">
              <h3 className="info-job">Thông tin công việc:</h3>
            </div>
            <form className="form-group">
              <div className="row">
                <div className="row col-md-12 row-line">
                  <div className="col-md-3 title-infor"> Tên công việc:</div>
                  <div className="col-md-9">
                    <input type="text" className=" form-control" />
                  </div>
                </div>
                <div className="row col-md-12 row-line">
                  <div className="col-md-3 title-infor"> Trình độ:</div>
                  <div className="col-md-9">
                    <div className="col-md-4 custom-padding-left padding-0">
                      <select className=" form-control">
                        <option>Chọn trình độ</option>
                      </select>
                    </div>
                    <div className="col-md-4 padding-0 padding-top-e">
                      <div className="title-infor">Số lượng:</div>
                    </div>
                    <div className="col-md-4  custom-padding-right padding-0">
                      <input type="number" className=" form-control" />
                    </div>
                  </div>
                </div>
                <div className="row col-md-12 row-line">
                  <div className="col-md-3 title-infor"> Nghành nghề:</div>
                  <div className="col-md-9">
                    <div className="col-md-4 custom-padding-left padding-0">
                      <select className="form-control">
                        <option>Chọn nghành nghề</option>
                        {job_carrer}
                      </select>
                    </div>
                    <div className="col-md-4 padding-0 padding-top-e">
                      <div className="title-infor">Giới tính:</div>
                    </div>
                    <div className="col-md-4  custom-padding-right padding-0">
                      <select className=" form-control">
                        <option>Nam</option>
                        <option>Nữ</option>
                        <option>Khác</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row col-md-12 row-line">
                  <div className="col-md-3 title-infor">
                    Loại hình công việc:
                  </div>
                  <div className="col-md-9">
                    <div className="col-md-4 custom-padding-left padding-0">
                      <select className=" form-control">
                        <option>Chọn loại hình công việc</option>
                        {job_type}
                      </select>
                    </div>
                    <div className="col-md-4 padding-0 padding-top-e">
                      <div className="title-infor">Kinh nghiệm:</div>
                    </div>
                    <div className="col-md-4  custom-padding-right padding-0">
                      <select className=" form-control">
                        <option>Chọn kinh nghiệm</option>
                        {job_experience}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row col-md-12 row-line">
                  <div className="col-md-3 title-infor"> Nơi làm việc:</div>
                  <div className="col-md-9">
                    <div className="col-md-4 custom-padding-left padding-0">
                      <select className=" form-control">
                        <option>Chọn nơi làm việc</option>
                        {province}
                      </select>
                    </div>
                    <div className="col-md-4 padding-0 padding-top-e">
                      <div className="title-infor">Chức danh:</div>
                    </div>
                    <div className="col-md-4  custom-padding-right padding-0">
                      <select className=" form-control">
                        <option>Chọn chức danh</option>
                        {position}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row col-md-12 row-line">
                  <div className="col-md-3 title-infor"> Mức lương:</div>
                  <div className="col-md-9">
                    <div className="col-md-4 custom-padding-left padding-0">
                      <select className=" form-control">
                        <option>Chọn mức lương</option>
                        {job_salary}
                      </select>
                    </div>
                    <div className="col-md-4 padding-top-e padding-0">
                      <div className="title-infor">Đãi ngộ:</div>
                    </div>
                    <div className="col-md-4  custom-padding-right padding-0">
                      <button
                        type="button"
                        className="btn btn-basic btn-sm"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Nhấn để chọn
                      </button>
                      {/* <select className=" form-control">
                        <option>234</option>
                      </select> */}
                      <div id="myModal" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                              >
                                &times;
                              </button>
                              <h4 className="modal-title">
                                Danh sách chế độ đãi ngộ
                              </h4>
                            </div>
                            <div className="modal-body">
                              <div className="post-scoll-benefit">
                                <ul>{job_benefit}</ul>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-info"
                                data-dismiss="modal"
                              >
                                OK
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row col-md-12 row-line">
                  <div className="col-md-3 title-infor"> Ngoại ngữ:</div>
                  <div className="col-md-9">
                    <div className="col-md-4 custom-padding-left padding-0">
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-4 padding-0 padding-top-e">
                      <div className="title-infor">Hạn nộp hồ sơ:</div>
                    </div>
                    <div className="col-md-4  custom-padding-right padding-0">
                      <input type="date" className=" form-control" />
                    </div>
                  </div>
                </div>
                <div className="row col-md-12 row-line">
                  <div className="col-md-3 title-infor"> Mô tả công việc:</div>
                  <div className="col-md-9">
                    <textarea className="-area-1 form-control" rows="6" />
                  </div>
                </div>
              </div>

              <div className="row">
                <hr className="tag-hr" />
              </div>
              <div className="row">
                <h3 className="info-job">Thông tin công ty:</h3>
              </div>
              <div className="row">
                <div className="row col-md-12 row-line">
                  <div className="col-md-3 title-infor"> Tên công ty:</div>
                  <div className="col-md-9">
                    <input type="text" className=" form-control" />
                  </div>
                </div>
                <div className="row col-md-12 row-line">
                  <div className="col-md-3 title-infor"> Địa chỉ công ty:</div>
                  <div className="col-md-9 ">
                    <input type="text" className=" form-control" />
                  </div>
                </div>
                <div className="row col-md-12 row-line">
                  <div className="col-md-3 title-infor">
                    {" "}
                    Điện thoại liên hệ:
                  </div>
                  <div className="col-md-9">
                    <div className="col-md-4 custom-padding-left padding-0">
                      <input type="number" className=" form-control" />
                    </div>
                    <div className="col-md-4 padding-0 padding-top-e">
                      <div className="title-infor">Email liên hệ:</div>
                    </div>
                    <div className="col-md-4  custom-padding-right padding-0">
                      <input type="email" className=" form-control" />
                    </div>
                  </div>
                </div>
                <div className="row col-md-12 row-line">
                  <div className="col-md-3 title-infor title-upfile">
                    {" "}
                    Logo công ty:
                    <br />
                    <h4 className="note-infor">(* Bắt buộc)</h4>
                  </div>
                  <div className="col-md-9">
                    <div className="col-md-4 custom-padding-left padding-0">
                      <input type="file" className="input-file form-control" />
                    </div>
                    <div className="col-md-4 padding-0 padding-top-e">
                      <div className="title-infor  title-upfile">
                        Video công ty:
                        <br />
                        <h4 className="note-infor">(* Không bắt buộc)</h4>
                      </div>
                    </div>
                    <div className="col-md-4  custom-padding-right padding-0">
                      <input type="file" className="input-file form-control" />
                    </div>
                  </div>
                </div>
                <div className="row col-md-12 form-btn-e ">
                  <center>
                    <input
                      type="submit"
                      value="ĐĂNG TIN TUYỂN DỤNG"
                      className="btn-submit-em form-control"
                    />
                  </center>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    taxonomy: state.taxonomy.data,
    job_salary: state.job_salary.data.data
  };
};
export default connect(mapStateToProps)(CreatePost);
