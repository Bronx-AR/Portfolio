import AboutTwo from "@/components/homes/about/AboutTwo";
import HeaderTwo from "@/components/homes/headers/HeaderTwo";
import React from "react";

export const metadata = {
  title: "About",
  description:
    "A multidisciplinary developer based in Toulouse, focus on web design.",
};
export default function page() {
  return (
    <>
      <div className="page-wrapper page-wrapper-2">
        <HeaderTwo />
        <div className="bostami-page-area z-index-3">
          <div className="container">
            <AboutTwo />
          </div>
        </div>
      </div>
    </>
  );
}
