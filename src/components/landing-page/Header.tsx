"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Logo from "../../../public/appLogo.svg";
import { cn } from "@/lib/utils";
import { components } from "./constants";
import { Button } from "../ui/button";

const Header = () => {
  const [path, setPath] = useState<string>("#products");
  return (
    <header className="p-4 mx-6 flex justify-center items-center">
      <Link href="/" className="w-full flex gap-2 justify-left items-center">
        <Image src={Logo} alt="Application logo" width={25} height={25} />
        <span className="font-semibold dark:text-white">Slate.io</span>
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath("#resources")}
              className={cn({
                "dark:text-white": path === "#resources",
                "dark:text-white/40": path !== "#resources",
                "font-normal": true,
                "text-xl": true,
              })}
            >
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <span className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    Welcome
                  </span>
                </li>
                <ListItem href="#" title="Introduction">
                  Re-usable components built using Radix UI & Tailwind CSS
                </ListItem>
                <ListItem href="#" title="Installation">
                  How to install dependecies and structure your project
                </ListItem>
                <ListItem href="#" title="Typography">
                  Styles for headings, paragraphs, lists and more...
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => setPath("#pricing")}
              className={cn({
                "dark:text-white": path === "#pricing",
                "dark:text-white/40": path !== "#pricing",
                "font-normal": true,
                "text-xl": true,
              })}
            >
              Pricing
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] md:grid-row-2">
                  <ListItem title="Pro Plan" href="#">
                    Unlock full power with collaboration.
                  </ListItem>
                  <ListItem title="Free Plan" href="#">
                    Great for individuals and small teams starting out.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component?.title}
                    title={component?.title}
                    href={component?.href}
                  >
                    {component?.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {/* <Link href="#"> */}
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), {
                "dark:text-white": path === "#testimonials",
                "dark:text-white/40": path !== "#testimonials",
                "font-normal": true,
                "text-xl": true,
              })}
              onClick={() => setPath("#testimonials")}
            >
              Testimonials
            </NavigationMenuLink>
            {/* </Link> */}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <aside className="flex w-full gap-4 justify-end">
        <Link href="/login">
          <Button variant="btn-secondary" className="p-1 hidden sm:block">
            Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button variant="btn-primary" className="whitespace-nowrap">
            Sign Up
          </Button>
        </Link>
      </aside>
    </header>
  );
};

export default Header;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group block select-none space-y-1 font-mediym leading-none cursor-pointer hover:bg-black/20"
          )}
        >
          <div className="text-white text-sm font-medium leading-none group-hover:text-primary-purple-300">
            {title}
          </div>
          <p className="group-hover:text-white/80 line-clamp-2 text-sm leading-snug text-white/40">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
