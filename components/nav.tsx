"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Dashboard" },
  { href: "/reports", label: "Reports" },
  { href: "/input", label: "Input" },
  { href: "/help", label: "Help" },
];

export function Nav() {
  console.log("Nav component rendering");
  console.log("Navigation items:", navItems);
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 p-4 pb-8 bg-gray-100">
      <Image
        src="/companyLogo.png"
        alt="Company Logo"
        width={100}
        height={32}
      />
      {navItems.map((item) => (
        <div key={item.href} className="relative">
          <Link
            href={item.href}
            className={cn(
              "px-3 py-2 rounded-md text-sm font-medium",
              pathname === item.href
                ? "text-red-700"
                : "text-gray-700 hover:text-red-700"
            )}
          >
            {item.label}
          </Link>
          {(pathname === item.href || pathname === item.href + "/") && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-700"></div>
          )}
        </div>
      ))}
    </nav>
  );
}
