<script>
  /** @type {import('./$types').PageServerData} */
  export let data;

  let searchValue = "";
  let filteredData = data.users;

  function handleSearch() {
    let filter = searchValue.toLowerCase();
    filteredData = data.users.filter((user) => {
      return user.fullName.toLowerCase().includes(filter);
    });
  }

  // Panggil handleSearch setiap kali searchValue berubah
  $: handleSearch();
</script>

<div class="p-6">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
    <!-- 6 card awal -->
    <div
      class="bg-white border border-dark-green flex flex-row rounded-md p-6 shadow-md shadow-black/5"
    >
      <div class="flex items-center mr-4">
        <i class="fa-solid fa-person-booth fa-2xl mr-4"></i>
        <div class="flex flex-col ml-4">
          <div class="text-sm font-semibold mb-1">
            {#await data.inpatientRoomsCount}
              Loading...
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
          <div class="text-sm font-semibold mb-1">
            {#await data.facilitiesCount}
              Loading...
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
          <div class="text-sm font-semibold mb-1">
            {#await data.articlesCount}
              Loading...
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
          <div class="text-sm font-semibold mb-1">
            {#await data.activitiesCount}
              Loading...
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
          <div class="text-sm font-semibold mb-1">
            {#await data.doctorSchedulesCount}
              Loading...
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
    <div
      class="bg-white border border-dark-green flex flex-row rounded-md p-6 shadow-md shadow-black/5"
    >
      <div class="flex items-center mr-4">
        <i class="fa-solid fa-users fa-2xl mr-4"></i>
        <div class="flex flex-col ml-4">
          <div class="text-sm font-semibold mb-1">
            {#await data.usersCount}
              Loading...
            {:then count}
              {count}
            {:catch error}
              {error.message}
            {/await}
          </div>
          <div class="text-sm">Pengguna</div>
        </div>
      </div>
    </div>
    <div
      class="bg-white border border-dark-green flex flex-row rounded-md p-6 shadow-md shadow-black/5"
    >
      <div class="flex items-center mr-4">
        <i class="fa-solid fa-comments fa-2xl mr-4"></i>
        <div class="flex flex-col ml-4">
          <div class="text-sm font-semibold mb-1">
            {#await data.feedbacksCount}
              Loading...
            {:then count}
              {count}
            {:catch error}
              {error.message}
            {/await}
          </div>
          <div class="text-sm">Laporan</div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
    <div
      class="bg-white border border-dark-green shadow-md shadow-black/5 p-6 rounded-md"
    >
      <div class="flex justify-between mb-4 items-start">
        <div class="font-semibold">Dokter Puskesmas</div>
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
        <div class="font-semibold">Data Pengguna</div>
      </div>
      <div class="relative w-full mr-2 mb-4">
        <input
          type="text"
          class="py-2 pr-4 pl-10 w-full outline-none border border-gray-100 rounded-md text-sm"
          bind:value={searchValue}
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
            {#if filteredData.length > 0}
              {#each filteredData as { image, fullName, telephoneNumber, address }}
                <tr>
                  <td class="py-2 px-4 border-b border-b-gray-50">
                    <div class="flex items-center">
                      <img
                        src={image}
                        alt=""
                        class="w-8 h-8 rounded-full object-cover block"
                      />
                      <p class="text-sm font-medium ml-2">{fullName}</p>
                    </div>
                  </td>
                  <td class="py-2 px-4 border-b border-b-gray-50">
                    <span class="text-[13px] font-medium"
                      >{telephoneNumber ? telephoneNumber : "-"}</span
                    >
                  </td>
                  <td class="py-2 px-4 border-b border-b-gray-50">
                    <span class="text-[13px] font-medium">{address}</span>
                  </td>
                </tr>
              {/each}
            {:else}
              <tr>
                <td colspan="4" class="py-2 px-4 text-center">
                  <p class="text-sm">Tidak ada pengguna yang ditemukan.</p>
                </td>
              </tr>
            {/if}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
