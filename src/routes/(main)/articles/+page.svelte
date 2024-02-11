<script>
  /** @type {import('./$types').PageServerData} */
  export let data;

  let searchValue = "";
  let filteredArticle = [];

  function handleSearch() {
    let filter = searchValue.toLowerCase();
    filteredArticle = data.articles.filter((article) => {
      return article.title.toLowerCase().includes(filter);
    });
  }

  let visibleCards = 3;
  let totalCards = data.articles.length;

  function showMore() {
    visibleCards += 3;

    if (visibleCards > totalCards) {
      visibleCards = totalCards;
    }
  }
</script>

<div class="pt-28 py-12 px-6 md:px-14 border-b boder-solid border-dark-green">
  <div class="bg-green p-5 rounded">
    <h1 class="text-2xl font-bold mb-4">Artikel Kesehatan</h1>
    <p class="text-l leading-relaxed text-justify mb-2">
      Jelajahi beragam pengetahuan kesehatan yang inspiratif dan membantu Anda
      meraih hidup lebih sehat melalui rangkaian artikel informatif di blog
      kami.
    </p>
  </div>

  <!-- Komponen Search Button -->
  <div class="flex flex-row gap-2 mt-8 mx-auto lg:w-1/2">
    <input
      type="text"
      placeholder="Cari artikel..."
      bind:value={searchValue}
      class="border p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
    />
    <button
      on:click={handleSearch}
      class="grow bg-green px-6 py-2 rounded-md hover:bg-dark-green"
    >
      Search
    </button>
  </div>

  <!-- List Card Articles -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
    {#each (filteredArticle.length > 0 ? filteredArticle : data.articles).slice(0, visibleCards) as { _id: id, title, image, created_at }}
      <div
        class="w-full mx-auto rounded-xl overflow-hidden shadow-md mb-4 border border-dark-green"
      >
        <img
          class="object-cover w-full h-48"
          src={`${image}`}
          alt={`Gambar Artikel ${id}`}
        />

        <div class="p-6">
          <div class="flex items-center justify-between">
            <span class="text-sm mb-2">{created_at}</span>
          </div>
          <a
            href="/articles/{id}"
            class="font-semibold text-xl mb-2 line-clamp-2 hover:underline"
          >
            {title}
          </a>
          <a href="/articles/{id}" class="text-sm hover:opacity-80"
            >Selengkapnya <i class="fa-solid fa-arrow-right"></i></a
          >
        </div>
      </div>
    {/each}
  </div>

  {#if visibleCards < totalCards}
    <button
      on:click={showMore}
      type="button"
      class="bg-green px-6 py-2 mt-12 rounded-md flex mx-auto hover:bg-dark-green"
      >Tampilkan Lebih Banyak
    </button>
  {/if}
</div>
