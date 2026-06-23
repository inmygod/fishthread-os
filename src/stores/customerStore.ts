import { create } from "zustand";
import { Customer } from "../types/Customer";

interface CustomerStore {
  customers: Customer[];

  addCustomer: (customer: Customer) => void;

  updateCustomer: (
    id: string,
    customer: Partial<Customer>
  ) => void;

  archiveCustomer: (id: string) => void;

  deleteCustomer: (id: string) => void;
}

export const useCustomerStore =
  create<CustomerStore>((set) => ({
    customers: [],

    addCustomer: (customer) =>
      set((state) => ({
        customers: [
          ...state.customers,
          customer,
        ],
      })),

    updateCustomer: (
      id,
      updatedCustomer
    ) =>
      set((state) => ({
        customers:
          state.customers.map((customer) =>
            customer.id === id
              ? {
                  ...customer,
                  ...updatedCustomer,
                }
              : customer
          ),
      })),

    archiveCustomer: (id) =>
      set((state) => ({
        customers:
          state.customers.map((customer) =>
            customer.id === id
              ? {
                  ...customer,
                  archived: true,
                }
              : customer
          ),
      })),

    deleteCustomer: (id) =>
      set((state) => ({
        customers:
          state.customers.map((customer) =>
            customer.id === id
              ? {
                  ...customer,
                  deleted: true,
                }
              : customer
          ),
      })),
  }));
