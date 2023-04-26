import { createStore } from "vuex";
import axios, { AxiosResponse, AxiosError } from "axios";
import createPersistedState from "vuex-persistedstate";
import { IMovie } from "@/types/movie";
export interface IToast {
  isActive: boolean;
  message: string;
  isSuccess?: boolean;
  isError?: boolean;
}
export interface IState {
  movies: IMovie[];
  movie: IMovie;
  toast: IToast;
}
export default createStore({
  state: <IState>(<unknown>{
    movies: [],
    movie: {},
    toast: {},
  }),
  getters: {
    getMovies: (state) => {
      return state.movies;
    },
    getMovie: (state) => {
      return state.movie;
    },
    toastState: (state) => {
      return state.toast;
    },
  },
  mutations: {
    SET_MOVIES(state: any, payload: any) {
      state.movies = payload["Search"];
    },
    SET_MOVIE(state: any, payload: any) {
      state.movie = payload;
    },
    SET_TOAST(state: any, payload: string) {
      state.toast = {
        isActive: payload.length > 0 ? true :false,
        message: payload,
        isError: payload.length > 0 ? true :false,
      };
      console.warn("MUTATION state.toast", state.toast);
    },
  },
  actions: {
    async fetchMovies({ commit }, page: number = 1) {
      await axios
        .get("http://www.omdbapi.com/", {
          params: {
            i: "tt3896198",
            s: "latest",
            page: page,
            apiKey: "d1a0c4a6",
          },
        })
        .then((response: AxiosResponse) => {
          if (response.data.hasOwnProperty("Error"))
            commit("SET_TOAST", response.data.Error);

          commit("SET_MOVIES", response.data);
        })
        .catch((error: AxiosError) => {
          commit("SET_TOAST", error);
        });
    },
    async searchMovie({ commit }, title) {
      await axios
        .get("http://www.omdbapi.com/", {
          params: {
            s: title,
            page: 1,
            apiKey: "d1a0c4a6",
          },
        })
        .then((response: AxiosResponse) => {
          if (response.data.hasOwnProperty("Error"))
            commit("SET_TOAST", response.data.Error);

          commit("SET_MOVIES", response.data);
        })
        .catch((error: AxiosError) => {
          commit("SET_TOAST", error);
        });
    },
    async searchMovieByTitle({ commit }, title) {
      await axios
        .get("http://www.omdbapi.com/", {
          params: {
            t: title,
            apiKey: "d1a0c4a6",
          },
        })
        .then((response: AxiosResponse) => {
          if (response.data.hasOwnProperty("Error"))
            commit("SET_TOAST", response.data.Error);

          commit("SET_MOVIE", response.data);
        })
        .catch((error: AxiosError) => {
          commit("SET_TOAST", error);
        });
    },
  },
  modules: {},
  // plugins: [createPersistedState()],
});
