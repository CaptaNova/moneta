import { FinancialProduct } from "@/models/FinancialProduct";
import { getAssetId } from "@/modules/financialStatement";
import { IRootState } from "../state";

const state: IRootState = {
  accounts: [],
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
  loadAccounts({ commit }: any, accounts: FinancialProduct[]): void {
    commit("SET_ASSETS", accounts);
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
  },
  SET_ASSETS: (state: IRootState, accounts: FinancialProduct[]): void => {
    state.accounts = accounts;
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
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
