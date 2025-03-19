/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

"use client";

import "@felipe-rossato/ui-library";

import "./page.css";

export default function Home() {
  return (
    <div className="demo-container">
      <h1 className="demo-header">React + WebComponents Demo</h1>

      <div className="button-container">
        <ui-button onClick={() => document.querySelector('ui-modal')?.open()} icon="add" label="Abrir modal" color="rgb(100, 122, 152)" />
      </div>

      <div className="form-container">
        <ui-inputfield disabled="false" value="Fulano de tal" type="text" label="Nome:" placeholder="Digite seu nome aqui."
          border-color="rgb(100, 122, 152)" />

        <ui-dropdown selected="Brasil" disabled="false" label="País:" options='["Brasil", "Argentina", "Chile"]'
          border-color="rgb(100, 122, 152)" />
      </div>

      <div className="card-container">
        <ui-card
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Tênis Nike Fit 2.0" color="white" title-color="black" description-color="black"
          description="Esse tênis é perfeito para você que gosta de correr. Ele tem um design moderno e é super confortável." />
      </div>

      <ui-modal color="rgb(100, 122, 152)" title="Salvar mudanças?"
        message="Depois de salvar, as mudanças não poderão ser desfeitas." />
    </div>
  );
}