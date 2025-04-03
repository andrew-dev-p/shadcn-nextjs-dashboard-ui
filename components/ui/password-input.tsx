import * as React from "react";

import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes } from "react";
import { Input } from "./input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const PasswordInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        type={visible ? "text" : "password"}
        className={cn("block w-full pr-12", className)}
        ref={ref}
      />
      <span
        onClick={() => setVisible(!visible)}
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer select-none"
      >
        {visible ? <EyeOffIcon /> : <EyeIcon />}
      </span>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
