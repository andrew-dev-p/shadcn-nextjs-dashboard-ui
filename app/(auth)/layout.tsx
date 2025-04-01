import LightDarkToggle from "@/components/ui/light-dark-toggle";
import React from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-4 p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed right-2 top-1/2 -translate-y-1/2" />
    </>
  );
};

export default AuthLayout;
