<script setup>
const title = useState('title')
const route = useRoute()

const post = await useNuxtApp().$apiFetch(`/api/posts/${route.params.id}`)

</script>

<template>
  <Title>{{ $route.params.id }} || {{ post.title }}</Title>
  <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300">
    <div class="post-container py-8">
      <h3 class="text-3xl font-bold">
        <nuxt-link :to="`/posts/${post.id}`"> {{ post.title }}</nuxt-link>
      </h3>
      <div class="post-meta text-gray-700 flex items-center space-x-2">
        <div>{{ post.created_at }}</div>
        <div>&middot</div>
        <div>{{post.user.name}}</div>
      </div>
      <div class="post-content leading-relaxed mt-4">
       {{ post.body }}
      </div>
    </div>
  </div>
</template>
