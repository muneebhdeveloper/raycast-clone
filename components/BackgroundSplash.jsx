/* eslint-disable @next/next/no-img-element */

import React from "react";

export default function BackgroundSplash() {
  return (
    <div className="relative isoloate">
      <div
        style={{
          backgroundImage:
            "url(https://d1y491f86z4988.cloudfront.net/assets/store-splash-558ca6f6ae2e11f5e8069695fc3f6a6279d5941fecb772a251b06935f1a58733.jpg)",
        }}
        className="z-0 mt-[-80px] pt-[80px] lg:mt-[-72px] lg:pt-[72px] pb-[200px] mb-[-200px] overflow-x-hidden max-w-full bg-no-repeat bg-top bg-splash"
      >
        <img
          srcSet="https://d1y491f86z4988.cloudfront.net/assets/splash-apps@2x-993c98750b6bb30e0d1be1416526c220263a8983dd5afb22a4647f5d97891c13.png 2x"
          className="relative left-1/2 -translate-x-1/2 min-w-[470px] max-w-[100%] lg:mt-12"
          src="https://d1y491f86z4988.cloudfront.net/assets/splash-apps-f26c822c048fe92be12ee9e6e6c321ea633ed4d7f0fad080271b2777d38083c6.png"
          alt="splash"
        />
      </div>
    </div>
  );
}
