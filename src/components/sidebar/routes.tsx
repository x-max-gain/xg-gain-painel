import { IRoutes } from "@/interfaces/routes-interface";
import { Banknote, Box, DollarSign, Handshake, Home, Bot, MousePointerClick, Paperclip, PencilRuler, Settings, ShoppingBasket, ShoppingCart, User, Users, LogOut } from "lucide-react";

export const routes: IRoutes[] = [
  {
    icon: <Home size={24} />,
    name: "Página Incial",
    url: "/painel"
  },
  {
    icon: <Bot size={24} />,
    name: "Bot",
    url: "/bot"
  },
  {
    icon: <DollarSign size={24} />,
    name: "Financeiro",
    url: "/finance"
  },
  {
    icon: <LogOut size={24} />,
    name: "Sair",
    url: "/logout"
  },
 
]