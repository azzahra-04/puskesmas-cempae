<script>
  export let data;
  export let form;
</script>

<div class="pt-8 py-12 px-6 md:px-14 lg:px-40">
  <h2 class="my-4 text-center text-3xl font-semibold leading-none">
    Edit Data Kegiatan Puskesmas
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
    src={data.activity.image}
    class="w-1/2 rounded mx-auto mt-10"
    alt="Foto Kegiatan"
  />

  <form
    action="?/edit"
    class="pt-12"
    method="POST"
    enctype="multipart/form-data"
  >
    <div class="mb-6">
      <label for="title" class="block mb-2 text-sm font-medium"
        >Judul Kegiatan</label
      >
      <input
        type="text"
        id="title"
        name="title"
        value={data.activity.title}
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>
    <div class="mb-6">
      <label for="created_at" class="block mb-2 text-sm font-medium"
        >Tanggal Kegiatan</label
      >
      <input
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        id="created_at"
        name="created_at"
        value={data.activity.created_at}
        type="date"
        required
      />
    </div>
    <div class="mb-6">
      <label for="location" class="block mb-2 text-sm font-medium"
        >Lokasi Kegiatan</label
      >
      <input
        type="text"
        id="location"
        name="location"
        value={data.activity.location}
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>
    <div class="mb-6">
      <label for="description" class="block mb-2 text-sm font-medium"
        >Deksripsi Kegiatan</label
      >
      <textarea
        type="text"
        id="description"
        name="description"
        value={data.activity.description}
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        rows="10"
        required
      />
    </div>
    <div class="mb-6">
      <label for="image" class="block mb-2 text-sm font-medium"
        >Edit Dokumentasi Kegiatan</label
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
      href="/admin-pkm/dashboard/activities"
      class="grow bg-green px-6 py-2 rounded hover:bg-dark-green">Kembali</a
    >
  </form>
</div>
