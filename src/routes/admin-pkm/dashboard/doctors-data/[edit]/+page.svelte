<script>
  export let data;
  export let form;
</script>

<div class="pt-8 py-12 px-6 md:px-14 lg:px-40">
  <h2 class="my-4 text-center text-3xl font-semibold leading-none">
    Edit Data Dokter Puskesmas
  </h2>

  <hr class="border-b border-gray-300" />

  {#if form?.success}
    <div class="flex items-center p-4 my-4 text-sm border rounded" role="alert">
      <i class="fa-solid fa-circle-check" style="color: green;"></i>
      &nbsp;
      <p class="font-medium">Data berhasil diperbarui!</p>
    </div>
  {:else if form?.error}
    <div class="flex items-center p-4 my-4 text-sm border rounded" role="alert">
      <i class="fa-solid fa-circle-exclamation" style="color: red;"></i>
      &nbsp;
      <p class="font-medium text-red">
        Data gagal diperbarui! Silakan coba lagi.
      </p>
    </div>
  {/if}

  {#if form?.message}
    <div class="flex items-center p-4 mt-4 text-sm border rounded" role="alert">
      <i class="fa-solid fa-circle-exclamation"></i>
      &nbsp;
      <p class="font-medium">{form.message}</p>
    </div>
  {/if}

  <img
    src={data.doctorsSchedule.image}
    class="w-1/2 rounded mx-auto mt-10"
    alt="Foto Artikel"
  />

  <form
    action="?/edit"
    class="pt-12"
    method="POST"
    enctype="multipart/form-data"
  >
    <div class="mb-6">
      <label for="name" class="block mb-2 text-sm font-medium"
        >Nama Lengkap Dokter</label
      >
      <input
        type="text"
        id="name"
        name="name"
        value={data.doctorsSchedule.name}
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>
    <div class="mb-6">
      <label for="practiceLicense" class="block mb-2 text-sm font-medium"
        >No. Surat Izin Praktik (SIP)</label
      >
      <input
        type="number"
        id="practiceLicense"
        name="practiceLicense"
        value={data.doctorsSchedule.practiceLicense}
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
      />
    </div>
    <div class="mb-6">
      <label for="telephoneNumber" class="block mb-2 text-sm font-medium"
        >No. Telepon</label
      >
      <input
        type="number"
        id="telephoneNumber"
        name="telephoneNumber"
        value={data.doctorsSchedule.telephoneNumber}
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>
    <div class="mb-6">
      <label for="address" class="block mb-2 text-sm font-medium">Alamat</label>
      <input
        type="text"
        id="address"
        name="address"
        value={data.doctorsSchedule.address}
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>
    <div class="mb-6">
      <label for="specialist" class="block mb-2 text-sm font-medium"
        >Spesialis</label
      >
      <input
        type="text"
        id="specialist"
        name="specialist"
        value={data.doctorsSchedule.specialist}
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>
    <div class="mb-6">
      <label for="practiceSchedule" class="block mb-2 text-sm font-medium"
        >Jadwal Praktek</label
      >
      <input
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        id="practiceSchedule"
        name="practiceSchedule"
        value={data.doctorsSchedule.practiceSchedule}
        type="text"
        required
      />
    </div>
    <div class="mb-6">
      <label for="image" class="block mb-2 text-sm font-medium"
        >Edit Foto Dokter</label
      >
      <input
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        id="image"
        name="image"
        type="file"
        accept="image/*"
      />
      <p class="text-xs pt-2">JPG, PNG, SVG, GIF, WEBP</p>
    </div>

    <button
      type="submit"
      class="grow border-solid border-green border-[1px] px-6 py-2 rounded hover:bg-dark-green mr-4"
      >Edit</button
    >
    <a
      type="button"
      href="/admin-pkm/dashboard/doctors-data"
      class="grow bg-green px-6 py-2 rounded hover:bg-dark-green">Kembali</a
    >
  </form>
</div>
