import React from "react";

export default function Modal({ content }) {
  return (
    <div
      className="modal fade"
      id="shoes-items"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Chi tiết sản phẩm
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <h3 className="text-center">{content.name}</h3>
                <img
                  src={content.image}
                  alt={content.name}
                  width="100%"
                  height="200px"
                />
              </div>
              <div className="col-sm-8">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Mô tả</td>
                      <td>{content.description}</td>
                    </tr>
                    <tr>
                      <td>Số lượng</td>
                      <td>{content.quantity} pieces</td>
                    </tr>
                    <tr>
                      <td>Giá</td>
                      <td>{content.price} $</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
