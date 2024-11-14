import { IRoutes } from "@/interfaces/routes-interface";
import { Banknote, Box, DollarSign, Handshake, Home, MousePointerClick, Paperclip, PencilRuler, Settings, ShoppingBasket, ShoppingCart, User, Users } from "lucide-react";

export const routes: IRoutes[] = [
  {
    icon: <Home size={24} />,
    name: "Página Incial",
    url: "/dashboard"
  },
  {
    icon: <Banknote size={24} />,
    name: "Minhas vendas",
    url: "/dashboard/my-sales"
  },
  {
    icon: <Box size={24} />,
    name: "Produtos",
    url: "/dashboard/products"
  },
  {
    icon: <ShoppingCart size={24} />,
    name: "Recuperação",
    url: "/dashboard/abandoned-cart"
  },
  {
    icon: <MousePointerClick size={24} />,
    name: "Upsell 1 Click",
    url: "/dashboard/upsell-funnels"
  },
  {
    icon: <PencilRuler size={24} />,
    name: "Checkout Builder",
    url: "/dashboard/checkout-builder"
  },
  {
    icon: <Users size={24} />,
    name: "Minhas Afliações",
    url: "/dashboard/my-affiliates"
  },
  {
    icon: <User size={24} />,
    name: "Meus Afliados",
    url: "/dashboard/affiliates"
  },
  {
    icon: <ShoppingBasket size={24} />,
    name: "Marketplace",
    url: "/dashboard/marketplace"
  },
  {
    icon: <DollarSign size={24} />,
    name: "Financeiro",
    url: "/dashboard/financial"
  },
  {
    icon: <Handshake size={24} />,
    name: "Reembolsos",
    url: "/dashboard/refunds"
  },
  {
    icon: <Paperclip size={24} />,
    name: "Relátorios",
    url: "/dashboard/reports"
  },
  {
    icon: <Settings size={24} />,
    name: "Integrações",
    url: "/dashboard/integrations"
  },

]