<script>
  /** @type {import('./$types').PageServerData} */
  export let data;

  // Fungsi Search Button
  let searchValue = "";
  let filteredData = [];

  function handleSearch() {
    let filter = searchValue.toLowerCase();
    filteredData = data.doctorsSchedules.filter((doctorsSchedule) => {
      return doctorsSchedule.name.toLowerCase().includes(filter);
    });
  }

  // Fungsi untuk Membatasi Tampilan Card
  let visibleCards = 3;
  let totalCards = data.doctorsSchedules.length;

  function showMore() {
    visibleCards += 3;

    // Jangan biarkan visibleCards melebihi totalCards
    if (visibleCards > totalCards) {
      visibleCards = totalCards;
    }
  }
</script>

<!-- Antrian Online -->
<section
  class="bg-green flex flex-col justify-between py-6 pt-28 lg:flex-row md:gap-10"
>
  <div class="px-4 my-auto md:px-12">
    <h1 class="text-2xl py-4 md:text-3xl lg:text-4xl font-bold">
      <i class="fa-solid fa-handshake fa-xl"></i> Buat Janji Temu
    </h1>
    <h2 class="py-4 text-lg md:text-xl lg:text-2xl font-semibold">
      Sudah buat janji temu?
    </h2>
    <p class="text-sm md:text-base lg:text-lg">
      Hal yang bisa Anda lakukan agar kunjungan jadi lebih mudah.
    </p>
  </div>
  <div class="flex flex-col px-4 py-6 gap-5 md:flex-row">
    <div class="relative">
      <img
        src="/images/antrian-online.jpg"
        alt="Antrian Online Puskesmas"
        class="w-full h-64 object-cover rounded-lg"
      />
      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
      >
        <h3 class="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
          Antrian Online Puskesmas
        </h3>
        <a href="/online-queue" class="hover:opacity-80"
          >Ambil Antrian Online <i class="fa-solid fa-arrow-right"></i></a
        >
      </div>
    </div>
    <div class="relative">
      <img
        src="/images/jadwal-dokter.jpg"
        alt="Jadwal Dokter Puskesmas"
        class="w-full h-64 object-cover rounded-lg"
      />
      <div
        class="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
      >
        <h3 class="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
          Jadwal Dokter Puskesmas
        </h3>
        <a href="#doctorSchedules" class="hover:opacity-80"
          >Lihat Jadwal Dokter <i class="fa-solid fa-arrow-right"></i></a
        >
      </div>
    </div>
  </div>
</section>

<section class="py-14" id="doctorSchedules">
  <div class="max-w-screen-xl mx-auto px-4 md:px-8">
    <div class="max-w-xl mx-auto sm:text-center" id="jadwal-dokter">
      <h2 class="text-2xl py-4 md:text-3xl lg:text-4xl font-bold">
        Dokter Kami
      </h2>
      <p class="mt-3">
        Tim dokter kami siap memberikan pelayanan kesehatan yang penuh kasih dan
        komprehensif, memastikan kesejahteraan Anda dalam tangan yang terampil.
      </p>
    </div>
    <!-- Komponen Search Button -->
    <div class="flex flex-row gap-2 mt-8 mx-auto lg:w-1/2">
      <input
        type="text"
        placeholder="Cari nama dokter..."
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
    <div class="mt-12">
      <ul class="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {#each (filteredData.length > 0 ? filteredData : data.doctorsSchedules).slice(0, visibleCards) as { _id: id, name, image, specialist, practiceSchedule }}
          <li>
            <div class="w-full h-60 sm:h-52 md:h-56">
              <img
                src={image}
                class="w-full h-full object-cover object-center shadow-md rounded-xl"
                alt={`Gambar Dokter ${id}`}
              />
            </div>
            <div class="mt-4">
              <h4 class="text-lg font-semibold">{name}</h4>
              <p>{specialist}</p>
              <p>Jadwal Praktek: {practiceSchedule}</p>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

{#if visibleCards < totalCards}
  <button
    on:click={showMore}
    type="button"
    class="bg-green px-6 py-2 mt-12 rounded-md flex mx-auto hover:bg-dark-green"
    >Load More
  </button>
{/if}

<section class="marquee-container bg-green py-6 px-5">
  <span class="marquee-text"
    >Klarifikasi Pengaduan: Kepada seluruh Pasien UPTD Puskesmas Cempae, urutan
    mendapat layanan kesehatan disesuaikan dengan nomor antrian.</span
  >
</section>

<style>
  .marquee-container {
    overflow: hidden;
    white-space: nowrap;
  }

  .marquee-text {
    display: inline-block;
    animation: marqueeAnimation 50s linear infinite;
  }

  @keyframes marqueeAnimation {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
</style>
