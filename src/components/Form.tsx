import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./Button";

export function Form({
  onSubmit,
  inputs,
}: {
  onSubmit: (values: any) => Promise<void>;
  inputs: { label: string; name: string }[];
}) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = useCallback(async () => {
    const values = getValues();
    await onSubmit(values);
  }, [getValues, onSubmit]);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {inputs.map((input, index) => {
        return (
          <Input
            key={index}
            label={input.label}
            inputProps={{
              ...register(input.name, { required: "this field is required" }),
            }}
            errorMessage={errors?.[input.name]?.message as string}
          />
        );
      })}

      <Button color="secondary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export const Input = ({
  label,
  inputProps,
  errorMessage,
}: {
  label: string;
  inputProps: any;
  errorMessage?: string;
}) => {
  return (
    <div style={{ marginBottom: 12 }}>
      <label
        style={{
          color: "rgb(28, 36, 52)",
          fontSize: 14,
          fontWeight: 500,
          marginBottom: 12,
          display: "block",
        }}
      >
        {label}
      </label>
      <input
        style={{
          border: "1.5px solid rgb(226, 232, 240)",
          borderRadius: 8,
          color: "rgb(28, 36, 52)",
          fontSize: 16,
          padding: "12px 20px",
        }}
        type="text"
        {...inputProps}
      />
      <div style={{ color: "orange", fontSize: 14 }}>{errorMessage}</div>
    </div>
  );
};
