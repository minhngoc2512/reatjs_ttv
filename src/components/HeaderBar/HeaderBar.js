import React from "react";
import { object } from "prop-types";
import classNames from "classnames";
import Image from "./../Image";
import { Link } from "react-router";

export default class HeaderBar extends React.Component {
  static contextTypes = {
    i18n: object
  };

  render() {
    const { l } = this.context.i18n;
    const { history } = this.context;

    return (
      <header
        className="navbar-fixed-top"
        data-spy="affix"
        data-offset-top="60"
      >
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#main-nav"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link className="navbar-brand" title="Việc Làm Nam Bộ" to="/">
                <img
                  src={require("./logo.png")}
                  alt="Việc Làm Nam Bộ"
                  title="Việc Làm Nam Bộ"
                />
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="main-nav">
              <ul className="nav navbar-nav text-center">
                <li>
                  <a
                    className="dropdown"
                    title=" Việc Làm Mới Nhất"
                    href="/tim-kiem/viec-lam-moi-nhat"
                  >
                    Mới Nhất
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown"
                    title=" Việc Làm Lương Cao"
                    href="/tim-kiem/viec-lam-luong-cao"
                  >
                    Lương Cao
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="javascript:void(0);"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    title="Việc Làm Tỉnh Thành"
                  >
                    Việc Làm Tỉnh Thành
                    <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        title="Việc làm Bình Dương"
                        href="/viec-lam-o-binh-duong"
                      >
                        Bình Dương
                      </a>
                    </li>
                    <li>
                      <a title="Việc làm Đồng Nai" href="/viec-lam-o-dong-nai">
                        Đồng Nai
                      </a>
                    </li>
                    <li>
                      <a title="Việc làm Sài Gòn" href="/viec-lam-o-sai-gon">
                        Sài Gòn
                      </a>
                    </li>
                    <li>
                      <a
                        title="Việc làm Tiên Giang"
                        href="/viec-lam-o-tien-giang"
                      >
                        Tiền Giang
                      </a>
                    </li>
                    <li>
                      <a title="Việc làm Long An" href="/viec-lam-o-long-an">
                        Long An
                      </a>
                    </li>
                    <li>
                      <a title="Việc làm Vũng Tàu" href="/viec-lam-o-vung-tau">
                        Vũng Tàu
                      </a>
                    </li>
                    <li>
                      <a
                        title="Việc làm Vĩnh Long"
                        href="/viec-lam-o-vinh-long"
                      >
                        Vĩnh Long
                      </a>
                    </li>
                    <li>
                      <a title="Việc làm Cần Thơ" href="/viec-lam-o-can-tho">
                        Cần Thơ
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    title=" Tin Tức"
                  >
                    Tin Tức
                  </a>
                </li>
                <li className="">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    title="Giới Thiệu"
                  >
                    Giới Thiệu
                  </a>
                </li>

                {/* <li>
                  <a href="/" title="Đăng Nhập">
                    Đăng Nhập
                  </a>
                </li>
                <li>
                  <a href="/" title="Đăng Ký">
                    Đăng Ký
                  </a>
                </li>
                <li>
                  <button className="employer" title="Nhà Tuyển Dụng">
                    Nhà Tuyển Dụng
                  </button>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
