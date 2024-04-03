<script setup>
const { x, y } = useMouse()

const users = ref([])

//client side
onMounted(() => {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => (users.value = data))
})
//server side SEO
const { data: users2 } = await useAsyncData('users2', () => $fetch('https://jsonplaceholder.typicode.com/users'))
//it is the same
const { data: users3 } = await useFetch('https://jsonplaceholder.typicode.com/users')

const { data: user } = await useFetch('https://jsonplaceholder.typicode.com/users/1', {
	pick: ['id', 'name', 'email'],
})
const { data: weather } = await useFetch('/api/weather')
</script>

<template>
	<div>
		This is a main page
		<LazyCounter />
		<div>x:{{ x }}</div>
		<div>y:{{ y }}</div>

		<div>
			<ul>
				<li v-for="user in users" :key="user.id">
					{{ user.name }}
				</li>
			</ul>
		</div>
		<div>
			<ul>
				<li v-for="user in users2" :key="user.id">
					{{ user.name }}
				</li>
			</ul>
		</div>
		<div>
			<ul>
				<li v-for="user in users3" :key="user.id">
					{{ user.name }}
				</li>
			</ul>
		</div>
		<h1>{{ user }}</h1>

		<div>
			<h2>weather</h2>
			<div>desc:{{ weather.weather[0].description }}</div>
		</div>
	</div>
</template>
