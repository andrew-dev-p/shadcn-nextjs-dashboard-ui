"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import { useTheme } from "next-themes";

const LightDarkToggle = ({ className }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  console.log("🚀 ~ LightDarkToggle ~ resolvedTheme:", resolvedTheme);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className={className}
          asChild
        >
          <Button variant="outline">
            <SunIcon className="block dark:hidden" />
            <MoonIcon className="hidden dark:block" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className="hidden dark:inline">Enable light mode</span>
          <span className="inline dark:hidden">Enable dark mode</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default LightDarkToggle;
