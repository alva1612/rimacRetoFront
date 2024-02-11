import { InputsQuoteForm } from "@/components/Forms/QuoteForm";
import { quoteClient } from "@/lib/api";
import { Optional } from "@/types/props.common";

export interface QuoteRequestRes {
  name: string;
  lastName: string;
  birthDay: string;
}

export const submitQuoteRequest = async (
  data: InputsQuoteForm
): Promise<Optional<QuoteRequestRes>> => {
  try {
    //Supongamos que se realiza alguna operacion con la data recibida por el formulario
    const res = await quoteClient.get<QuoteRequestRes>("user.json");
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
