import { Component } from "react";
import { object } from "prop-types";
export default class PostSubmittedItem extends Component {
  static contextTypes = {
    i18n: object,
    store: object
  };

  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <tr className="border-ps-table">
        <td className="post-ps-item-title">
          <h3>
            <a href="#">Tuyển nhân viên kế toán làm việc tại Long An</a>
          </h3>
          <button className="btn btn-basic btn-p-submit">Sửa</button>
          <button className="btn btn-basic">Xóa</button>
        </td>
        <td className="text-tb-ps">20/11/2017</td>
        <td className="text-tb-ps">20/12/2017</td>
        <td className="text-tb-ps"> 2345</td>
        <td className="ps-count">20</td>
      </tr>
    );
  }
}
