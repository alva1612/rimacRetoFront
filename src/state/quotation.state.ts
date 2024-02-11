import { InputsQuoteForm } from "@/components/Forms/QuoteForm";
import {
  QuoteRequestRes,
  submitQuoteRequest,
} from "@/services/submitQuoteRequest";
import { Optional } from "@/types/props.common";
import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type UserData = InputsQuoteForm & QuoteRequestRes;

interface QuotationStore {
  userData: Optional<UserData>;
  startQuotation: (input: InputsQuoteForm) => Promise<boolean>;
}
const quotationStoreAPI: StateCreator<
  QuotationStore,
  [["zustand/devtools", never], ["zustand/immer", never]]
> = (set, get) => ({
  userData: null,
  startQuotation: async (input) => {
    const data = await submitQuoteRequest(input);
    if (!data) {
      return false;
    }
    set(
      (s) => {
        s.userData = { ...data, ...input };
        return s;
      },
      false,
      "startQuotation"
    );
    return true;
  },
});

export const useQuotationStore = create<QuotationStore>()(
  devtools(immer(quotationStoreAPI))
);
