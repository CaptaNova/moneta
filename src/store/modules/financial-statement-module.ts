import { FinancialProduct } from "@/models";
import { getAssetId } from "@/utils";
import { IRootState } from "../state";

const state: IRootState = {
  accounts: [],
  dirty: false,
};

const getters = {
  accountList: (state: IRootState): FinancialProduct[] => state.accounts,
};

const actions = {
  /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  addAsset({ commit }: any, account: FinancialProduct): void {
    commit("ADD_ASSET", account);
  },
  deleteAsset({ commit }: any, id: string): void {
    commit("DELETE_ASSET", id);
  },
  loadAccounts({ commit }: any, accounts: FinancialProduct[]): void {
    commit("SET_ASSETS", accounts);
  },
  resetDirty({ commit }: any): void {
    commit("RESET_DIRTY");
  },
  updateAsset(
    { commit }: any,
    payload: { id: string; asset: FinancialProduct }
  ): void {
    commit("UPDATE_ASSET", payload);
  },
  /* eslint-enable @typescript-eslint/no-explicit-any */
  /* eslint-enable @typescript-eslint/explicit-module-boundary-types */
};

const mutations = {
  ADD_ASSET: (state: IRootState, account: FinancialProduct): void => {
    state.accounts = [...state.accounts, account];
    state.dirty = true;
  },
  DELETE_ASSET: (state: IRootState, id: string): void => {
    state.accounts = state.accounts.filter(
      (asset: FinancialProduct) => getAssetId(asset.identifier) !== id
    );
    state.dirty = true;
  },
  RESET_DIRTY: (state: IRootState): void => {
    state.dirty = false;
  },
  SET_ASSETS: (state: IRootState, accounts: FinancialProduct[]): void => {
    state.accounts = accounts;
    state.dirty = false;
  },
  UPDATE_ASSET: (
    state: IRootState,
    payload: { id: string; asset: FinancialProduct }
  ): void => {
    state.accounts = [
      ...state.accounts.filter(
        (asset: FinancialProduct) => getAssetId(asset.identifier) !== payload.id
      ),
      payload.asset,
    ];
    state.dirty = true;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
