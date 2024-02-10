<script>
  export let data;
</script>

<div class="pt-32 py-12 px-6 md:px-32 xl:px-96">
  <h1 class="text-4xl font-bold mb-4">{data.activity.title}</h1>

  <div class="flex items-center text-gray-600 text-sm mb-4">
    <span class="mr-2">{data.activity.author ?? "Admin"}</span>
    <span>&bull;</span>
    <span class="mx-2">{data.activity.created_at}</span>
    <span>&bull;</span>
    <span class="ml-2">{data.activity.location}</span>
  </div>

  <img
    class="w-full object-cover mb-6 rounded"
    src={data.activity.image}
    alt={data.activity.title}
  />

  <p class="text-lg text-justify leading-relaxed mb-6">
    {@html data.activity.description}
  </p>

  <a href="/activities" class="text-blue-500 hover:underline"
    >Kembali ke Daftar Kegiatan</a
  >
</div>
