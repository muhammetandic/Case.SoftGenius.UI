import Select from "react-select";
import { Controller } from "react-hook-form";

export const ControlledSelect = ({
  control,
  name,
  rules,
  label,
  errorMessage,
  options,
  value,
}) => {
  return (
    <div className="field">
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <p className="label">{label}</p>
            <Select
              isSearchable
              placeholder="Select a country"
              cacheOptions
              defaultOptions
              options={options}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.name}
              onChange={(option) => field.onChange(option ? option.id : null)}
              value={
                options &&
                options.find((item) =>
                  field.value ? item.id === field.value : item.name === value,
                )
              }
            />
            {fieldState.error && <p className="error">{errorMessage}</p>}
          </>
        )}
      />
    </div>
  );
};
