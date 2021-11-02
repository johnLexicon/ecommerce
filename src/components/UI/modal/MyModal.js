import { Button, Modal } from "react-bootstrap";

const MyModal = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.closeModal} animation={false}>
        <Modal.Header closeButton className="fs-4 fw-bolder">
          {" "}
          {props.data.title}
        </Modal.Header>
        <Modal.Body>
          <div className=" position-relative d-flex">
            <img src={props.data.img} alt="images" className="mx-auto" />
            <p className="position-absolute bg-danger p-2 rounded text-white fw-bolder">
              {props.data.rabatt}
            </p>
            <i
              class="bi bi-heart text-end fs-3 p-3 text-secondary position-absolute  end-0"
              style={{ top: "-1rem" }}
            />
          </div>
          <div className="d-flex justify-content-between mt-5">
            <p>
              <span className="fw-bolder">Vikt</span>: {props.data.weight}
            </p>
            <p>
              <span className="fw-bolder">Ursprung</span>: {props.data.Ursprung}
            </p>
          </div>
          <p className="text-danger">
            <span className="fw-bolder">MaxKöp</span>: {props.data.maxkop}
          </p>
          <p className="fw-bolder">{props.data.text}</p>
          <div className="ms-5">
            <p>{props.data.ing_1}</p>
            <p>{props.data.ing_2}</p>
            <p>{props.data.ing_3}</p>
            <p>{props.data.ing_4}</p>
            <p>{props.data.ing_5}</p>
            <p>{props.data.ing_6}</p>
            <p>{props.data.ing_7}</p>
            <p>{props.data.ing_8}</p>
            <p>{props.data.ing_9}</p>
            <p>{props.data.ing_10}</p>
            <p>{props.data.ing_11}</p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={props.closeModal}>
            Stänga
          </Button>
          <Button variant="danger" onClick={props.closeModal}>
            Lägga till
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
