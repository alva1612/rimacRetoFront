import { cn } from "@/lib/utils";
import { PlanInfo } from "@/services/fetchPlans";
import { useQuotationStore } from "@/state";
import { Recipient } from "@/types/props.common";
import { FC, MouseEventHandler } from "react";
import { RecipientIcon } from "../Icons";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

import styles from "./recipientCard.module.scss";

export interface RecipientCardProps {
  value: Recipient;
  checked: boolean;
  title: string;
  body: string;
}

const CustomCheckbox: FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 12C0.5 5.67614 5.67614 0.5 12 0.5C18.3239 0.5 23.5 5.67614 23.5 12C23.5 18.3239 18.3239 23.5 12 23.5C5.67614 23.5 0.5 18.3239 0.5 12Z"
      stroke="#C5CBE0"
      stroke-linecap="square"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.6 0 12 0Z"
      fill="#389E0D"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.1811 7.11293C17.5605 7.434 17.6078 8.00188 17.2868 8.38133L10.6868 16.1813C10.5213 16.3769 10.2803 16.4927 10.0243 16.4996C9.7682 16.5066 9.52129 16.4042 9.3454 16.2179L5.9454 12.6179C5.60411 12.2566 5.62038 11.687 5.98175 11.3457C6.34311 11.0044 6.91273 11.0207 7.25402 11.382L9.96287 14.2502L15.9127 7.21863C16.2337 6.83919 16.8016 6.79187 17.1811 7.11293Z"
      fill="white"
    />
  </svg>
);

export const RecipientCard: FC<RecipientCardProps> = ({
  body,
  checked,
  title,
  value,
}) => {
  const selectRecipient = useQuotationStore((s) => s.planData.selectRecipient);

  const handleClickCheckbox: MouseEventHandler = () => selectRecipient(value);

  return (
    <div
      className={cn(
        "py-10 px-6 rounded-3xl flex flex-col gap-2 relative",
        styles.card
      )}
    >
      <div
        className={cn(
          "absolute rounded-full w-6 h-6 top-4 right-6 border-solid",
          styles.card__checkContainer
        )}
        onClick={handleClickCheckbox}
      >
        {checked && <CustomCheckbox />}
      </div>
      <div className="flex items-center gap-2">
        <RecipientIcon type={value} className="w-8 h-8" />
        <span className="text-[20px] font-black">{title}</span>
      </div>
      <p className="text-xs">{body}</p>
    </div>
  );
};

const PlanIcon = () => {
  return <></>;
};
export const PlanCard: FC<PlanInfo> = (data) => {
  const { age, description, name, price } = data;
  const selectPlan = useQuotationStore((s) => s.selectPlan);
  const handleClickSelect: MouseEventHandler = () => {
    selectPlan(data);
  };
  return (
    <div className={cn("pt-10 pb-[50px] px-8", styles.card)}>
      <div className={cn("flex", styles.card__planCardHeader)}>
        <div className="flex flex-col">
          <h2 className="text-[28px] font-black">{name}</h2>
          <span className="text-[#7981B2] text-xs">COSTO DEL PLAN</span>
          <span className="text-blackRimac">${price} al mes</span>
        </div>
        <PlanIcon />
      </div>
      <Separator className="bg-[#D7DBF5]" />
      <ul className="list-disc">
        {description.map((desc) => (
          <li>{desc}</li>
        ))}
      </ul>

      <Button onClick={handleClickSelect}>Seleccionar Plan</Button>
    </div>
  );
};

export const SummaryCard: FC = () => {
  const firstName = useQuotationStore((s) => s.userData?.name);
  const lastName = useQuotationStore((s) => s.userData?.lastName);

  const docType = useQuotationStore((s) => s.userData?.documentType);
  const docNum = useQuotationStore((s) => s.userData?.documentNumber);
  const phone = useQuotationStore((s) => s.userData?.phoneNumber);
  const planInfo = useQuotationStore((s) => s.planData.selectedPlan);
  const planPrice = useQuotationStore((s) => s.computed.planPrice);

  return (
    <div className={cn("py-6 px-8", styles.card)}>
      <p>Precios calculados para:</p>
      <h2 className="font-bold text-[20px]">{`${firstName} ${lastName}`}</h2>
      <Separator className="bg-[#D7DBF5]" />

      <strong>Responsable de pago</strong>
      <p>
        {docType}: {docNum}
      </p>
      <p>Celular: {phone}</p>
      <strong>Plan elegido</strong>
      <p> {planInfo?.name}</p>
      <p>Costo del Plan: ${planPrice.toFixed(2)} al mes</p>
    </div>
  );
};
