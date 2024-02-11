import { z } from "zod";

export const FORM_ERROR_MESSAGE = {
  required: "Obligatorio",
};

export const quoteFormSchema = z.discriminatedUnion("documentType", [
  z.object({
    documentType: z.literal("DNI"),
    documentNumber: z
      .string({ required_error: FORM_ERROR_MESSAGE.required })
      .min(8, { message: "Su documento debe tener 8 dígitos" })
      .max(8, { message: "Su documento debe tener 8 dígitos" }),
    phoneNumber: z
      .string({ required_error: FORM_ERROR_MESSAGE.required })
      .min(9, { message: "Su celular debe tener 9 dígitos" })
      .max(9, { message: "Su celular debe tener 9 dígitos" }),
    privacy: z.literal(true, {
      errorMap: () => ({ message: FORM_ERROR_MESSAGE.required }),
    }),
    commercials: z
      .boolean({ required_error: FORM_ERROR_MESSAGE.required })
      .or(z.literal(undefined)),
  }),
  z.object({
    documentType: z.literal("CE"),
    documentNumber: z
      .string({ required_error: FORM_ERROR_MESSAGE.required })
      .min(6, { message: "Su documento debe tener mínimo 6 dígitos" })
      .max(12, { message: "Su documento debe tener máximo 8 dígitos" }),
    phoneNumber: z.string().min(9).max(9),
    privacy: z.literal(true, {
      errorMap: () => ({ message: FORM_ERROR_MESSAGE.required }),
    }),
    commercials: z
      .boolean({ required_error: FORM_ERROR_MESSAGE.required })
      .or(z.literal(undefined)),
  }),
]);
