<script>
  export let data;
  export let form;
  let open = false;

  function handleClick() {
    if (form.success) {
      open = true;
      setTimeout(() => {
        open = false;
      }, 2000);
    }
  }

  function getCurrentDate() {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }

  function getMaxDate() {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 3);
    return maxDate.toISOString().split("T")[0];
  }
</script>

<div
  class="pt-28 py-12 px-6 md:px-14 lg:px-40 border-b border-solid border-dark-green"
>
  <h2
    class="my-6 text-center text-3xl font-semibold leading-none border-b pb-4"
  >
    {data.inpatientRoom.name}
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-3">
    <img
      class="object-cover h-80 px-4 my-auto rounded-full md:col-span-1"
      src={data.inpatientRoom.image}
      alt="Foto {data.inpatientRoom.name}"
    />

    <div class="m-4 px-4 md:col-span-2 md:ml-4">
      <h2 class="my-4 text-xl text-center leading-none">
        Nama Lengkap : {data.users.fullName}
      </h2>
      <form action="?/bookingRoom" method="POST" enctype="multipart/form-data">
        <div class="mb-6">
          <label for="complaint" class="block mb-2 text-sm font-medium"
            >Keluhan</label
          >
          <input
            type="text"
            id="complaint"
            name="complaint"
            class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            required
          />
        </div>
        <div class="mb-6">
          <label for="visit-date" class="block mb-2 text-sm font-medium"
            >Tanggal Masuk</label
          >
          <input
            class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            id="visit-date"
            name="visit-date"
            type="date"
            min={getCurrentDate()}
            max={getMaxDate()}
            required
          />
        </div>
        <div class="mb-6">
          <label for="status" class="block mb-2 text-sm font-medium"
            >Alasan Pengajuan Kamar</label
          >
          <select
            id="status"
            name="status"
            class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            required
          >
            <option value="" selected disabled>Pilih</option>
            <option value="Mandiri">Mandiri</option>
            <option value="Rujukan">Rujukan</option>
          </select>
        </div>
        <div class="mb-6">
          <label for="document" class="block mb-2 text-sm font-medium"
            >Upload Dokumen Pendukung</label
          >
          <input
            class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            id="document"
            name="document"
            type="file"
          />
          <p class="text-xs pt-2">JPG, PNG, SVG, GIF, WEBP</p>
        </div>

        <button
          type="submit"
          on:click={handleClick()}
          class="grow bg-green px-6 py-2 rounded hover:bg-dark-green"
          >Konfirmasi</button
        >
      </form>
    </div>
  </div>
</div>

<!-- Success Modals -->
{#if form?.success && open}
  <button class="fixed inset-0 w-full h-full bg-black bg-opacity-40">
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-auto px-4"
    >
      <div class="bg-white rounded-md shadow">
        <div class="flex items-center justify-between p-4 border-b">
          <h2 class="text-lg font-medium text-gray-800">Berhasil Mendaftar</h2>
        </div>
        <div class="space-y-6 py-8 px-6 mt-4 leading-relaxed">
          <i class="fa-regular fa-circle-check fa-5x text-dark-green"></i>
          <p>Silakan konfirmasi ke Puskesmas.</p>
        </div>
      </div>
    </div>
  </button>
{/if}
