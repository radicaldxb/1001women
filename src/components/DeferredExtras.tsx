"use client";

import dynamic from "next/dynamic";

const Analytics = dynamic(() =>
  import("@/components/Analytics").then((mod) => mod.Analytics),
);
const ChatWidget = dynamic(() =>
  import("@/components/ChatWidget").then((mod) => mod.ChatWidget),
);

export function DeferredExtras() {
  return (
    <>
      <Analytics />
      <ChatWidget />
    </>
  );
}
