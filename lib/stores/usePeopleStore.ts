import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchPeople } from "../utils/api";

const CACHE_KEY = "STAR_WARS_PEOPLE";

interface PeopleStore {
  people: any[];
  loading: boolean;
  error: string | null;

  getPeople: () => Promise<void>;
}

export const usePeopleStore = create<PeopleStore>((set) => ({
  people: [],
  loading: false,
  error: null,

  getPeople: async () => {
    set({
      loading: true,
      error: null,
    });

    try {
      const data = await fetchPeople();

      set({
        people: data,
        loading: false,
      });

      await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch (error) {
      const cache = await AsyncStorage.getItem(CACHE_KEY);

      if (cache) {
        set({
          people: JSON.parse(cache),
          loading: false,
          error: null,
        });
      } else {
        set({
          loading: false,
          error: "Failed to fetch data.",
        });
      }
    } finally {
      set({ loading: false });
    }
  },
}));
