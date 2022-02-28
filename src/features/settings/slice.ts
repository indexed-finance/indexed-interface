import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SupportedLanguageCode, createTranslator } from "helpers/create-translator";
import { changedNetwork } from "../actions"
import { fetchInitialData } from "features/requests";
import type { AppState } from "features/store";

type Theme = "dark" | "light" | "outrun";

interface SettingsState {
  theme: Theme;
  connected: boolean;
  languageCode: SupportedLanguageCode;
  supportedLanguages: Array<{
    title: string;
    value: SupportedLanguageCode;
  }>;
  network: number;
  initializedNetworks: {
    [chainId: number]: number;
  };
  gasPrices: {
    [chainId: number]: number;
  }
}

const settingsInitialState: SettingsState = {
  theme: "dark",
  connected: false,
  languageCode: "en-us",
  supportedLanguages: [
    {
      title: "English",
      value: "en-us",
    },
    {
      title: "Spanish",
      value: "es-mx",
    },
    {
      title: "Chinese",
      value: "zh-cn",
    },
  ],
  network: 1,
  initializedNetworks: {},
  gasPrices: {}
};

const slice = createSlice({
  name: "settings",
  initialState: settingsInitialState,
  reducers: {
    languageChanged: (state, action: PayloadAction<SupportedLanguageCode>) => {
      state.languageCode = action.payload;
    },
    themeChanged: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    themeToggled: (state) => {
      const themeOrder = ["light", "dark", "outrun"] as Theme[];
      const currentIndex = themeOrder.findIndex(
        (value) => value === state.theme
      );

      let nextIndex = currentIndex + 1;

      if (!themeOrder[nextIndex]) {
        nextIndex = 0;
      }

      state.theme = themeOrder[nextIndex];
    },
    connectionEstablished: (state) => {
      state.connected = true;
    },
    connectionLost: (state) => {
      state.connected = false;
    },
    setGasPrice: (state, action: PayloadAction<{chainId: number; gasPrice: number;}>) => {
      const {chainId, gasPrice} = action.payload;
      if (!state.gasPrices) state.gasPrices = {};
      state.gasPrices[chainId] = gasPrice;
    }
  },
  extraReducers: (builder) =>
    builder
    .addCase(changedNetwork, (state, action) =>  {
      state.network = action.payload
    })
    .addCase(fetchInitialData.fulfilled, (state, action) => {
      const chainId = action.payload?.chainId;
      if (chainId) state.initializedNetworks[chainId] = +new Date();
    }),
});

export const { actions: settingsActions, reducer: settingsReducer } = slice;

export const settingsSelectors = {
  selectSettings(state: AppState) {
    return state.settings;
  },
  selectTheme(state: AppState) {
    return state.settings.theme;
  },
  selectConnected(state: AppState) {
    return state.settings.connected;
  },
  selectTranslator(state: AppState) {
    const { languageCode } = settingsSelectors.selectSettings(state);
    return createTranslator(languageCode);
  },
  selectLanguageName(state: AppState) {
    const tx = settingsSelectors.selectTranslator(state);
    const lookup = {
      "en-us": tx("ENGLISH"),
      "es-mx": tx("SPANISH"),
      "zh-cn": tx("CHINESE"),
    };

    return lookup[state.settings.languageCode] ?? "None";
  },
  selectSupportedLanguages(state: AppState) {
    return settingsSelectors.selectSettings(state).supportedLanguages;
  },
  selectNetwork(state: AppState) {
    const chainId = state.settings.network;
    if (chainId === undefined) return 1;
    return chainId;
  },
  selectGasPrice(state: AppState, chainId: number) {
    return state.settings.gasPrices[chainId];
  }
};
