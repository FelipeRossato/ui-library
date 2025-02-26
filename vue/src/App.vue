<template>
  <div class="demo-container">
    <h1 class="demo-header">Vue + WebComponents Demo</h1>

    <div class="button-container">
      <UI-Button icon="add" label="Abrir modal" color="rgb(100, 122, 152)" @click="modal?.open()" />
    </div>

    <div class="form-container">
      <UI-InputField
        disabled="false"
        value="Fulano de tal"
        type="text"
        label="Nome:"
        placeholder="Digite seu nome aqui."
        border-color="rgb(100, 122, 152)"
      />

      <UI-Dropdown
        selected="Brasil"
        disabled="false"
        label="País:"
        options='["Brasil", "Argentina", "Chile"]'
        border-color="rgb(100, 122, 152)"
      />
    </div>

    <div class="card-container">
      <UI-Card
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Tênis Nike Fit 2.0"
        color="white"
        title-color="black"
        description-color="black"
        description="Esse tênis é perfeito para você que gosta de correr. Ele tem um design moderno e é super confortável."
      />
    </div>

    <UI-Modal
      ref="modal"
      color="rgb(100, 122, 152)"
      title="Salvar mudanças?"
      message="Depois de salvar, as mudanças não poderão ser desfeitas."
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { UIButton, UIInputField, UIDropdown, UIModal, UICard } from 'ui-library'

export default defineComponent({
  components: {
    UIButton,
    UIInputField,
    UIDropdown,
    UIModal,
    UICard,
  },
  setup() {
    const modal = ref<InstanceType<typeof UIModal> | null>(null)

    return {
      modal,
    }
  },
})
</script>

<style scoped>
.demo-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
}

.demo-header {
  text-align: center;
  color: rgb(100, 122, 152);
  margin-bottom: 20px;
}

.button-container {
  margin: 20px 0;
  text-align: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card-container {
  margin: 30px 0;
}
</style>
