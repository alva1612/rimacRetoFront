import * as React from "react";

import { cn } from "@/lib/utils";
import styles from "./input.module.scss";
import { ClassNameProp } from "@/types/props.common";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

interface LabelProps {
  label: string;
}
type InputLabelProps = {
  inputProps: InputProps;
  labelProps: LabelProps & ClassNameProp;
} & ClassNameProp;

export const InputLabel: React.FC<InputLabelProps> = ({
  inputProps,
  labelProps,
  className,
}) => {
  return (
    <div className={cn(styles.inputLabelField, className)}>
      <span className={cn(styles.inputLabel, labelProps.className)}>
        {labelProps.label}
      </span>
      <Input
        type="text"
        {...inputProps}
        className={cn(styles.input, inputProps.className)}
      />
    </div>
  );
};
Input.displayName = "Input";

export { Input };
