"use client";

import dynamic from "next/dynamic";

export const TownMap = dynamic(() => import("./town-map"), { ssr: false });
export const TownScoreboard = dynamic(() => import("./town-scoreboard"), { ssr: false });
