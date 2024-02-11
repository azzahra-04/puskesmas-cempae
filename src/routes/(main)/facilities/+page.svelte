<script>
  /** @type {import('./$types').PageServerData} */
  export let data;
</script>

<!-- Fasilitas Kesehatan -->
<div class="pt-28 py-12 px-6 md:px-14 border-b border-solid border-dark-green">
  <div class="bg-green p-5 rounded">
    <h1 class="text-2xl font-bold mb-4">Fasilitas Puskesmas</h1>
    <p class="text-l leading-relaxed text-justify mb-2">
      Fasilitas Puskesmas adalah sarana kesehatan dasar yang menyediakan layanan
      medis dan kesehatan kepada masyarakat di tingkat primer. Berikut ini
      beberapa fasilitas yang tersedia di Puskesmas Cempae.
    </p>
  </div>

  <!-- List Card Facilities -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
    {#each data.facilities as { _id: id, name, image, description }}
      <div class="rounded-lg shadow-xl mx-auto border border-dark-green">
        <img class="p-5" src={image} alt="" />
        <div class="p-5 pt-0">
          <h5
            class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black"
          >
            {name}
          </h5>
          <p class="mb-3 font-normal text-justify">
            {description}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>
