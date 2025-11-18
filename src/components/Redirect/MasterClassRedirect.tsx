"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function MasterClassRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("https://masterclass.sinc.events/");
  }, []);
  return <div>Redirecting to Masterclass...</div>;
}

export default MasterClassRedirect;
