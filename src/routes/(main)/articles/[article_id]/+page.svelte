<script>
  export let data;
</script>

<div class="pt-32 py-12 px-6 md:px-32 xl:px-96">
  <h1 class="text-4xl font-bold mb-4">{data.article.title}</h1>

  <div class="flex items-center text-gray-600 text-sm mb-4">
    <span class="mr-2">{data.article.author ?? "Admin"}</span>
    <span>&bull;</span>
    <span class="ml-2">{data.article.created_at}</span>
  </div>

  <img
    class="w-full object-cover mb-6 rounded"
    src={data.article.image}
    alt={data.article.title}
  />

  <p class="text-lg text-justify leading-relaxed mb-6">
    {@html data.article.description}
  </p>

  <a href="/articles" class="text-blue-500 hover:underline"
    >Kembali ke Daftar Artikel</a
  >
</div>
