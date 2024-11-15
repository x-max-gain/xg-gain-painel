import { IRoutes } from "@/interfaces/routes-interface";
import { Banknote, Box, DollarSign, Handshake, Home, MousePointerClick, Paperclip, PencilRuler, Settings, ShoppingBasket, ShoppingCart, User, Users } from "lucide-react";

export const routes: IRoutes[] = [
  {
    icon: <Home size={24} />,
    name: "Página Incial",
    url: "/dashboard"
  }
]