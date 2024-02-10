<script>
  export let data;
</script>

<div class="pt-8 py-12 px-6 md:px-14 lg:px-40">
  <h2 class="my-4 text-center text-3xl font-semibold leading-none">
    Edit Data Admin Puskesmas
  </h2>

  <hr class="border-b border-gray-300" />

  <form
    action="?/edit"
    class="pt-12"
    method="POST"
    enctype="multipart/form-data"
  >
    <div class="mb-6">
      <label for="name" class="block mb-2 text-sm font-medium"
        >Nama Lengkap</label
      >
      <input
        type="text"
        id="name"
        name="name"
        value={data.adminPuskesmas.name}
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>
    <div class="mb-6">
      <label for="phone" class="block mb-2 text-sm font-medium"
        >No. Telepon</label
      >
      <input
        type="number"
        id="phone"
        name="phone"
        value={data.adminPuskesmas.telephoneNumber}
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
        value={data.adminPuskesmas.address}
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>
    <button
      type="submit"
      class="grow border-solid border-green border-[1px] px-6 py-2 rounded hover:bg-dark-green mr-4"
      >Edit</button
    >
    <a
      type="button"
      href="/admin/dashboard/admin-data"
      class="grow bg-green px-6 py-2 rounded hover:bg-dark-green">Kembali</a
    >
  </form>
</div>
