import { create } from "zustand";

const useStore = create((set) => ({
  usersData: JSON.parse(localStorage.getItem("user")) || [],

  addUser: (payload) =>
    set((state) => {
      const createLocal = [...state.usersData, payload];
      localStorage.setItem("user", JSON.stringify(createLocal));
      return { usersData: createLocal };
    }),
  removeUser: (id) =>
    set((state) => {
      const removeLocal = state.usersData.filter((el) => el.id !== id);
      localStorage.setItem("user", JSON.stringify(removeLocal));
      return { usersData: removeLocal };
    }),
  editUser: (id, payload) =>
    set((state) => {
      const editLocal = state.usersData.map((el) =>
        el.id === id ? { ...el, ...payload } : el
      );
      localStorage.setItem("user", JSON.stringify(editLocal));
      return { usersData: editLocal };
    }),
}));

export default useStore;
