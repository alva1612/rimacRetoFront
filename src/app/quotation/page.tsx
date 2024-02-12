"use client";
import { MobileProgressTracker } from "@/components/ProgressBar";
import {
  PlanCard,
  RecipientCard,
  RecipientCardProps,
  SummaryCard,
} from "@/components/RecipientCard";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useQuotationStore } from "@/state";
import { ClassNameProp, Recipient } from "@/types/props.common";
import React, { FC, PropsWithChildren, useEffect } from "react";

const Container: FC<PropsWithChildren<ClassNameProp>> = ({
  children,
  className,
}) => <div className={cn("px-6 py-4", className)}>{children}</div>;

const Recipients: RecipientCardProps[] = [
  {
    checked: false,
    value: "OWN",
    title: "Para mí",
    body: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
  },
  {
    checked: false,
    value: "SOMEONE-ELSE",
    title: "Para alguien más",
    body: "Realiza una cotización para uno de tus familiares o cualquier persona.",
  },
];

const Page: FC = () => {
  const userName = useQuotationStore((s) => s.userData?.name);
  const userAge = useQuotationStore((s) => s.computed.userAge);
  const selectedRecipient = useQuotationStore((s) => s.planData.recipient);
  const currentStep = useQuotationStore((s) => s.currentStep);

  const availablePlans = useQuotationStore((s) => s.availablePlans);
  const fetchPlans = useQuotationStore((s) => s.fetchPlans);

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <>
      <Container>
        <MobileProgressTracker />
      </Container>
      <Separator className="bg-[#D7DBF5]" />
      {currentStep === 1 && (
        <>
          <Container className="py-8">
            <h1 className="first-letter:uppercase text-[1.75rem]">
              {userName} ¿Para quién deseas cotizar?
            </h1>
            <h3 className="mt-2">
              Selecciona la opción que se ajuste más a tus necesidades.
            </h3>
            <div className="flex flex-col gap-8 py-8">
              {Recipients.map((data) => (
                <RecipientCard
                  key={data.value}
                  {...data}
                  checked={data.value === selectedRecipient}
                />
              ))}
            </div>
          </Container>
          {selectedRecipient &&
            availablePlans &&
            availablePlans.filter((plan) => userAge <= plan.age).length > 0 && (
              <>
                <Carousel setApi={setApi}>
                  <CarouselContent className="px-6 py-8">
                    {availablePlans.map((plan, i) => (
                      <CarouselItem key={i}>
                        <PlanCard {...plan} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex items-center justify-center gap-4 relative py-2 text-center text-sm text-muted-foreground">
                    <CarouselPrevious className="static translate-y-0" />
                    <span>
                      {current} / {count}
                    </span>
                    <CarouselNext className="static translate-y-0" />
                  </div>
                </Carousel>
              </>
            )}
        </>
      )}
      {currentStep === 2 && (
        <>
          <Container>
            <h1 className="text-[32px]">Resumen del seguro</h1>
            <SummaryCard />
          </Container>
        </>
      )}
    </>
  );
};

export default Page;
