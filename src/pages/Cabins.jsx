import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Modal from "../ui/Modal";

function Cabins() {
  const [isOpenModal, setisOpenModal] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        <Button onClick={() => setisOpenModal((show) => !show)}>
          Add new cabin
        </Button>
        {isOpenModal && (
          <Modal onClose={() => setisOpenModal(false)}>
            <CreateCabinForm onCloseModal={() => setisOpenModal(false)} />
          </Modal>
        )}
      </Row>
    </>
  );
}

export default Cabins;
