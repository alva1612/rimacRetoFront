"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormField } from "@/components/ui/form";
import { Input, InputLabel } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ClassNameProp } from "@/types/props.common";
import { FC } from "react";
import { useForm } from "react-hook-form";

import styles from "./quoteForm.module.scss";

type Inputs = {
  documentType: "DNI" | "CE";
  documentNumber: string;
  phoneNumber: string;
};

export const QuoteForm: FC<ClassNameProp> = ({ className }) => {
  const form = useForm<Inputs>({ defaultValues: { documentType: "DNI" } });

  const onSubmit = () => {};

  console.log(form.watch());

  return (
    <div className={cn(className)}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div>
            <div className="flex w-full">
              <FormField
                {...form.control}
                name="documentType"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger
                      className={styles.quoteForm__documentTypeSelect}
                    >
                      <SelectValue
                        placeholder={form.getValues("documentType")}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DNI">DNI</SelectItem>
                      <SelectItem value="CE">CE</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              ></FormField>
              <InputLabel
                className={cn("flex-1")}
                inputProps={{
                  ...form.register("documentNumber"),
                  className: styles.quoteForm__documentNumberInput,
                }}
                labelProps={{ label: "Nro. de documento" }}
              />
            </div>
          </div>
          <InputLabel
            labelProps={{ label: "Celular" }}
            inputProps={{ ...form.register("phoneNumber") }}
          />
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center space-x-3">
              <Checkbox id="privacy" className="w-5 h-5" />
              <label
                htmlFor="privacy"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Acepto la Política de Privacidad
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="terms" className="w-5 h-5" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-6 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Acepto la Política Comunicaciones Comerciales
              </label>
            </div>
            <a className="text-xs underline font-semibold mb-2" href="">
              Aplican Términos y Condiciones.
            </a>
            <Button size="lg" className={cn("h-14", styles.quoteForm__button)}>
              Cotiza aquí
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
