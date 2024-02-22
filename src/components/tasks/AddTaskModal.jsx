import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"Add Task To The List"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col gap-3">
            <label htmlFor="title">Title</label>

            <input
              className=" w-full rounded-md"
              id="title"
              type="text"
              {...register("title")}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
