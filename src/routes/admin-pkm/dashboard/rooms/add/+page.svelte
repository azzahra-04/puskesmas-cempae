<script>
  export let form;
</script>

<div class="pt-8 py-12 px-6 md:px-14 lg:px-40">
  <h2 class="my-4 text-center text-3xl font-semibold leading-none">
    Tambah Data Ruangan Rawat Inap
  </h2>

  <hr class="border-b border-gray-300" />

  {#if form?.error}
    <div class="flex items-center p-4 my-4 text-sm border rounded" role="alert">
      <i class="fa-solid fa-circle-exclamation" style="color: red;"></i>
      &nbsp;
      <p class="font-medium text-red">
        Data gagal ditambahkan! Silakan coba lagi.
      </p>
    </div>
  {/if}

  <form action="?/add" class="pt-4" method="POST" enctype="multipart/form-data">
    <div class="mb-6">
      <label for="name" class="block mb-2 text-sm font-medium"
        >Nama Ruangan</label
      >
      <input
        type="text"
        id="name"
        name="name"
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>
    <div class="flex flex-row gap-6">
      <div class="mb-6 w-full">
        <label for="totalBed" class="block mb-2 text-sm font-medium"
          >Jumlah Kamar</label
        >
        <input
          type="number"
          id="totalBed"
          name="totalBed"
          class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
          required
        />
      </div>
      <div class="mb-6 w-full">
        <label for="emptyBed" class="block mb-2 text-sm font-medium"
          >Kamar Kosong</label
        >
        <input
          type="number"
          id="emptyBed"
          name="emptyBed"
          class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
          required
        />
      </div>
      <div class="mb-6 w-full">
        <label for="filledBed" class="block mb-2 text-sm font-medium"
          >Kamar Terisi</label
        >
        <input
          type="number"
          id="filledBed"
          name="filledBed"
          class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
          required
        />
      </div>
    </div>
    <div class="mb-6">
      <label for="image" class="block mb-2 text-sm font-medium"
        >Upload Foto Ruangan</label
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
      >Tambah Data</button
    >
    <a
      type="button"
      href="/admin-pkm/dashboard/rooms"
      class="grow bg-green px-6 py-2 rounded hover:bg-dark-green">Kembali</a
    >
  </form>
</div>
