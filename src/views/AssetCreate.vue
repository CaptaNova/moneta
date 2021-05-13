<template>
  <h3>Neue Anlage</h3>
  <div class="container">
    <form autocomplete="off" @submit.prevent="onFormSubmit">
      <fieldset>
        <!-- name -->
        <label for="nameField">Bezeichnung</label>
        <input
          type="text"
          id="nameField"
          placeholder="z. B. Meine eiserne Reserve"
          required
          v-model.trim="asset.name"
        />
        <!-- type -->
        <label for="typeField">Art</label>
        <select id="typeField" required v-model="asset.type">
          <option disabled value="">Bitte auswählen</option>
          <option
            v-for="assetType of assetTypes"
            :key="assetType.value"
            :value="assetType.value"
          >
            {{ assetType.label }}
          </option>
        </select>
        <!-- financial institution -->
        <label for="providerField">Kreditinstitut <em>(optional)</em></label>
        <input
          type="text"
          id="providerField"
          placeholder="z. B. Deutsche Bank"
          v-model.trim="asset.provider"
        />
        <!-- account number -->
        <label for="accountNumberField"
          >Kontonummer (IBAN, ISIN, Vertragsnummer)</label
        >
        <input
          type="text"
          id="accountNumberField"
          placeholder="z. B. DE07123412341234123412"
          required
          v-model.trim="asset.accountNumber"
        />
        <!-- amount -->
        <label for="amountField">Betrag</label>
        <input
          type="number"
          id="amountField"
          placeholder="z. B. 2300"
          required
          v-model.number="asset.amount"
        />
        <!-- savings rate -->
        <label for="savingsRateField"
          >monatliche Sparrate <em>(optional)</em></label
        >
        <input
          type="number"
          id="savingsRateField"
          placeholder="z. B. 50"
          v-model.number="asset.savingsRate"
        />
        <!-- notes -->
        <label for="notesField">Notizen <em>(optional)</em></label>
        <textarea id="notesField" v-model.trim="asset.description"></textarea>
        <!-- actions -->
        <button type="submit" class="button">Anlage hinzufügen</button>
        &nbsp;
        <button type="button" class="button-outline" @click.prevent="onAbort">
          Abbrechen
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import { ListOption } from "@/common";
import { AssetType, AssetTypeConfiguration, FinancialProduct } from "@/models";
import { translateAssetType } from "@/utils/translateAssetType";
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "AssetCreate",

  data() {
    return {
      asset: {
        accountNumber: "",
        amount: undefined as unknown as number,
        description: "",
        name: "",
        provider: "",
        savingsRate: undefined as unknown as number,
        type: "",
      },
    };
  },

  computed: {
    assetTypes(): ListOption[] {
      return Object.keys(AssetTypeConfiguration)
        .map(
          (assetType: string): ListOption => ({
            label: translateAssetType(assetType as AssetType, "de"),
            value: assetType,
          })
        )
        .sort((a: ListOption, b: ListOption) => a.label.localeCompare(b.label));
    },
  },

  methods: {
    ...mapActions(["addAsset"]),
    onAbort() {
      this.$router.push("/financial-statement");
    },
    onFormSubmit() {
      const newAsset: FinancialProduct = {
        amount: {
          currency: "EUR",
          value: this.asset.amount,
        },
        description: this.asset.description || undefined,
        identifier: this.asset.accountNumber,
        loanRepaymentForm: this.asset.savingsRate
          ? {
              loanPaymentAmount: {
                currency: "EUR",
                value: this.asset.savingsRate,
              },
              loanPaymentFrequency: 1, // monthly
            }
          : undefined,
        name: this.asset.name,
        provider: this.asset.provider
          ? { name: this.asset.provider }
          : undefined,
        serviceType: this.asset.type as unknown as AssetType,
      };
      this.addAsset(newAsset);
      this.$router.push("/financial-statement");
    },
    translateAssetType,
  },
});
</script>
