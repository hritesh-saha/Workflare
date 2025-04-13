import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { Link } from "react-router-dom";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Discover Your Next Big Opportunity
          <span
            className="mt-10 font-serif"
            style={{
              color: "#007bff",
              fontWeight: "bold",
            }}
          >
            Land the Job You Deserve!
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job openings and find the perfect fit for your
          skills and experience.
        </p>
      </section>

      <div className="flex gap-6 justify-center">
        {/* buttons */}
        <Link to="/jobs">
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>

      {/* carousel */}
      <Carousel
        className="w-full py-10 transition-all duration-700 ease-in-out"
        options={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnInteraction: false,
            stopOnMouseEnter: false,
          }),
        ]}
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => {
            return (
              <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                <img
                  src={path}
                  alt={name}
                  className="h-9 sm:h-14 object-contain"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      {/* banner */}
      <img src="/jobPortalBanner.webp" alt="Banner" className="w-full h-[70vh]" />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-6">
        {/* cards */}
        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-3xl">For job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs, track applications, and more.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-bold text-3xl">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post jobs, manage applications, and find the best candidates.</p>
          </CardContent>
        </Card>
      </section>

      {/* Accordian */}
      <Accordion className="mx-6" type="single" collapsible>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </main>
  );
};

export default LandingPage;
