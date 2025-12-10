"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ChristmasPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/christmas/1?score=0&startTime=${Date.now()}`);
  }, [router]);

  return null;
}
