"use client";

import React, { useEffect, useState } from "react";
import { bioData } from "@/data/bioData";
import Image from "next/image";

export default function AboutOne() {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <div className="col-xxl-8 col-xl-9">
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">about</h2>
            <p>{bioData.descOne}</p>
            <p>{bioData.descTwo}</p>
          </div>
        </div>

        <div className="footer-copyright text-center pt-25 pb-25">
          <span>
            © {new Date().getFullYear()} All Rights Reserved by elite-themes24.
          </span>
        </div>
      </div>
    </div>
  );
}
