<script>
  /** @type {import('./$types').PageServerData} */
  export let data;
</script>

<div class="max-w-screen-xl mx-auto px-4 md:px-8">
  <div class="items-start justify-between py-4 border-b md:flex">
    <div>
      <h3 class="text-gray-800 text-2xl font-bold">Manage Data Users</h3>
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
    </div>
  </div>
</div>
<div class="max-w-screen-xl mx-auto px-4 md:px-8">
  <div class="mt-12 shadow-sm overflow-x-auto">
    <table class="w-full table-auto text-sm text-left">
      <thead class="bg-dark-green font-medium border-b">
        <tr>
          <th class="py-3 px-6 border">Username</th>
          <th class="py-3 px-6 border">Jenis Kelamin</th>
          <th class="py-3 px-6 border">Tanggal Lahir</th>
          <th class="py-3 px-6 border">No. Telepon</th>
          <th class="py-3 px-6 border">Alamat</th>
          <th class="py-3 px-6 border"></th>
        </tr>
      </thead>
      <tbody>
        {#each data.users as { _id: id, fullName, email, gender, dateOfBirth, telephoneNumber, address }}
          <tr class="border">
            <td class="px-6 py-4 border">
              <span class="block text-sm font-medium">{fullName}</span>
              <span class="block text-xs">{email}</span>
            </td>
            <td class="px-6 py-4 border">{gender}</td>
            <td class="px-6 py-4 border">{dateOfBirth}</td>
            <td class="px-6 py-4 border">{telephoneNumber}</td>
            <td class="px-6 py-4 border">{address}</td>
            <td class="pl-4 py-4">
              <form action="?/delete" method="POST">
                <input type="hidden" name="id" value={id} />
                <button
                  class="py-2 px-3 font-medium text-red hover:bg-dark-green rounded"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </form>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
