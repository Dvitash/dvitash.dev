import React from "react";
import { SiX, SiYoutube, SiGithub, SiKofi, SiWakatime } from "react-icons/si";
import { BiError } from "react-icons/bi";
import { NamedIcon } from "@/components/icon";

// import { Dervex, DervexBanner } from "../icons";
import Button from "@/components/button";

export interface HeaderButtonType {
  link?: string;
  text?: string;
  icon?: string | React.ReactNode;
  button?: React.ReactNode;
}

function iconButton(icon: string | React.ReactNode) {
  if (typeof icon === "string") {
    switch (icon) {
      case "x":
        return <SiX />;
      case "youtube":
        return <SiYoutube />;
      case "kofi":
        return <SiKofi />;
      case "github":
        return <SiGithub />;
      case "wakatime":
        return <SiWakatime />;
      default:
        return <BiError />;
    }
  } else {
    return icon;
  }
}

function textButton(text: string) {
  return <b>{text}</b>;
}

export default function HeaderButton({ className, button, callback, borders, compact, animateIn }: { className?: string; button: HeaderButtonType; callback?: () => undefined; borders: string; compact?: boolean; animateIn?: boolean }) {
  if (!className) {
    // Check if icon is the IoCaretBack component (React element)
    const isCaretBackIcon = button.icon && typeof button.icon !== "string" && React.isValidElement(button.icon) && (button.icon.type as any)?.name === "IoCaretBack";

    if (isCaretBackIcon) {
      // Force square aspect ratio for the back button
      className = "aspect-square w-[76px] text-3xl flex items-center justify-center";
    } else {
      className = button.icon ? (typeof button.icon === "string" && button.icon != "banner" ? `${compact ? "min-w-[74px]" : "min-w-[76px]"} min-h-[76px] text-3xl` : "w-full") : "w-full text-xl lg:text-2xl";
    }
  }

  const getLabel = () => {
    if (typeof button.icon === "string") {
      return button.icon;
    }
    return button.text || "button";
  };

  if (button.link) {
    const buttonClassName = animateIn ? `${className} transition-all duration-300 ease-out` : className;
    return (
      <Button className={buttonClassName} link={button.link} label={getLabel()} borders={borders} callback={callback}>
        {button.icon ? iconButton(button.icon) : textButton(button.text!)}
      </Button>
    );
  } else {
    return button.button;
  }
}
