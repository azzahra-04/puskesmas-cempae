<div
  class="pt-28 py-12 px-6 md:px-14 lg:px-40 border-b border-solid border-dark-green"
>
  <div class="mt-4 mb-16 border-b border-gray-300 text-center">
    <h2 class="mb-4 text-3xl font-semibold leading-none">Antrian Online</h2>
    <h2 class="mb-4 text-3xl font-normal leading-none">
      UPTD Puskesmas Cempae
    </h2>
  </div>

  <form method="POST" action="?/add">
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
      <label for="poli" class="block mb-2 text-sm font-medium">Pilih Poli</label
      >
      <select
        id="poli"
        name="poli"
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      >
        <option selected>Pilih Poli</option>
        <option value="Poli Umum">Poli Umum</option>
        <option value="POli Gigi">Poli Gigi</option>
        <option value="Poli KIA">Poli KIA</option>
      </select>
    </div>
    <div class="mb-6">
      <label for="visit-date" class="block mb-2 text-sm font-medium"
        >Tanggal Daftar</label
      >
      <input
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        id="visit-date"
        type="date"
        name="visit-date"
        required
      />
    </div>

    <button
      type="submit"
      class="grow border-solid border-green border-[1px] px-6 py-2 rounded hover:bg-dark-green mr-4"
      >Konfirmasi</button
    >
    <a
      type="button"
      href="/doctor-schedules"
      class="grow bg-green px-6 py-2 rounded hover:bg-dark-green">Kembali</a
    >
  </form>
</div>
