import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Summary from "../components/Summary";
import CheckoutForm from "../components/CheckoutForm";
import { paymentUtility } from "../utils";

import Modal from "../components/Modal";
import Order from "../components/Order";
function Checkout() {
  const navigate = useNavigate();

  const [form, setForm] = useState();
  const [trigger, setTrigger] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="bg-grayLight w-full lg:h-[1400px] sm:h-[1750px] ">
      <button onClick={() => navigate(-1)} className="lg:ml-96 my-10 text-gray">
        Go Back
      </button>
      <div className="lg:w-defaultWidth sm:w-full h-[1400px] mx-auto flex justify-evenly lg:flex-row sm:flex-col ">
        <CheckoutForm
          form={form}
          setForm={setForm}
          trigger={trigger}
          setTrigger={setTrigger}
          paymentUtility={paymentUtility}
          toggleModal={toggleModal}
        />
        <Summary
          form={form}
          paymentUtility={paymentUtility}
          trigger={trigger}
          setTrigger={setTrigger}
          toggleModal={toggleModal}
        />
      </div>
      <Modal isOpen={modalOpen} onClose={toggleModal} middle>
        <Order form={form} />
      </Modal>
    </div>
  );
}

export default Checkout;
