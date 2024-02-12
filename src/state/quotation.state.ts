import { InputsQuoteForm } from "@/components/Forms/QuoteForm";
import { getAge } from "@/lib/utils";
import { fetchPlans, PlanInfo } from "@/services/fetchPlans";
import {
  QuoteRequestRes,
  submitQuoteRequest,
} from "@/services/submitQuoteRequest";
import { Optional, Recipient } from "@/types/props.common";
import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type UserData = InputsQuoteForm & QuoteRequestRes;

type PlanData = {
  recipient: Optional<Recipient>;
  selectedPlan: Optional<PlanInfo>;
  selectRecipient: (r: Recipient) => void;
};

interface QuotationStore {
  userData: Optional<UserData>;
  currentStep: number;
  steps: string[];
  computed: {
    totalSteps: number;
    userAge: number;
    planPrice: number;
  };
  availablePlans: Optional<PlanInfo[]>;
  planData: PlanData;
  startQuotation: (input: InputsQuoteForm) => Promise<boolean>;
  fetchPlans: () => Promise<boolean>;
  selectPlan: (p: PlanInfo) => void;
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
  fetchPlans: async () => {
    const plansData = await fetchPlans();
    if (!plansData) {
      return false;
    }
    set((s) => {
      s.availablePlans = plansData.list;
      return s;
    });
    return true;
  },
  currentStep: 1,
  steps: ["Planes y coberturas", "Resumen"],
  computed: {
    get totalSteps() {
      return get()?.steps.length;
    },
    get userAge() {
      const date = get()?.userData?.birthDay;
      if (!date) return 0;
      return getAge(date);
    },

    get planPrice() {
      const defPrice = get()?.planData?.selectedPlan?.price;
      if (!defPrice) return 0;
      return get()?.planData?.recipient === "SOMEONE-ELSE"
        ? 0.95 * defPrice
        : defPrice;
    },
  },

  planData: {
    recipient: null,
    selectRecipient: (rec: Recipient) => {
      set((s) => {
        s.planData.recipient = rec;
        return s;
      });
    },
    selectedPlan: null,
  },
  availablePlans: null,
  selectPlan: (plan: PlanInfo) => {
    set((s) => {
      s.currentStep = 2;
      s.planData.selectedPlan = plan;
      return s;
    });
  },
});

export const useQuotationStore = create<QuotationStore>()(
  devtools(immer(quotationStoreAPI))
);
