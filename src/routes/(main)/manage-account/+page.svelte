<script>
  export let data;
</script>

<div
  class="pt-28 py-12 px-6 md:px-14 lg:px-32 border-b border-solid border-dark-green"
>
  <h2 class="my-4 text-center text-3xl font-semibold">Kelola Akun</h2>
  <hr class="border-b border-gray-300 lg:mx-80" />

  <img
    class="rounded-full w-40 h-40 my-8 mx-auto"
    src={data.user.image || "https://via.placeholder.com/200"}
    alt="Profile User"
  />
  <form action="?/editProfile" method="POST" enctype="multipart/form-data">
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
      <div>
        <label for="image" class="block mb-2 text-sm font-medium"
          >Update Profile</label
        >
        <input
          class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
          id="image"
          name="image"
          type="file"
        />
        <p class="text-xs pt-2">JPG, PNG, SVG, GIF, WEBP</p>
      </div>
      <div>
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
      class="grow border-solid border-green border-[1px] px-6 py-2 rounded hover:bg-dark-green mr-4"
      >Simpan Perubahan</button
    >
    <a
      type="button"
      href="/"
      class="grow bg-green px-6 py-2 rounded hover:bg-dark-green">Kembali</a
    >
  </form>
</div>
