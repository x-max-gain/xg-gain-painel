import { IRoutes } from "@/interfaces/routes-interface";
import { Banknote, Box, DollarSign, Handshake, Home, Bot, MousePointerClick, Paperclip, PencilRuler, Settings, ShoppingBasket, ShoppingCart, User, Users, LogOut, User2 } from "lucide-react";

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
    icon: <LogOut size={24} />,
    name: "Sair",
    url: "/logout"
  },
 
]
