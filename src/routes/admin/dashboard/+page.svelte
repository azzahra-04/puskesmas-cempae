<script>
  /** @type {import('./$types').PageServerData} */
  export let data;

  let totalAdmin = data.adminsPuskesmas.length;
  let totalUser = data.users.length;
</script>

<div class="p-6">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    <!-- 2 card awal -->
    <div
      class="bg-white border border-dark-green flex flex-row rounded-md p-6 shadow-md shadow-black/5"
    >
      <div class="flex items-center mr-4">
        <i class="fa-solid fa-user-nurse fa-2xl mr-4"></i>
        <div class="flex flex-col ml-4">
          <div class="text-2xl font-semibold mb-1">{totalAdmin}</div>
          <div class="text-sm">Admin Puskesmas</div>
        </div>
      </div>
    </div>
    <div
      class="bg-white border border-dark-green flex flex-row rounded-md p-6 shadow-md shadow-black/5"
    >
      <div class="flex items-center mr-4">
        <i class="fa-solid fa-users fa-2xl mr-4"></i>
        <div class="flex flex-col ml-4">
          <div class="text-2xl font-semibold mb-1">{totalUser}</div>
          <div class="text-sm">Pengguna</div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <div
      class="bg-white border border-dark-green shadow-md shadow-black/5 p-6 rounded-md"
    >
      <div class="flex justify-between mb-4 items-start">
        <div class="font-medium">Daftar Admin Puskesmas</div>
      </div>
      <div class="relative w-full mr-2 mb-4">
        <input
          type="text"
          class="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm"
          placeholder="Search Admin..."
        />
        <i
          class="fa-solid fa-magnifying-glass absolute top-1/2 left-4 -translate-y-1/2"
        ></i>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full" data-tab-for="order" data-page="active">
          <thead>
            <tr>
              <th
                class="text-[12px] uppercase tracking-wide font-medium py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md"
                >Nama Lengkap</th
              >
              <th
                class="text-[12px] uppercase tracking-wide font-medium py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md"
                >No. Telepon</th
              >
            </tr>
          </thead>
          <tbody>
            {#each data.adminsPuskesmas as { image, name, telephoneNumber }}
              <tr>
                <td class="py-2 px-4 border-b border-b-gray-50">
                  <div class="flex items-center">
                    <img
                      src={image || "https://placehold.co/32x32"}
                      alt="Profile Admin Puskesmas"
                      class="w-8 h-8 rounded-full object-cover block"
                    />
                    <p class="text-sm font-medium ml-2 truncate">
                      {name}
                    </p>
                  </div>
                </td>
                <td class="py-2 px-4 border-b border-b-gray-50">
                  <span
                    class="inline-block p-1 rounded bg-emerald-500/10 text-emerald-500 font-medium text-[12px] leading-none"
                    >{telephoneNumber}</span
                  >
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="bg-white border border-dark-green shadow-md shadow-black/5 p-6 rounded-md"
    >
      <div class="flex justify-between mb-4 items-start">
        <div class="font-medium">Daftar Pengguna</div>
      </div>
      <div class="relative w-full mr-2 mb-4">
        <input
          type="text"
          class="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm"
          placeholder="Search User..."
        />
        <i
          class="fa-solid fa-magnifying-glass absolute top-1/2 left-4 -translate-y-1/2"
        ></i>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full min-w-[540px]">
          <thead>
            <tr>
              <th
                class="text-[12px] uppercase tracking-wide font-medium py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md"
                >Nama Lengkap</th
              >
              <th
                class="text-[12px] uppercase tracking-wide font-medium py-2 px-4 bg-gray-50 text-left"
                >No. Telepon</th
              >
              <th
                class="text-[12px] uppercase tracking-wide font-medium py-2 px-4 bg-gray-50 text-left"
                >Alamat</th
              >
              <th
                class="text-[12px] uppercase tracking-wide font-medium py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md"
              ></th>
            </tr>
          </thead>
          <tbody>
            {#each data.users as { image, fullName, telephoneNumber, address }}
              <tr>
                <td class="py-2 px-4 border-b border-b-gray-50">
                  <div class="flex items-center">
                    <img
                      src={image || "https://placehold.co/32x32"}
                      alt="Profile User"
                      class="w-8 h-8 rounded-full object-cover block"
                    />
                    <p class="text-sm font-medium ml-2 truncate">
                      {fullName}
                    </p>
                  </div>
                </td>
                <td class="py-2 px-4 border-b border-b-gray-50">
                  <span class="text-[13px] font-medium text-gray-400"
                    >{telephoneNumber}</span
                  >
                </td>
                <td class="py-2 px-4 border-b border-b-gray-50">
                  <span class="text-[13px] font-medium text-gray-400"
                    >{address}</span
                  >
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
