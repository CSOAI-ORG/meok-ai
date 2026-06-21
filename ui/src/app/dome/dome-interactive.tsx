"use client";

import dynamic from "next/dynamic";

export const DomeWorldMap = dynamic(() => import("./dome-world-map"), { ssr: false });
export const DomeLiveFeed = dynamic(() => import("./dome-live-feed"), { ssr: false });
