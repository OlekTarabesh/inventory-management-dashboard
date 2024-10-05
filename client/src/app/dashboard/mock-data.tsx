import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

export const statCardData = [
  {
    id: 1,
    title: "Customer & Expenses",
    primaryIcon: <Package className="text-blue-600 w-6 h-6" />,
    dateRange: "22 - 29 October 2024",
    details: [
      {
        title: "Customer Growth",
        amount: "175.00",
        changePercentage: 131,
        IconComponent: TrendingUp,
      },
      {
        title: "Expenses",
        amount: "10.00",
        changePercentage: -56,
        IconComponent: TrendingDown,
      },
    ],
  },
  {
    id: 2,
    title: "Dues & Pending Orders",
    primaryIcon: <CheckCircle className="text-blue-600 w-6 h-6" />,
    dateRange: "22 - 29 October 2024",
    details: [
      {
        title: "Dues",
        amount: "250.00",
        changePercentage: 131,
        IconComponent: TrendingUp,
      },
      {
        title: "Pending Orders",
        amount: "147",
        changePercentage: -56,
        IconComponent: TrendingDown,
      },
    ],
  },
  {
    id: 3,
    title: "Sales & Discount",
    primaryIcon: <Tag className="text-blue-600 w-6 h-6" />,
    dateRange: "22 - 29 October 2024",
    details: [
      {
        title: "Sales",
        amount: "1000.00",
        changePercentage: 20,
        IconComponent: TrendingUp,
      },
      {
        title: "Discount",
        amount: "200.00",
        changePercentage: -10,
        IconComponent: TrendingDown,
      },
    ],
  },
];
