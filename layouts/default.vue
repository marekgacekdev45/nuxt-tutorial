<template>
	<div>
        <Title>Nuxt 3 Example</Title>
		<nav>
			<ul>
				<li><nuxt-link to="/">home</nuxt-link></li>
				<li><nuxt-link to="/about">about</nuxt-link></li>
				<li><nuxt-link to="/contact">contact</nuxt-link></li>
			</ul>
		</nav>
		<slot />
	</div>
</template>
