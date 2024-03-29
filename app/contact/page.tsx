import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default async function ContactPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Contact
          </h2>
          <p className="mt-4 text-zinc-400">
          A cat is an adorable violation of the laws of physics.
          </p>
          <p className="text-zinc-400 italic text-sm">Terri Guillemets</p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid place-content-center">
        <Card>
            <div className="flex items-center justify-between">
              <div className="text-xs text-zinc-100">
                <div style={{width: '100%', height: '100%', position: 'relative'}}>
                  contact info
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
