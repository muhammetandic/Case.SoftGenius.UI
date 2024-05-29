import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
} from "semantic-ui-react";
import { useCountries } from "./useCountries";
import { ControlledInput } from "../../components/ControlledInput";

export const CountryEdit = ({ title, data }) => {
  const [open, setOpen] = useState(false);

  const { upsertCountry } = useCountries();
  const {
    mutate: addOrUpdateCountry,
    isPending,
    isError,
    reset,
  } = upsertCountry();

  const {
    handleSubmit,
    control,
    reset: resetForm,
  } = useForm({
    values: {
      id: data?.id || null,
      name: data?.name || "",
    },
  });

  const onSubmit = (formData) => {
    addOrUpdateCountry(formData, { onSuccess: () => onClose() });
  };

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    resetForm();
    reset();
    setOpen(false);
  };

  console.log(isError);

  return (
    <Modal
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      trigger={
        <Button color={title === "Add" ? "green" : "orange"}>{title}</Button>
      }
    >
      <ModalHeader>{title} Country</ModalHeader>
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput
            name="name"
            label="Country"
            control={control}
            rules={{ required: true }}
            errorMessage="Please enter a country"
          />
        </form>
        <div className="api-error">
          {isError && <p className="error">Country already exists</p>}
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
