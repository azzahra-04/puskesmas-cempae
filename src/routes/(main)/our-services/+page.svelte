<script>
  /** @type {import('./$types').PageServerData} */
  export let data;
</script>

<div class="pt-28 py-12 px-6 md:px-14 border-b border-solid border-dark-green">
  <!-- ATURAN MENGUNJUNGI PASIEN -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
    <div class="rounded-lg shadow-xl border border-dark-green md:col-span-1">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th
              class="p-6 pb-0 mb-4 text-xl font-bold text-center tracking-tight dark:text-black"
            >
              Jam Kunjungan Pasien
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-6 pb-0">
              <h5 class="mb-4 text-xl font-bold tracking-tight dark:text-black">
                PAGI
              </h5>
              <p>10.00 - 12.00 WITA</p>
            </td>
          </tr>
          <tr>
            <td class="p-6 pb-0">
              <h5 class="mb-4 text-xl font-bold tracking-tight dark:text-black">
                SORE
              </h5>
              <p>16.00 - 20.00 WITA</p>
            </td>
          </tr>
          <tr>
            <td class="p-6 text-red font-semibold">
              <i class="fa-solid fa-circle-exclamation"></i> Anak Usia &lt; 12 Tahun
              Tidak Diizinkan Ikut Membesuk Orang Sakit
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="rounded-lg shadow-xl border border-dark-green md:col-span-2">
      <div class="p-6">
        <h5 class="mb-4 text-xl font-bold tracking-tight text-center">
          Untuk Ketenangan dan Kenyamanan Pasien
        </h5>
        <ol class="mt-4 list-decimal pl-6 leading-relaxed">
          <li class="mb-2">Lakukan kunjungan sesuai jam kunjungan pasien</li>
          <li class="mb-2">Lakukan kunjungan secara bergantian</li>
          <li class="mb-2">
            Segera meninggalkan ruang perawatan pasien apabila jam kunjungan
            telah selesai
          </li>
          <li class="mb-2">
            Jaga ketenangan dan kebersihan selama di lingkungan Puskesmas
          </li>
          <li class="mb-2">
            Dilarang merokok selama berada di lingkungan Puskesmas
          </li>
          <li class="mb-2">
            Tetap memperhatikan protokol kesehatan (memakai masker, cuci tangan,
            menjaga jarak, dan hindari kerumunan)
          </li>
        </ol>
      </div>
    </div>
  </div>

  <div class="bg-green p-5 rounded">
    <h1 class="text-2xl font-bold mb-4">Layanan Puskesmas</h1>
    <p class="text-l leading-relaxed text-justify mb-2">
      Puskesmas menghadirkan fasilitas layanan rawat inap dan kamar bersalin
      sebagai bagian integral dari komitmen mereka untuk memberikan perawatan
      kesehatan yang holistik dan terjangkau kepada seluruh lapisan masyarakat.
    </p>
  </div>

  <!-- List Card Room -->
  <!-- <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
    {#each data.inpatientRooms as { _id: id, name, image, totalBed, emptyBed, filledBed }}
      <div class="rounded-lg shadow-xl mx-auto border border-dark-green">
        <img class="p-5" src={image} alt="" />
        <div class="p-5 py-0">
          <div class="flex flex-row">
            <p class="font-semibold">
              Total Kamar: {totalBed}
            </p>
            <p>
              &nbsp;| {filledBed} Terisi |&nbsp;
            </p>
            <p class="mb-3 font-normal text-justify">
              {emptyBed} Kosong
            </p>
          </div>
          <h5 class="mb-4 text-xl font-bold tracking-tight dark:text-black">
            {name}
          </h5>
        </div>
        <div class="flex justify-center">
          {#if filledBed < totalBed}
            <a
              href="/our-services/{id}"
              class="bg-green px-4 py-2 mb-4 text-sm font-medium leading-5 text-center rounded hover:bg-dark-green"
              >Booking Kamar</a
            >
          {:else if filledBed === totalBed}
            <button
              class="bg-grey px-4 py-2 mb-4 text-sm font-medium leading-5 text-center rounded"
              disabled>Kamar Penuh</button
            >
          {/if}
        </div>
      </div>
    {/each}
  </div> -->
</div>
