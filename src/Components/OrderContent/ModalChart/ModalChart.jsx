import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalChart = ({
  showModal,
  handleClose,
  kasirDetail,
  total,
  descript,
  tambah,
  kurang,
  handleSubmit,
  changeHandler
}) => {
  if (kasirDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {kasirDetail.product.nama} ({" "}
            <strong>Rp.{kasirDetail.product.harga},-</strong>)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Total Harga :</Form.Label>
              <p>
                <strong>Rp. {kasirDetail.total_harga}</strong>
              </p>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Jumlah :</Form.Label>
              <br />
              <Button
                variant="primary"
                size="sm"
                className="mr-2"
                onClick={() => kurang()}
              >
                -
              </Button>{""}
              

              <strong>{total}</strong>

              {""}<Button
                variant="primary"
                size="sm"
                className="ml-2"
                onClick={() => tambah()}
              >
                +
              </Button>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Keterangan :</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="keterangan"
                placeholder="Contoh : Pedes, Nasi Setengah"
                value={descript}
                onChange={(event) => changeHandler(event)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
           Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalChart;
