"use client";

import Link from "next/link";
import { PlanType } from "./types";
import { useEffect, useState } from "react";
import { getAllPlans } from "@/services/modules/plans.module";
import PlansItem from "./item";

export default function Plans() {
  const [plans, setPlans] = useState<Array<PlanType>>([]);

  useEffect(() => {
    (async () => {
      setPlans(await getAllPlans());
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background-primary py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-center mb-8">
          ESCOLHA O PLANO IDEAL PARA O SEU PERFIL
        </h1>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Mensal
          </button>
          <button className="px-4 py-2 text-gray-500 rounded">Anual</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {plans.map((plan, index) => (
            <PlansItem plan={plan} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
