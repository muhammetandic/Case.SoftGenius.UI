import { Controller } from "react-hook-form";
import { Input } from "semantic-ui-react";

export const ControlledInput = ({
  control,
  name,
  rules,
  label,
  errorMessage,
}) => {
  return (
    <div className="field">
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <Input
              fluid
              label={label}
              name={name}
              error={fieldState.error}
              {...field}
            />
            {fieldState.error && <p className="error">{errorMessage}</p>}
          </>
        )}
      />
    </div>
  );
};
