import Modal from "../ui/Modal";
import { useForm } from "react-hook-form";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    onCancel();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"Add Task To The List"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* title  */}
          <div className=" flex flex-col gap-3">
            <label htmlFor="title">Title</label>

            <input
              className=" w-full rounded-md"
              id="title"
              type="text"
              {...register("title")}
            />
          </div>

          {/* description  */}
          <div className=" flex flex-col gap-3">
            <label htmlFor="description">Description</label>

            <input
              className=" w-full rounded-md"
              id="description"
              type="text"
              {...register("description")}
            />
          </div>

          {/* Date  */}
          <div className=" flex flex-col gap-3">
            <label htmlFor="date">Date</label>

            <input
              className=" w-full rounded-md"
              id="date"
              type="date"
              {...register("date")}
            />
          </div>

          {/* Assign To  */}
          <div className=" flex flex-col gap-3">
            <label htmlFor="assignedTo">Assign To</label>

            <select
              className=" w-full rounded-md"
              {...register("assignedTo")}
              id="assignedTo"
            >
              <option value="Shariar">Shariar</option>
              <option value="Islam">Islam</option>
              <option value="Niaj">Niaj</option>
            </select>
          </div>

          {/* Priority  */}
          <div className=" flex flex-col gap-3">
            <label htmlFor="priority">Priority</label>

            <select
              className=" w-full rounded-md"
              {...register("priority")}
              id="priority"
            >
              <option value="High">High</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
            </select>
          </div>
          <div>
            <button
              onClick={() => onCancel()}
              type="button"
              className="bg-red-400 p-2 rounded-md font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-300 p-2 rounded-md font-semibold"
            >
              Submit
            </button>
          </div>
          {/* <button type="submit">Submit</button> */}
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
