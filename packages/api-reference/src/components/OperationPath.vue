<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  path: string
  deprecated?: boolean
}>()

const isVariable = (part: string) => part.startsWith('{') && part.endsWith('}')

// Split on the path variables
const pathParts = computed<string[]>(() => props.path.split(/({[^}]+})/))
</script>
<template>
  <span
    class="operation-path"
    :class="{ deprecated: deprecated }">
    <template
      v-for="(part, i) in pathParts"
      :key="i">
      <em v-if="isVariable(part)">{{ part }}</em>
      <template v-else>{{ part }}</template>
    </template>
  </span>
</template>
<style scoped>
.operation-path {
  overflow: hidden;
  word-wrap: break-word;
  font-weight: var(--scalar-semibold);
  line-break: anywhere;
}
.deprecated {
  text-decoration: line-through;
}
</style>
