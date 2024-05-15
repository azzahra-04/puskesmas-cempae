<script>
  export let form;
  let open = false;

  function handleClick() {
    if (form.success) {
      open = true;
      setTimeout(() => {
        open = false;
      }, 2000);
    }
  }
</script>

<!-- SAMBUTAN KEPALA PUSKESMAS -->
<section
  class="flex flex-col gap-10 px-6 md:flex-row items-center py-16 md:gap-0 lg:px-20"
>
  <div class="flex-1 text-center order-2 md:order-1 md:mt-32">
    <img
      class="object-cover w-48 h-full mx-auto rounded"
      src="./images/kepala-puskesmas.png"
      alt="Foto Kepala Puskesmas"
    />
    <h1 class="text-l mt-5">Muhammad Jufri, SKM., M.Kes</h1>
    <h1 class="text-sm mt-2">Kepala UPTD Puskesmas Cempae</h1>
  </div>
  <div class="flex-1 order-1 md:order-2 mt-24">
    <h2 class="mb-4 text-3xl font-extrabold text-center leading-none">
      KATA SAMBUTAN
    </h2>
    <hr class="mb-5 border-gray-300" />
    <p class="text-l leading-relaxed text-justify">
      Selamat datang di situs web resmi Puskesmas Cempae! Kami dengan tulus
      menyambut Anda sebagai pengunjung setia kami. Puskesmas Cempae hadir untuk
      memberikan pelayanan kesehatan yang terbaik kepada masyarakat.
    </p>
  </div>
</section>

<!-- VISI DAN MISI -->
<section
  class="bg-green px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:py-20"
>
  <div
    class="flex flex-col border border-dark-green bg-white rounded shadow-xl md:justify-center lg:flex-row"
  >
    <div
      class="flex flex-col justify-between p-5 border-b sm:p-10 lg:border-b-0 lg:border-r lg:w-1/2"
    >
      <div>
        <h2 class="mb-6 text-3xl font-extrabold text-center leading-none">
          VISI PUSKESMAS
        </h2>
        <p class="mb-6 text-base md:text-lg sm:mb-8">
          Puskesmas Cempae Sebagai Puskesmas Terdepan yang Mampu Mewujudkan
          Masyarakat Sehat Mandiri di Wilayah Kerjanya Tahun 2023.
        </p>
      </div>
    </div>
    <div class="flex flex-col justify-between p-5 sm:p-10 lg:w-1/2">
      <div>
        <h2 class="mb-6 text-3xl font-extrabold text-center leading-none">
          MISI PUSKESMAS
        </h2>
        <ol class="mb-6 pl-4 text-base md:text-lg sm:mb-8 list-decimal">
          <li>Memberikan Pelayanan Kesehatan yang Bermutu dan Profesional,</li>
          <li>
            Meningkatkan Pelayanan Kesehatan yang Terpadu dan Berkesinambungan,
          </li>
          <li>
            Mendorong Kemandirian Individu, Keluarga, dan Masyarakat untuk
            Berperilaku Hidup Bersih dan Sehat,
          </li>
          <li>Menjalin Kemitraan dengan Lintas Program dan Lintas Sektor</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<!-- DENAH -->
<section class="px-6 py-12">
  <h2 class="mb-4 text-3xl font-extrabold text-center leading-none">
    DENAH PUSKESMAS
  </h2>
  <div class="flex flex-col justify-center gap-10 md:flex-row">
    <img
      class="object-cover w-full md:w-1/2 p-2 lg:px-20 lg:py-10"
      src="./images/denah-puskesmas-lt1.png"
      alt="Denah Puskesmas Lantai 1"
    />
    <img
      class="object-cover w-full md:w-1/2 p-2 lg:px-20 lg:py-10"
      src="./images/denah-puskesmas-lt2.png"
      alt="Denah Puskesmas Lantai 2"
    />
  </div>
</section>

<!-- PETA WILAYAH KERJA -->
<section
  class="flex flex-col gap-10 md:flex-row py-14 px-6 lg:px-20 bg-green mb-5"
>
  <div class="flex-1 text-center lg:my-auto">
    <h2 class="mb-4 text-3xl font-extrabold leading-none">
      PETA WILAYAH KERJA
    </h2>
    <hr class="mb-5 border-gray-300" />
    <div class="container mx-auto max-w-3xl px-2">
      <p class="text-l leading-relaxed text-justify">
        Puskesmas Cempae secara aktif melayani dua kelurahan, yakni Bukit Indah
        dan Watang Soreang, dalam upaya memberikan pelayanan kesehatan yang
        unggul kepada masyarakat.
      </p>

      <p class="text-l leading-relaxed text-justify mt-4">
        Kami berkomitmen untuk meningkatkan kesejahteraan dan kesehatan
        masyarakat dengan menyediakan layanan berkualitas yang tetap terjangkau.
        Untuk detail lebih lanjut mengenai cakupan wilayah kerja kami, silakan
        lihat informasi pada gambar berikut.
      </p>
    </div>
  </div>
  <div class="flex-1 md:my-auto">
    <img
      class="object-cover"
      src="./images/peta-wilayah-kerja.jpg"
      alt="Peta Wilayah Kerja Puskesmas"
    />
  </div>
</section>

<!-- KONTAK KAMI -->
<section class="py-14 border-b border-solid border-green">
  <div class="max-w-screen-xl mx-auto px-4 md:px-8">
    <div class="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
      <div class="max-w-lg space-y-3">
        <h2 class="mb-4 text-3xl font-extrabold leading-none">KONTAK KAMI</h2>
        <p>
          Jika ada pertanyaan, kritik, atau saran terkait pelayanan kami, jangan
          ragu untuk menghubungi kami melalui form berikut.
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15920.485825188935!2d119.63634900000001!3d-3.9954410000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d95bae56cf39871%3A0xc1de2e67686687b8!2spuskesmas%20cempae!5e0!3m2!1sen!2sid!4v1705486740497!5m2!1sen!2sid"
          width="100%"
          height="450"
          title="Denah Lokasi Puskesmas"
          class="rounded"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
        <form action="?/add" method="POST" class="space-y-5">
          <div>
            <label for="name" class="font-medium">Nama Lengkap</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan Nama Lengkap"
              required
              class="text-sm w-full mt-2 px-3 py-2 outline-none border shadow-sm rounded"
            />
          </div>
          <div>
            <label for="email" class="font-medium">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Example@gmail.com"
              required
              class="text-sm w-full mt-2 px-3 py-2 outline-none border shadow-sm rounded"
            />
          </div>
          <div>
            <label for="message" class="font-medium">Kritik dan Saran</label>
            <textarea
              id="message"
              name="message"
              placeholder="Masukkan kritik dan saran"
              required
              class="text-sm w-full mt-2 h-36 px-3 py-2 resize-none appearance-none outline-none border shadow-sm rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            on:click={handleClick()}
            class="w-full px-4 py-2 text-black font-medium bg-green border rounded hover:bg-dark-green"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- Success Modals -->
{#if form?.success && open}
  <button class="fixed inset-0 w-full h-full bg-black bg-opacity-40">
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-auto px-4"
    >
      <div class="bg-white rounded-md shadow">
        <div class="space-y-6 py-8 px-6 mt-4 leading-relaxed">
          <p>Kritik dan saran Anda telah terkirim.</p>
          <i class="fa-regular fa-circle-check fa-5x text-dark-green"></i>
          <p>Terima Kasih.</p>
        </div>
      </div>
    </div>
  </button>
{/if}
