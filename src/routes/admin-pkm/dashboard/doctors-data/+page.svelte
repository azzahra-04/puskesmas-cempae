<script>
  /** @type {import('./$types').PageServerData} */
  export let data;
</script>

<div class="max-w-screen-xl mx-auto px-4 md:px-8">
  <div class="pt-10 items-start justify-between py-4 border-b md:flex">
    <div>
      <h3 class="text-2xl font-bold">Kelola Data Dokter</h3>
    </div>
    <div class="flex items-center gap-x-3 mt-6 md:mt-0 sm:flex">
      <!-- Komponen Search Button -->
      <div class="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          class="border p-2 rounded-s focus:outline-none focus:ring-2 focus:ring-dark-green focus:border-transparent sm:mt-0 md:text-sm"
        />
        <button
          on:click={handleSearch}
          class="grow px-4 py-2 rounded-e border bg-green hover:bg-dark-green sm:mt-0 md:text-sm"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <a
        href="/admin-pkm/dashboard/doctors-data/add"
        class="block px-4 py-2 mt-3 text-center duration-150 font-medium rounded border bg-green hover:bg-dark-green sm:mt-0 md:text-sm"
      >
        Tambah Data
      </a>
    </div>
  </div>
</div>
<div class="max-w-screen-xl mx-auto px-4 md:px-8">
  <div class="mt-12 shadow-sm overflow-x-auto">
    <table class="w-full table-auto text-sm text-left">
      <thead class="bg-dark-green font-medium border-b">
        <tr>
          <th class="py-3 px-6 border">Gambar</th>
          <th class="py-3 px-6 border">Nama Dokter</th>
          <th class="py-3 px-6 border">NIP</th>
          <th class="py-3 px-6 border">No. Telepon</th>
          <th class="py-3 px-6 border">Alamat</th>
          <th class="py-3 px-6 border">Spesialis</th>
          <th class="py-3 px-6 border">Jadwal Praktek</th>
          <th class="py-3 px-6 border"></th>
        </tr>
      </thead>
      <tbody>
        {#each data.doctorsSchedules as { _id: id, image, name, practiceLicense, telephoneNumber, address, specialist, practiceSchedule }}
          <tr class="border">
            <td class="px-6 py-4">
              <img src={image} alt="Profile Dokter" class="w-10 rounded" /></td
            >
            <td class="px-6 py-4 border">
              <span class="block text-sm font-medium">{name}</span>
            </td>
            <td class="px-6 py-4 border">{practiceLicense}</td>
            <td class="px-6 py-4 border">{telephoneNumber}</td>
            <td class="px-6 py-4 border">{address}</td>
            <td class="px-6 py-4 border">{specialist}</td>
            <td class="px-6 py-4 border">{practiceSchedule}</td>
            <td class="px-6 py-4 border">
              <div class="flex items-center">
                <a
                  href="/admin-pkm/dashboard/doctors-data/{id}"
                  class="py-2 px-3 mr-2 font-medium text-indigo-600 hover:bg-dark-green rounded"
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
