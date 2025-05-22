import Container from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import Section from "@/components/ui/section";
import React from "react";

const Hero = () => {
  return (
    <div className="pb-[100vh]">
      <Section
        asChild
        variant="disabled"
        className="flex flex-col justify-center items-center gap-6 text-center min-h-screen absolute top-0 inset-x-0 -z-10"
        id="hero"
      >
        <Container>
          <Heading
            tag="h1"
            variant={"heading1"}
            className="text-primary-400 backdrop-blur-xl bg-primary-500/20 rounded-sm p-3"
          >
            Frontend developer
          </Heading>
          <p className="max-w-xl md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis, velit ut luctus
          </p>
        </Container>
      </Section>
    </div>
  );
};

export default Hero;
