import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Generative AI made for creators."
          text="Brainwave unlocks the potential AI-powered application"
        />
        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div absolute="absolute top-0 left-0  w-full h-full pointer-event-none md:w-3/5 xl:w-auto">
              <img
                className="object-cover w-full h-full md:object-right"
                wight={800}
                height={730}
                src={service1}
                alt="Smartest AI"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="mb-4 h4"> Smartest AI</h4>
              <p className="body-2 mb-[rem] text-n-3">
                {" "}
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">{brainwaveServices.map((item,index)=>(
                <li key= {index}
                className ="flex items-start py-4 border-t border-n-6">
                    <img
                        src = {check} width={24} height={24}/>
                        <p className = "ml-4">{item}</p>
                </li>
              ))}</ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
