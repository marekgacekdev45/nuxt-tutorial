<script setup>

const title = useState('title',()=>"Nuxt 3 blog")

</script>



<template>
    <Title>{{ title }}</Title>
  <div class="bg-gray-100 min-h-screen text-black">
    <nav class="bg-white text-lg px-6 py-6">
      <div class="container mx-auto flex items-center justify-between px-6">
        <div>
          <nuxt-link to="/">Logo</nuxt-link>
        </div>
        <div>
          <ul class="flex space-x-12">
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/contact">Contact</nuxt-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <slot></slot>
  </div>
</template>




<style>

.router-link-active{
    font-weight: bold;
}

</style>