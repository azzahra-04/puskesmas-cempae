<script>
  export let data;
</script>

<div
  class="pt-28 py-12 px-6 md:px-14 lg:px-32 border-b border-solid border-dark-green"
>
  <h2 class="my-4 text-center text-3xl font-semibold">Kelola Akun</h2>
  <hr class="border-b border-gray-300 mb-12 lg:mx-80" />

  <div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
    <!-- Card 1: Foto Profile -->
    <div
      class="bg-white border border-solid border-dark-green rounded shadow-md p-6 mx-auto w-fit h-fit lg:col-span-1"
    >
      <h2 class="my-4 text-center text-xl font-semibold">Foto Profile</h2>
      <img
        class="rounded-full w-40 h-40 mt-4 mx-auto"
        src={data.user.image || "https://via.placeholder.com/200"}
        alt="Profile User"
      />

      <form
        action="?/editFotoProfile"
        method="POST"
        enctype="multipart/form-data"
        class="mt-6 flex w-full"
      >
        <div>
          <input
            id="image"
            name="image"
            type="file"
            class="absolute opacity-0 cursor-pointer"
            onchange="document.getElementById('file-name').textContent = this.files.length > 0 ? this.files[0].name : ''"
          />
          <label
            for="image"
            class="text-sm bg-white border border-gray-300 border-r-0 rounded-l shadow-sm py-2 px-8 inline-block cursor-pointer"
          >
            Pilih Foto
          </label>
        </div>

        <button
          type="submit"
          class="bg-green text-sm px-4 py-2 rounded-r transition-colors duration-300 ease-in-out hover:bg-dark-green"
        >
          Perbarui
        </button>
      </form>
      <span id="file-name" class="text-xs"></span>
      <p class="text-xs pt-2">JPG, PNG, SVG, GIF, WEBP</p>
    </div>

    <!-- Card 2: Detail Profile -->
    <div
      class="bg-white border border-solid border-dark-green rounded shadow-md p-6 lg:col-span-2"
    >
      <h2 class="my-4 text-center text-xl font-semibold">Detail Akun</h2>
      <form
        action="?/editDetailProfile"
        method="POST"
        enctype="multipart/form-data"
      >
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label for="full-name" class="block mb-2 text-sm font-medium"
              >Nama Lengkap</label
            >
            <input
              type="text"
              id="full-name"
              name="full-name"
              value={data.user.fullName}
              class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            />
          </div>
          <div>
            <label for="gender" class="block mb-2 text-sm font-medium"
              >Jenis Kelamin</label
            >
            <select
              id="gender"
              name="gender"
              value={data.user.gender}
              class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            >
              <option selected disabled>Pilih</option>
              <option value="Perempuan">Perempuan</option>
              <option value="Laki-laki">Laki-laki</option>
            </select>
          </div>
          <div>
            <label for="date-of-birth" class="block mb-2 text-sm font-medium"
              >Tanggal Lahir</label
            >
            <input
              type="date"
              id="date-of-birth"
              name="date-of-birth"
              value={data.user.dateOfBirth}
              class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            />
          </div>
          <div>
            <label for="phone" class="block mb-2 text-sm font-medium"
              >No. Telepon</label
            >
            <input
              type="number"
              id="phone"
              name="phone"
              value={data.user.telephoneNumber}
              class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            />
          </div>
          <div class="md:col-span-2">
            <label for="address" class="block mb-2 text-sm font-medium"
              >Alamat</label
            >
            <input
              id="address"
              name="address"
              value={data.user.address}
              class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
            />
          </div>
        </div>

        <button
          type="submit"
          class="grow bg-green text-sm px-6 py-2 rounded transition-colors duration-300 ease-in-out hover:bg-dark-green"
          >Simpan Perubahan</button
        >
      </form>
    </div>
  </div>
</div>
