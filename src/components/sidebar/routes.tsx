import { IRoutes } from "@/interfaces/routes-interface";
import {  DollarSign,  Home, Bot, LogOut, User2, HeadphonesIcon, HelpCircle,  BaggageClaim } from "lucide-react";

export const routes: IRoutes[] = [
  {
    icon: <Home size={24} />,
    name: "Página Incial",
    url: "/painel"
  },
  {
    icon: <Bot size={24} />,
    name: "Bot",
    url: "/painel/bot"
  },
  {
    icon: <DollarSign size={24} />,
    name: "Financeiro",
    url: "/painel/finance"
  },
  {
    icon: <User2 size={24} />,
    name: "Conta",
    url: "/painel/account/22"
  },
  {
    icon: <BaggageClaim size={24} />,
    name: "Planos",
    url: "/painel/plans"
  },
  {
    icon: <HelpCircle size={24} />,
    name: "Ajuda",
    url: "/painel/help"
  },
  {
    icon: <LogOut size={24} />,
    name: "Sair",
    url: "/logout"
  },
 
]
