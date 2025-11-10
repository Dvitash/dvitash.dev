"use client";

import { useState, useEffect } from "react";
import { useCollapse } from "react-collapsed";

import { clamp, countKeys } from "@/lib/utils";
import { fetchContributions, ContributionData } from "@/lib/github";

import HeaderButton, { HeaderButtonType } from "@/components/headerbutton";
import Container from "@/components/container";
import Button from "@/components/button";
import ContributionSquare from "@/components/contribution-square";

const HEADER_BUTTONS: Array<HeaderButtonType> = [
  {
    link: "/",
    icon: "logo",
  },
  {
    link: "about",
    text: "ABOUT",
  },
  {
    link: "projects",
    text: "PROJECTS",
  },
  {
    link: "contact",
    text: "CONTACT",
  },
  {
    link: "https://github.com/Dvitash",
    icon: "github",
  },
];
const TEXT_BUTTONS = countKeys(HEADER_BUTTONS, "text");

export default function Header() {
  const [buttonCount, setButtonCount] = useState(HEADER_BUTTONS.length);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mobileContributions, setMobileContributions] = useState<ContributionData[]>([]);
  const { getCollapseProps } = useCollapse({ isExpanded });

  function header() {
    let buttons = HEADER_BUTTONS;

    if (buttonCount != HEADER_BUTTONS.length) {
      buttons = HEADER_BUTTONS.slice(0, buttonCount - 1);

      buttons.push({
        button: (
          <Button
            className="min-w-[76px] border-l-2 flex-col"
            borders="l"
            callback={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <span className={`bg-[var(--text-primary)] group-hover:bg-[var(--bg-primary)] block duration-200 transition-transform ease-out w-[25px] h-[2px] ${isExpanded ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`} />
            <span className={`bg-[var(--text-primary)] group-hover:bg-[var(--bg-primary)] block duration-100 transition-opacity ease-out w-[25px] h-[2px] my-0.5 ${isExpanded ? "opacity-0" : "opacity-100"}`} />
            <span className={`bg-[var(--text-primary)] group-hover:bg-[var(--bg-primary)] block duration-200 transition-transform ease-out w-[25px] h-[2px] ${isExpanded ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`} />
          </Button>
        ),
      });
    } else if (isExpanded) {
      setIsExpanded(false);
    }

    if (buttonCount == 2) {
      buttons[0].icon = "banner";
    } else {
      buttons[0].icon = "logo";
    }

    return (
      <Container className="relative w-full h-[80px] z-20 flex flex-row">
        {buttons.map((button, index) => {
          return (
            <HeaderButton
              key={index}
              button={button}
              borders={index == 0 ? "" : "l"}
              callback={() => {
                setIsExpanded(false);
              }}
            />
          );
        })}
      </Container>
    );
  }

  function menu() {
    let buttons: Array<HeaderButtonType> = [];
    let iconButtons: Array<HeaderButtonType> = [];
    let textButtons: Array<HeaderButtonType> = [];

    if (buttonCount != HEADER_BUTTONS.length) {
      buttons = HEADER_BUTTONS.slice(buttonCount - 1, HEADER_BUTTONS.length);

      if (buttons.length == HEADER_BUTTONS.length - 1) {
        textButtons = buttons.slice(0, TEXT_BUTTONS);
        iconButtons = buttons.slice(TEXT_BUTTONS, buttons.length);
      }
    }

    if (buttons.length == 0) {
      return;
    } else if (textButtons.length == 0) {
      return (
        <Container className="absolute right-0 z-10 w-[78px] duration-300" borders="lrb" style={{ marginTop: isExpanded ? 0 : -2 }}>
          <div {...getCollapseProps()}>
            {buttons.map((button, index) => {
              return <HeaderButton key={index} button={button} borders={index == 0 ? "" : "t"} compact={true} />;
            })}
          </div>
        </Container>
      );
    } else {
      return (
        <Container className="absolute z-10 w-full duration-300" borders="lrb" style={{ marginTop: isExpanded ? 0 : -2 }}>
          <div {...getCollapseProps()}>
            <div className="flex flex-row">
              <div className="w-[calc(100%-76px)] flex flex-col">
                {textButtons.map((button, index) => {
                  return (
                    <HeaderButton
                      key={index}
                      className="h-[76px] text-2xl"
                      button={button}
                      borders={"b"}
                      callback={() => {
                        setIsExpanded(false);
                      }}
                    />
                  );
                })}

                <div className="mobileGithubContributions w-[calc(100%+76px)] h-[76px] grid grid-rows-5 grid-flow-col content-start overflow-hidden bg-[var(--bg-primary)]">
                  {mobileContributions.map((contribution, index) => {
                    return <ContributionSquare key={index} contribution={contribution} />;
                  })}
                </div>
              </div>

              <div className="w-[76px]">
                {iconButtons.map((button, index) => {
                  return <HeaderButton key={index} button={button} borders={"lb"} />;
                })}
              </div>
            </div>
          </div>
        </Container>
      );
    }
  }

  useEffect(() => {
    function updateHeaderSize() {
      if (window.innerWidth > 768) {
        if (window.innerWidth >= 1280) {
          setButtonCount(HEADER_BUTTONS.length);
        } else {
          setButtonCount(clamp(Math.floor(window.innerWidth / 100) - 1, TEXT_BUTTONS + 2, HEADER_BUTTONS.length));
        }
      } else {
        setButtonCount(2);
      }
    }

    updateHeaderSize();
    window.addEventListener("resize", () => updateHeaderSize());

    return () => {
      window.removeEventListener("resize", () => updateHeaderSize());
    };
  }, []);

  useEffect(() => {
    async function loadContributions() {
      const contributions = await fetchContributions(true);
      setMobileContributions(contributions);
    }
    loadContributions();
  }, []);

  if (typeof window !== "undefined") {
    console.clear();
  }

  return (
    <header>
      {header()}
      {menu()}
    </header>
  );
}
