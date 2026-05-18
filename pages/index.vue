<script setup lang="ts">
import type { Props } from './index.server'

defineProps<Props>()
</script>

<template>
  <main>
    <h1>Welcome to Void</h1>
    <p>
      This starter is running in Pages mode. The list below is loaded from your database in
      <code>pages/index.server.ts</code>.
    </p>
    <p>API example: <a href="/api/hello">/api/hello</a></p>
    <p v-if="messages.length === 0">
      No messages yet. Run <code>void db seed</code> to load the sample row from
      <code>db/seed.ts</code>.
    </p>
    <ul v-else>
      <li v-for="message in messages" :key="message.id">
        <strong>{{ message.text }}</strong>
        <br />
        <small>{{ String(message.createdAt) }}</small>
      </li>
    </ul>
  </main>
</template>
