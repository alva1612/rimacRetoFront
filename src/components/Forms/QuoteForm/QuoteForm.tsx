"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { InputLabel } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { ClassNameProp } from "@/types/props.common";
import { quoteFormSchema } from "@/constants/form.constant";

import styles from "./quoteForm.module.scss";

type Inputs = {
  documentType: "DNI" | "CE";
  documentNumber: string;
  phoneNumber: string;
  privacy: boolean;
  commercials: boolean;
};

export const QuoteForm: FC<ClassNameProp> = ({ className }) => {
  const form = useForm<Inputs>({
    defaultValues: { documentType: "DNI" },
    resolver: zodResolver(quoteFormSchema),
    mode: "all",
  });

  const onSubmit = () => {};
  console.log(form.getValues());
  console.log(form.formState.errors);

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
                control={form.control}
                name="documentType"
                render={({ field }) => (
                  <Select
                    onValueChange={(v) => {
                      field.onChange(v);
                      if (form.formState.dirtyFields["documentNumber"])
                        form.trigger("documentNumber");
                    }}
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
              <FormField
                control={form.control}
                name="documentNumber"
                render={({ field }) => (
                  <FormItem>
                    <InputLabel
                      className={cn("flex-1")}
                      inputProps={{
                        ...field,
                        className: styles.quoteForm__documentNumberInput,
                      }}
                      labelProps={{ label: "Nro. de documento" }}
                    />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              name="documentNumber"
              render={() => <FormMessage className="mt-2" />}
            />
          </div>
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <InputLabel
                  labelProps={{ label: "Celular" }}
                  inputProps={{
                    ...field,
                  }}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-4 mt-2">
            <FormField
              control={form.control}
              name="privacy"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="privacy"
                        className="w-5 h-5"
                      />
                    </FormControl>
                    <label
                      htmlFor="privacy"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Acepto la Política de Privacidad
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="commercials"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center space-x-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="commercials"
                        className="w-5 h-5"
                      />
                    </FormControl>
                    <label
                      htmlFor="commercials"
                      className="text-sm font-medium leading-6 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Acepto la Política Comunicaciones Comerciales
                    </label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <a className="text-xs underline font-semibold mb-2" href="">
              Aplican Términos y Condiciones.
            </a>
            <Button
              size="lg"
              disabled={!form.formState.isValid}
              className={cn("h-14", styles.quoteForm__button)}
            >
              Cotiza aquí
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
