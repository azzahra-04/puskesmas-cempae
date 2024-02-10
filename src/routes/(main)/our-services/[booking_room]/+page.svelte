<script>
  export let data;
</script>

<div
  class="pt-28 py-12 px-6 md:px-14 lg:px-40 border-b border-solid border-dark-green"
>
  <h2 class="my-4 text-center text-3xl font-semibold leading-none">
    {data.inpatientRoom.name}
  </h2>

  <hr class="border-b border-gray-300" />

  <img
    class="object-cover h-80 mx-auto rounded-full my-16"
    src={data.inpatientRoom.image}
    alt="Foto {data.inpatientRoom.name}"
  />

  <h2 class="my-6 text-xl text-center font-semibold leading-none">
    {data.users.fullName}
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
        <option selected>Pilih</option>
        <option value="Mandiri">Mandiri</option>
        <option value="Rujukan">Rujukan</option>
      </select>
    </div>
    <div class="mb-6">
      <label for="document" class="block mb-2 text-sm font-medium"
        >Upload Foto Dokumen Pendukung</label
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
      class="grow border-solid border-green border-[1px] px-6 py-2 rounded hover:bg-dark-green mr-4"
      >Konfirmasi</button
    >
    <a
      type="button"
      href="/our-services"
      class="grow bg-green px-6 py-2 rounded hover:bg-dark-green">Kembali</a
    >
  </form>
</div>
