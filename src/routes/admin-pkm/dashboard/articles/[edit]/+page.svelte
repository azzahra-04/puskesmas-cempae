<script>
  export let data;
</script>

<div class="pt-8 py-12 px-6 md:px-14 lg:px-40">
  <h2 class="my-4 text-center text-3xl font-semibold leading-none">
    Edit Data Kegiatan Puskesmas
  </h2>

  <hr class="border-b border-gray-300" />

  <img
    src={data.article.image}
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
      <label for="title" class="block mb-2 text-sm font-medium"
        >Judul Artikel</label
      >
      <input
        type="text"
        id="title"
        name="title"
        value={data.article.title}
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>
    <div class="mb-6">
      <label for="description" class="block mb-2 text-sm font-medium"
        >Deksripsi Artikel</label
      >
      <textarea
        type="text"
        id="description"
        name="description"
        value={data.article.description}
        rows="10"
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>
    <div class="mb-6">
      <label for="image" class="block mb-2 text-sm font-medium"
        >Edit Gambar Artikel</label
      >

      <input
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        id="image"
        name="image"
        type="file"
        accept="image/*"
        value={data.article.image}
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
      href="/admin-pkm/dashboard/articles"
      class="grow bg-green px-6 py-2 rounded hover:bg-dark-green">Kembali</a
    >
  </form>
</div>
