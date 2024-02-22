import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task To The List"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          dolorum!{" "}
        </p>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
