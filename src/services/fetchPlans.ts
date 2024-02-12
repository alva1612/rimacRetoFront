import { quoteClient } from "@/lib/api";
import { Optional } from "@/types/props.common";

export interface FetchPlansRes {
  list: PlanInfo[];
}

export interface PlanInfo {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export const fetchPlans = async (): Promise<Optional<FetchPlansRes>> => {
  try {
    const res = await quoteClient.get("plans.json");
    return res.data;
  } catch (error) {
    return null;
  }
};
