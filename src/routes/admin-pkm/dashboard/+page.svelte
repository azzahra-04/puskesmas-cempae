<script>
  /** @type {import('./$types').PageServerData} */
  export let data;
</script>

<div class="p-6">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    <!-- 5 card awal -->
    <div
      class="bg-white border border-dark-green flex flex-row rounded-md p-6 shadow-md shadow-black/5"
    >
      <div class="flex items-center mr-4">
        <i class="fa-solid fa-person-booth fa-2xl mr-4"></i>
        <div class="flex flex-col ml-4">
          <div class="text-2xl font-semibold mb-1">
            {#await data.inpatientRoomsCount}
              loading
            {:then count}
              {count}
            {:catch error}
              {error.message}
            {/await}
          </div>
          <div class="text-sm">Ruangan Rawat Inap</div>
        </div>
      </div>
    </div>
    <div
      class="bg-white border border-dark-green flex flex-row rounded-md p-6 shadow-md shadow-black/5"
    >
      <div class="flex items-center mr-4">
        <i class="fa-solid fa-house-medical fa-2xl mr-4"></i>
        <div class="flex flex-col ml-4">
          <div class="text-2xl font-semibold mb-1">
            {#await data.facilitiesCount}
              loading
            {:then count}
              {count}
            {:catch error}
              {error.message}
            {/await}
          </div>
          <div class="text-sm">Fasilitas</div>
        </div>
      </div>
    </div>
    <div
      class="bg-white border border-dark-green flex flex-row rounded-md p-6 shadow-md shadow-black/5"
    >
      <div class="flex items-center mr-4">
        <i class="fa-solid fa-newspaper fa-2xl mr-4"></i>
        <div class="flex flex-col ml-4">
          <div class="text-2xl font-semibold mb-1">
            {#await data.articlesCount}
              loading
            {:then count}
              {count}
            {:catch error}
              {error.message}
            {/await}
          </div>
          <div class="text-sm">Artikel</div>
        </div>
      </div>
    </div>
    <div
      class="bg-white border border-dark-green flex flex-row rounded-md p-6 shadow-md shadow-black/5"
    >
      <div class="flex items-center mr-4">
        <i class="fa-solid fa-hand-holding-medical fa-2xl mr-4"></i>
        <div class="flex flex-col ml-4">
          <div class="text-2xl font-semibold mb-1">
            {#await data.activitiesCount}
              loading
            {:then count}
              {count}
            {:catch error}
              {error.message}
            {/await}
          </div>
          <div class="text-sm">Kegiatan</div>
        </div>
      </div>
    </div>
    <div
      class="bg-white border border-dark-green flex flex-row rounded-md p-6 shadow-md shadow-black/5"
    >
      <div class="flex items-center mr-4">
        <i class="fa-solid fa-user-doctor fa-2xl mr-4"></i>
        <div class="flex flex-col ml-4">
          <div class="text-2xl font-semibold mb-1">
            {#await data.doctorSchedulesCount}
              loading
            {:then count}
              {count}
            {:catch error}
              {error.message}
            {/await}
          </div>
          <div class="text-sm">Dokter</div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <div
      class="bg-white border border-dark-green shadow-md shadow-black/5 p-6 rounded-md"
    >
      <div class="flex justify-between mb-4 items-start">
        <div class="font-semibold">Daftar Dokter Puskesmas</div>
      </div>
      <div>
        <table class="w-full" data-tab-for="order" data-page="active">
          <thead>
            <tr>
              <th
                class="text-[12px] uppercase tracking-wide font-medium py-2 px-4 text-left rounded-tl-md rounded-bl-md"
                >Nama Lengkap</th
              >
              <th
                class="text-[12px] uppercase tracking-wide font-medium py-2 px-4 text-left rounded-tr-md rounded-br-md"
                >Spesialis</th
              >
            </tr>
          </thead>
          <tbody>
            {#each data.doctorSchedules as doctor}
              <tr>
                <td class="py-2 px-4 border-b border-b-gray-50">
                  <div class="flex items-center">
                    <img
                      src={doctor.image}
                      alt=""
                      class="w-8 h-8 rounded-full object-cover block"
                    />
                    <p class="text-sm font-medium ml-2">
                      {doctor.name}
                    </p>
                  </div>
                </td>
                <td class="py-2 px-4 border-b border-b-gray-50">
                  <span
                    class="inline-block p-1 rounded font-medium text-[12px] leading-none"
                    >{doctor.specialist}</span
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
        <div class="font-semibold">Daftar Pengguna</div>
      </div>
      <div class="relative w-full mr-2 mb-4">
        <input
          type="text"
          class="py-2 pr-4 pl-10 w-full outline-none border border-gray-100 rounded-md text-sm"
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
                class="text-[12px] uppercase tracking-wide font-medium py-2 px-4 text-left rounded-tl-md rounded-bl-md"
                >Nama Lengkap</th
              >
              <th
                class="text-[12px] uppercase tracking-wide font-medium py-2 px-4 text-left"
                >No. Telepon</th
              >
              <th
                class="text-[12px] uppercase tracking-wide font-medium py-2 px-4 text-left"
                >Alamat</th
              >
              <th
                class="text-[12px] uppercase tracking-wide font-medium py-2 px-4 text-left rounded-tr-md rounded-br-md"
              ></th>
            </tr>
          </thead>
          <tbody>
            {#each data.users as user}
              <tr>
                <td class="py-2 px-4 border-b border-b-gray-50">
                  <div class="flex items-center">
                    <img
                      src={user.image}
                      alt=""
                      class="w-8 h-8 rounded-full object-cover block"
                    />
                    <p class="text-sm font-medium ml-2">
                      {user.fullName}
                    </p>
                  </div>
                </td>
                <td class="py-2 px-4 border-b border-b-gray-50">
                  <span class="text-[13px] font-medium"
                    >{user.telephoneNumber}</span
                  >
                </td>
                <td class="py-2 px-4 border-b border-b-gray-50">
                  <span class="text-[13px] font-medium">{user.address}</span>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
