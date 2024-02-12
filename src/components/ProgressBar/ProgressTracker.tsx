"use client";

import { cn } from "@/lib/utils";
import { useQuotationStore } from "@/state";
import { FC, useMemo } from "react";

import styles from "./progressTracker.module.scss";

interface StepBubbleProps {
  order: number;
  title: string;
}
const StepBubble: FC<StepBubbleProps> = ({ order, title }) => {
  return (
    <div>
      <span>Paso</span>
    </div>
  );
};

const BackArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_5191_236)">
      <circle cx="12" cy="12" r="11" stroke="#A9AFD9" stroke-width="2" />
      <path
        d="M12.9715 15.9037L9.06396 11.9999L12.9715 8.09619L14.029 9.15369L11.1865 11.9999L14.029 14.8462L12.9715 15.9037Z"
        fill="#A9AFD9"
      />
    </g>
    <defs>
      <clipPath id="clip0_5191_236">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const MobileProgressTracker = () => {
  const totalSteps = useQuotationStore((s) => s.computed.totalSteps);
  const currentStep = useQuotationStore((s) => s.currentStep);
  const widthOfActiveBar = useMemo(
    () => ((currentStep - 1) / (totalSteps - 1)) * 100,
    [currentStep, totalSteps]
  );

  return (
    <div className="flex items-center gap-4">
      <BackArrowIcon />
      <span className="text-[10px] leading-[16px] font-black">
        PASO {currentStep} de {totalSteps}
      </span>
      <div
        className={cn(
          "relative flex-1 h-[6px] bg-[#D7DBF5] rounded-full",
          styles.progressTracker__bar
        )}
      >
        <div
          className={cn("rounded-full", styles.progressTracker__bar_active)}
          style={{ width: `${widthOfActiveBar}%` }}
        />
      </div>
    </div>
  );
};
