import {
  Archive,
  Layout,
  Clipboard,
  User,
  SlidersHorizontal,
  CircleDollarSign,
} from "lucide-react";

export const sidebaritemDB = [
  { href: "/dashboard", icon: Layout, label: "Dashboard" },
  { href: "/inventory", icon: Archive, label: "Inventory" },
  { href: "/products", icon: Clipboard, label: "Products" },
  { href: "/users", icon: User, label: "Users" },
  { href: "/settings", icon: SlidersHorizontal, label: "Settings" },
  { href: "/expenses", icon: CircleDollarSign, label: "Expenses" },
];
