<script setup lang="ts">
import { useStoreSession } from "@/stores/session";

const store = useStoreSession();
const storeRef = storeToRefs(store);

async function testApi() {
  console.log(storeRef.name.value);
  storeRef.name.value = "lucas";
  console.log(storeRef.name.value);

  const response = await useApi<{ token: string }>({
    url: "/login",
    method: "post",
    data: {
      email: "yuri.bueno106@live.com",
      password: "123456",
    },
  });

  if (!response.success) return;
  response.token;
}
</script>

<style scoped lang="scss"></style>
<template>
  <div>
    <button type="button" @click="testApi">Click</button>
  </div>
</template>
