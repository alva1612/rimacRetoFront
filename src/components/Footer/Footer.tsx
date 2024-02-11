import { Logo } from "../Logo";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 justify-center bg-blackRimac p-8 ">
      <Logo variant="white" />
      <Separator className="bg-[#2B304E]" />
      <span className="text-white mx-auto text-xs leading-5">
        © 2023 RIMAC Seguros y Reaseguros.
      </span>
    </footer>
  );
};
