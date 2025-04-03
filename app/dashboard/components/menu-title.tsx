import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function MenuTitle() {
  return (
    <Link href="/dashboard">
      <h4 className="flex items-center">
        <PersonStandingIcon size={40} className="text-primary" /> SupportMe
      </h4>
    </Link>
  );
}
