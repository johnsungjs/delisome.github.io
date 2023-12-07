import { useState } from "react";
import PlainModal from "../components/modal/PlainModal";
// import { Modal } from "@mui/material";

export default function TransactionPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>test modal</div>
      <button
        className="bg-white px-4 py-2 text-primary"
        onClick={() => setIsOpen(true)}
      >
        test modal
      </button>
      {isOpen && <PlainModal setIsOpen={setIsOpen} />}
      {/* {isOpen && <Modal children={"this is modal"}></Modal>} */}
    </>
  );
}
