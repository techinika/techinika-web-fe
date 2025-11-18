"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function UbunifuRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("https://ubunifu.techinika.co.rw/");
  }, []);
  return <div>Redirecting to Ubunifu Labs...</div>;
}

export default UbunifuRedirect;
