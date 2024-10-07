import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DashboardMetricsTypes, Product } from "./types";

type UserTypes = {
  userId: string;
  name: string;
  email: string;
};

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE }),
  reducerPath: "api",
  tagTypes: ["DashboardMetrics", "Products", "Users"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetricsTypes, void>({
      query: () => "/dashboard",
      providesTags: ["DashboardMetrics"],
    }),
    getProducts: build.query<Product[], string | void>({
      query: (search) => ({
        url: "/products",
        params: search ? { search } : {},
      }),
      providesTags: ["Products"],
    }),
    createProducts: build.mutation<Product, Omit<Product, "productId">>({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),
    getUsers: build.query<UserTypes[], void>({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["Users"],
    }),
  }),
});

export const {
  useGetDashboardMetricsQuery,
  useGetProductsQuery,
  useCreateProductsMutation,
  useGetUsersQuery,
} = api;
