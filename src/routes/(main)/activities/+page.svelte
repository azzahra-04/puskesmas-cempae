<script>
  /** @type {import('./$types').PageServerData} */
  export let data;

  let searchValue = "";
  let filteredActivity = data.activities;

  let visibleCards = 3;
  let totalCards = filteredActivity.length;

  function handleSearch() {
    let filter = searchValue.toLowerCase();
    filteredActivity = data.activities.filter((activity) => {
      return activity.title.toLowerCase().includes(filter);
    });
  }

  function showMore() {
    visibleCards += 3;
  }
</script>

<div class="pt-28 py-12 px-6 md:px-14 border-b border-solid border-dark-green">
  <div class="bg-green p-5 rounded">
    <h1 class="text-2xl font-bold mb-4">Kegiatan Puskesmas</h1>
    <p class="text-l leading-relaxed text-justify mb-2">
      Kami berkomitmen untuk membangun komunitas sehat dengan menyelenggarakan
      kegiatan yang bermanfaat dan memberikan pelayanan medis terbaik kepada
      masyarakat.
    </p>
  </div>

  <!-- Komponen Search Button -->
  <div class="flex flex-row gap-2 mt-8 mx-auto lg:w-1/2">
    <input
      type="text"
      placeholder="Cari kegiatan..."
      bind:value={searchValue}
      class="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
    />
    <button
      type="button"
      on:click={handleSearch}
      class="grow bg-green px-6 py-2 rounded-md hover:bg-dark-green"
    >
      Search
    </button>
  </div>

  <!-- List Card Activities -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
    {#if filteredActivity.length > 0}
      {#each filteredActivity.slice(0, visibleCards) as { _id: id, title, image, created_at }}
        <div
          class="w-full mx-auto rounded-xl overflow-hidden shadow-md mb-4 border border-dark-green"
        >
          <img
            src={image}
            class="w-full h-48 object-cover object-center shadow-md"
            alt=""
          />

          <div class="p-6">
            <div class="flex items-center justify-between">
              <span class="text-sm mb-2">{created_at}</span>
            </div>
            <a
              href="/activities/{id}"
              class="font-semibold text-xl mb-2 line-clamp-2 hover:underline"
              >{title}</a
            >
            <a href="/activities/{id}" class="text-sm hover:opacity-80"
              >Selengkapnya <i class="fa-solid fa-arrow-right"></i></a
            >
          </div>
        </div>
      {/each}
    {:else}
      <p class="text-lg">Kegiatan tidak ditemukan.</p>
    {/if}
  </div>

  {#if visibleCards < totalCards && filteredActivity.length > 0}
    <button
      on:click={showMore}
      type="button"
      class="bg-green px-6 py-2 mt-12 rounded-md flex mx-auto hover:bg-dark-green"
      >Tampilkan Lebih Banyak
    </button>
  {/if}
</div>
