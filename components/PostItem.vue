<script setup>

defineProps({
  post:Object
})

</script>


<template>
  <div class="post-container py-8">
    <h3 class="text-3xl font-bold">
      <nuxt-link :to="`/posts/${ post.id }`"> {{post.title}}</nuxt-link>
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
     <div>{{post.created_at}}</div>
        <div>&middot</div>
      <div>{{post.user.name}}</div>
    </div>
    <div class="post-preview leading-relaxed mt-4">
    {{post.body}}
    </div>
    <div class="mt-4">
      <nuxt-link
        :to="`/posts/${ post.id }`"
        class="bg-blue-700 text-white rounded inline-block px-4 py-2"
        >Read</nuxt-link
      >
    </div>
  </div>
</template>
