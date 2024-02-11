<script>
  /** @type {import('./$types').PageServerData} */
  export let data;
</script>

<div class="max-w-screen-xl mx-auto px-4 md:px-8">
  <div class="pt-10 items-start justify-between py-4 border-b md:flex">
    <div>
      <h3 class="text-2xl font-bold">Kelola Ruang Rawat Inap</h3>
    </div>
    <div class="flex items-center gap-x-3 mt-6 md:mt-0 sm:flex">
      <a
        href="/admin-pkm/dashboard/rooms/add"
        class="block px-4 py-2 mt-3 text-center duration-150 font-medium rounded border bg-green hover:bg-dark-green sm:mt-0 md:text-sm"
      >
        Tambah Data
      </a>
    </div>
  </div>
</div>
<div class="max-w-screen-xl mx-auto px-4 md:px-8">
  <div class="mt-12 shadow-sm overflow-x-auto">
    <table class="w-full table-fixed text-sm text-left">
      <thead class="bg-dark-green font-medium border-b">
        <tr>
          <th class="py-3 px-6 border">Gambar</th>
          <th class="py-3 px-6 border">Nama Ruangan</th>
          <th class="py-3 px-6 border">Jumlah Kamar</th>
          <th class="py-3 px-6 border">Kamar Kosong</th>
          <th class="py-3 px-6 border">Kamar Terisi</th>
          <th class="py-3 px-6 border"></th>
        </tr>
      </thead>
      <tbody>
        {#each data.inpatientRooms as { _id: id, name, totalBed, emptyBed, filledBed, image }}
          <tr class="border">
            <td class="px-6 py-4">
              <img
                src={image}
                alt="Ruang Rawat Inap - {name}"
                class="w-10 h-10 rounded"
              /></td
            >
            <td class="px-6 py-4 border">
              <span class="block text-sm font-medium">{name}</span>
            </td>
            <td class="px-6 py-4 border">{totalBed}</td>
            <td class="px-6 py-4 border">{emptyBed || 0}</td>
            <td class="px-6 py-4 border">{filledBed || 0}</td>
            <td class="px-6 py-4">
              <div class="flex items-center justify-center">
                <a
                  href="/admin-pkm/dashboard/rooms/{id}"
                  class="py-2 px-3 mr-4 font-medium hover:bg-dark-green rounded"
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </a>
                <form action="?/delete" method="POST">
                  <input type="hidden" name="id" value={id} />
                  <button
                    class="py-2 px-3 font-medium text-red hover:bg-dark-green rounded"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </form>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<div class="max-w-screen-xl mx-auto px-4 pt-8 md:px-8">
  <div class="pt-10 items-start justify-between py-4 border-b md:flex">
    <div>
      <h3 class="text-2xl font-bold">Riwayat Booking Ruang Rawat Inap</h3>
    </div>
    <div class="flex items-center gap-x-3 mt-6 md:mt-0 sm:flex">
      <!-- Komponen Search Button -->
      <div class="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          class="border p-2 rounded-s focus:outline-none sm:mt-0 md:text-sm"
        />
        <!-- <button
          on:click={handleSearch}
          class="grow px-4 py-2 rounded-e border bg-green hover:bg-dark-green sm:mt-0 md:text-sm"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button> -->
      </div>
    </div>
  </div>
</div>
<div class="max-w-screen-xl mx-auto pb-12 px-4 md:px-8">
  <div class="mt-12 relative h-max overflow-auto">
    <table class="w-full table-auto text-sm text-left">
      <thead class="font-medium border-b bg-dark-green">
        <tr>
          <th class="py-3 px-6">Nama</th>
          <th class="py-3 px-6">Tanggal</th>
          <th class="py-3 px-6">Keluhan</th>
          <th class="py-3 px-6">Status</th>
          <th class="py-3 px-6">Dokumen</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        {#each data.bookingRooms as { name, complaint, visitDate, status, document }}
          <tr>
            <td class="px-6 py-4">{name}</td>
            <td class="px-6 py-4">{visitDate}</td>
            <td class="px-6 py-4">{complaint}</td>
            <td class="px-6 py-4">{status}</td>
            <td class="px-6 py-4">
              <a
                href={document}
                target="_blank"
                class="py-1.5 px-4 hover:bg-green border rounded"
                >Lihat Dokumen</a
              >
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
