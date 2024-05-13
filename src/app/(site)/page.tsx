import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import TitleSection from "@/components/landing-page/TitleSection";
import { Button } from "@/components/ui/button";
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from "@/lib/contants";
import CustomCard from "@/components/landing-page/CustomCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";

import AppBanner from "../../../public/appBanner.png";
import Calender from "../../../public/cal.png";
import Diamond from "../../../public/icons/diamond.svg";
import CheckIcon from "..//../../public/icons/check.svg";

const HomePage = () => {
  return (
    <>
      <section
        className=" overflow-hidden
      px-4
      sm:px-6
      mt-10
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center"
      >
        <TitleSection
          pill="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div
          className="bg-white
          p-[2px]
          m-6
          rounded-xl
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          sm:w-[300px]
          z-10
        "
        >
          <Button
            variant="secondary"
            className=" w-full
            rounded-[10px]
            p-6
            text-xl
            bg-background
          "
          >
            Get Your Slate For Free
          </Button>
        </div>
        <div
          className="md:mt-[-90px]
          sm:w-full
          w-[750px]
          flex
          justify-center
          items-center
          mt-[-40px]
          relative
          sm:ml-0
          ml-[-50px]
        "
        >
          <Image src={AppBanner} alt="Application Banner" />
          <div
            className="bottom-0
            top-[50%]
            bg-gradient-to-t
            dark:from-background
            left-0
            right-0
            absolute
            z-10
          "
          ></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="
            overflow-hidden 
            flex 
            after:content[''] 
            after:dark:from-brand-dark 
            after:from-background 
            after:bg-gradient-to-l 
            after:right-0 
            after:bottom-0 
            after:top-0
            after:w-20 
            after:z-10
            after:absolute

            before:content[''] 
            before:dark:from-brand-dark 
            before:from-background 
            before:bg-gradient-to-r 
            before:left-0
            before:top-0
            before:bottom-0 
            before:w-20 
            before:z-10
            before:absolute
          "
        >
          {[...Array(2)].map((arr) => (
            <div key={arr} className="flex flex-nowrap animate-slide">
              {CLIENTS.map((client) => (
                <div
                  key={client?.alt}
                  className="
                    relative
                    sm:w-[200px]
                    xl:w-[300px]
                    2xl:w-[500px]
                    mx-10
                    my-20
                    shrink-0
                    flex
                    items-center"
                >
                  <Image
                    src={client?.logo}
                    alt={client?.alt}
                    width={120}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 sm:px-6 flex justify-center items-center flex-col relative">
        <div className="w-[30%] blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/50 -z-10 top-32" />
        <TitleSection
          title="Keep track of all the tasks in one place"
          subheading="Capture your ideas, thoughts, and notes in one place. Stay organized and boost your productivity."
          pill="Features"
        />
        <div className="mt-10 max-w-[450px] flex justify-center items-center relative sm:ml-0 rounded-2xl border-8 border-washed-purple-300 border-opacity-10">
          <Image src={Calender} alt="Feature image" className="rounded-2xl" />
        </div>
      </section>
      <section className="relative">
        <div className="w-full blur-[120px] rounded-full h-32 absolute bg-brand-primaryBlue/50 -z-10 top-56" />
        <div className="mt-20 px-4 sm:px-6 flex flex-col overflow-x-hidden overflow-visible">
          <TitleSection
            title="Trusted & Secure"
            subheading="Join our users who use our platform for their personal & professional productivity needs"
            pill="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={index}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": index === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                  "ml-[100vw]": index === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial?.name}
                  className="w-[500px] shrink-0 rounded-xl"
                  cardHeader={
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>
                          {testimonial?.name[0] + testimonial?.name[1]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial?.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial?.name.toLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial?.message}
                    </p>
                  }
                />
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 px-4 sm:px-6">
        <TitleSection
          title="The Perfect plan for you"
          subheading="Experience all benefits of our platform. Select a plan that suits your needs and take your productivity to a new high!"
          pill="Pricing"
        />
        <div
          className="
            flex
            flex-col-reverse
            sm:flex-row
            gap-4
            justify-center
            sm:items-stretch
            items-center
            mt-10
          "
        >
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card?.planType}
              className={clsx(
                "w-[300px] rounded-2xl dark:bg-black/40 background-blur-3xl relative",
                {
                  "border-brand-primaryPurple/70":
                    card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle className="text-2xl font-semibold">
                  {card?.planType === PRICING_PLANS.proplan && (
                    <>
                      <div
                        className="
                        hidden
                        dark:block
                        w-full
                        blur-[120px]
                        rounded-full
                        h-32
                        absolute
                        bg-brand-primaryPurple/80
                        -z-10
                        top-0
                      "
                      />
                      <Image
                        src={Diamond}
                        alt="Pro plan Icon"
                        className="absolute top-6 right-6 z-10"
                      />
                    </>
                  )}
                  {card?.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span className="font-medium text-2xl">${card?.price}</span>
                  {Number(card?.price) > 0 ? (
                    <span className="dark:text-washed-purple-800 ml-1">
                      /mo
                    </span>
                  ) : (
                    ""
                  )}
                  <p className="dark:text-washed-purple-800">
                    {card?.description}
                  </p>
                  <Button
                    variant={
                      card?.planType === PRICING_PLANS.freeplan
                        ? "outline"
                        : "default"
                    }
                    className="whitespace-nowrap mt-4"
                  >
                    {card?.planType === PRICING_PLANS.proplan
                      ? "Get Full Access"
                      : "Try for Free"}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul
                  className="
                  font-normal
                  flex
                  mb-2
                  flex-col
                  gap-4
                "
                >
                  <small>{card.highlightFeature}</small>
                  {card?.features?.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Image src={CheckIcon} alt="Feature list check icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            ></CustomCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
