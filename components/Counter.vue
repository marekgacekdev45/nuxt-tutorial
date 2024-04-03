<script setup>
const count = ref(0)

const plusOne = computed(() => count.value + 1)

const increment = () => {
	count.value++
}
const decrement = () => {
	count.value--
}
</script>

<template>
	<div>
		<div>Counter:{{ count }}</div>
		<div>PlusOne:{{ plusOne }}</div>
		<button @click="decrement">Decrement</button>
		<button @click="increment">Increment</button>
	</div>
</template>
