<script setup>

const {x,y} = useMouse()
</script>

<template>
	<div>
        This is a main page
        <LazyCounter/>
        <div>x:{{ x }}</div>
        <div>y:{{ y }}</div>
    </div>
</template>
