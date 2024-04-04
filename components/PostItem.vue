<template>
  <div class="post-container py-8">
    <h3 class="text-3xl font-bold">
      <nuxt-link to="/posts/1"> Title of Post</nuxt-link>
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
     <div>02.02.2022</div>
        <div>&middot</div>
      <div>Marek Gacek</div>
    </div>
    <div class="post-preview leading-relaxed mt-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam ratione
      vitae, necessitatibus sequi, voluptatibus deserunt earum amet dicta
      aliquam quidem delectus commodi. Dolore vero numquam suscipit sapiente? Id
      ipsam velit vero labore.
    </div>
    <div class="mt-4">
      <nuxt-link
        to="/posts/1"
        class="bg-blue-700 text-white rounded inline-block px-4 py-2"
        >Read</nuxt-link
      >
    </div>
  </div>
</template>
