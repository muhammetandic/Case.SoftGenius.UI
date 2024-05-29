import { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
} from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useUsers } from "./useUsers";
import { ControlledInput } from "../../components/ControlledInput";

export const UserEdit = ({ title, data }) => {
  const [open, setOpen] = useState(false);
  const { upsertUser } = useUsers();
  const { mutate: addOrUpdateUser, isPending, isError, reset } = upsertUser();
  const {
    handleSubmit,
    control,
    reset: resetForm,
  } = useForm({
    values: {
      id: data?.id || null,
      name: data?.name || "",
      email: data?.email || "",
      countryId: null,
    },
  });

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    resetForm();
    reset();
    setOpen(false);
  };

  const onSubmit = (values) => {
    console.log(values);
    addOrUpdateUser(values, { onSuccess: () => onClose() });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      trigger={
        <Button color={title === "Add" ? "green" : "orange"}>{title}</Button>
      }
    >
      <ModalHeader>{title} User</ModalHeader>
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput
            name="name"
            label="Name"
            rules={{ required: true }}
            control={control}
            errorMessage="Please enter a name"
          />
          <ControlledInput
            name="email"
            label="Email"
            rules={{
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            }}
            control={control}
            errorMessage="Please enter a valid email"
          />
        </form>
        <div className="api-error">
          {isError && <p className="error">An error occurred</p>}
        </div>
      </ModalContent>
      <ModalActions>
        <Button color="black" onClick={onClose}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition="right"
          loading={isPending}
          icon="checkmark"
          onClick={handleSubmit(onSubmit)}
          positive
        />
      </ModalActions>
    </Modal>
  );
};
