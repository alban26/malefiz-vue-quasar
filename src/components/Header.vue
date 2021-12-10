<template>
  <div class="q-pa-md">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="bg-grey-9 text-white shadow-2">
        <q-btn flat label="Malefiz"/>
        <q-space/>

        <q-tabs v-model="tab" shrink>
          <router-link style="text-decoration: none; color: #E55A00" :to="{name:'Home'}">
            <q-tab name="home" label="Home"/>
          </router-link>
          <router-link style="text-decoration: none; color: #E55A00" :to="{name:'About'}">
            <q-tab name="about" label="About"/>
          </router-link>
        </q-tabs>
      </q-toolbar>
    </q-header>
  </div>
</template>
