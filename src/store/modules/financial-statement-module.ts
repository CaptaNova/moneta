import { FinancialProduct } from "@/models/FinancialProduct";

type State = { accounts: FinancialProduct[] };

const state: State = {
  accounts: [],
};

const getters = {
  accountList: (state: State): FinancialProduct[] => state.accounts,
};

const actions = {
  loadAccounts({ commit }: any, accounts: FinancialProduct[]): void {
    commit("SET_ASSETS", accounts);
  },
  addAsset({ commit }: any, account: FinancialProduct): void {
    commit("ADD_ASSET", account);
  },
};

const mutations = {
  SET_ASSETS: (state: State, accounts: FinancialProduct[]): void => {
    state.accounts = accounts;
  },
  ADD_ASSET: (state: State, account: FinancialProduct): void => {
    state.accounts.unshift(account);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
