<script setup>
const title = useState('title')
</script>

<template>
	<Title>{{ $route.params.id }} || {{ title }}</Title>
	<div
      class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300"
    >
  <div class="post-container py-8">
    <h3 class="text-3xl font-bold">
      <nuxt-link to="/posts/1"> Title of Post</nuxt-link>
    </h3>
    <div class="post-meta text-gray-700 flex items-center space-x-2">
     <div>02.02.2022</div>
        <div>&middot</div>
      <div>Marek Gacek</div>
    </div>
    <div class="post-content leading-relaxed mt-4">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa quidem sequi sunt eos rem dolorum repellat praesentium dolore libero? Neque exercitationem eligendi magni ut impedit eveniet eum, tempora hic. Aspernatur quidem, dicta enim reprehenderit voluptatibus rerum fugit tenetur maiores soluta nostrum cumque, perspiciatis labore, atque dolore eveniet consequatur a in possimus facilis accusantium animi! Maxime non rem quisquam laboriosam magni magnam ipsam, corrupti officia debitis corporis pariatur? Corporis pariatur iusto temporibus facilis ullam voluptate consequatur perspiciatis asperiores ex laudantium a esse at eum doloremque odit eaque provident harum, sit labore tempora delectus neque doloribus magnam! Voluptatem eos sit nam provident exercitationem eveniet! Tempora harum, at officiis quisquam qui voluptatem sapiente blanditiis quae incidunt repudiandae fuga, autem facere odit quidem quas eligendi eaque natus numquam molestiae velit? Esse tenetur et recusandae, quas officiis asperiores obcaecati eum quia accusantium nesciunt molestias modi praesentium nemo voluptatibus omnis dolores placeat fugit facilis quibusdam harum enim totam, magnam maiores possimus! Exercitationem aspernatur perferendis placeat illo voluptatum distinctio commodi maiores atque nihil hic, perspiciatis amet molestias dolore, delectus quam debitis officiis deleniti soluta saepe? Ut provident voluptates soluta veniam iste, aspernatur ipsa consectetur, nihil, officiis voluptatibus expedita quia corporis explicabo nostrum dignissimos perferendis deleniti exercitationem?
    </div>
  
  </div>
  </div>
</template>