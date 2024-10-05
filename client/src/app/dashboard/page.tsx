"use client";

import CardPopularProducts from "./components/CardPopularProducts";
import CardPurchaseSummary from "./components/CardPurchaseSummary";
import CardSalesSummary from "./components/CardSalesSummary";
import CardExpenseSummary from "./components/CardExpenseSummary";
import StatCard from "./components/StatCard";

import { statCardData } from "./mock-data";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      {statCardData.map((item) => (
        <StatCard
          key={item.id}
          title={item.title}
          primaryIcon={item.primaryIcon}
          dateRange={item.dateRange}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Dashboard;
