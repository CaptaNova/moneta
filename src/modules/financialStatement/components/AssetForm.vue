<template>
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
          v-model.trim="assetData.name"
        />
        <!-- type -->
        <label for="typeField">Art</label>
        <select id="typeField" required v-model="assetData.type">
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
          v-model.trim="assetData.provider"
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
          v-model.trim="assetData.accountNumber"
        />
        <!-- amount -->
        <label for="amountField">Betrag</label>
        <input
          type="number"
          id="amountField"
          placeholder="z. B. 2300"
          required
          v-model.number="assetData.amount"
        />
        <!-- savings rate -->
        <label for="savingsRateField"
          >monatliche Sparrate <em>(optional)</em></label
        >
        <input
          type="number"
          id="savingsRateField"
          placeholder="z. B. 50"
          v-model.number="assetData.savingsRate"
        />
        <!-- notes -->
        <label for="notesField">Notizen <em>(optional)</em></label>
        <textarea id="notesField" v-model.trim="assetData.notes"></textarea>
        <!-- actions -->
        <button type="submit" class="button">{{ primaryButtonText }}</button>
        &nbsp;
        <button type="button" class="button-outline" @click="onAbort">
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
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AssetForm",

  props: {
    asset: {
      type: Object as PropType<FinancialProduct>,
      required: true,
    },

    primaryButtonText: {
      type: String,
      required: true,
    },
  },

  emits: ["abort", "submit"],

  data() {
    return {
      assetData: {
        accountNumber: this.asset.identifier,
        amount: this.asset.amount.value,
        name: this.asset.name,
        notes: this.asset.description,
        provider: this.asset.provider?.name ?? "",
        savingsRate:
          this.asset.loanRepaymentForm?.loanPaymentAmount.value ||
          ((undefined as unknown) as number),
        type: this.asset.serviceType,
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
    onAbort() {
      this.$emit("abort");
    },

    onFormSubmit() {
      const newAsset: FinancialProduct = {
        amount: {
          currency: "EUR",
          value: this.assetData.amount,
        },
        description: this.assetData.notes || undefined,
        identifier: this.assetData.accountNumber,
        loanRepaymentForm: this.assetData.savingsRate
          ? {
              loanPaymentAmount: {
                currency: "EUR",
                value: this.assetData.savingsRate,
              },
              loanPaymentFrequency: 1, // monthly
            }
          : undefined,
        name: this.assetData.name,
        provider: this.assetData.provider
          ? { name: this.assetData.provider }
          : undefined,
        serviceType: (this.assetData.type as unknown) as AssetType,
      };

      this.$emit("submit", newAsset);
    },

    translateAssetType,
  },
});
</script>
