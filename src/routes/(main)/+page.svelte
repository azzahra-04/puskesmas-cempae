<script>
  /** @type {import('./$types').PageServerData} */
  export let data;

  // Ambil 3 data artikel terbaru
  let articlesData = data.articles;
  let latestArticles = articlesData.slice(-3);

  let features = [
    {
      icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' class='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' />
          </svg>`,
      title: "Upaya Kesehatan Perorangan (UKP)",
      desc: "Puskesmas memberikan layanan kesehatan personal seperti diagnosis, pengobatan, dan konseling kepada individu.",
    },
    {
      icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' class='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3' />
          </svg>`,
      title: "Upaya Kesehatan Masyarakat (UKM)",
      desc: "Puskesmas fokus pada tindakan preventif dan promotif untuk meningkatkan kesehatan masyarakat secara kolektif.",
    },
    {
      icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' class='w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h

0a11.959 11.959 0 00-8.402-3.714V2.714z' />
          </svg>`,
      title: "Pelayanan Mutu Puskesmas",
      desc: "Puskesmas berkomitmen untuk memberikan pelayanan kesehatan berkualitas dengan pengawasan terhadap proses pelayanan dan pelatihan staf.",
    },
    {
      icon: `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' class='w-6 h-6'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' />
      </svg>`,
      title: "Jaringan Pelayanan Puskesmas",
      desc: "Puskesmas bekerja sama dengan fasilitas kesehatan lainnya untuk memastikan akses pelayanan kesehatan terintegrasi dan merata bagi masyarakat.",
    },
  ];
</script>

<!-- Hero Section -->
<div class="pt-20 flex items-center justify-center">
  <img src="/images/profil-puskesmas.jpeg" alt="" class="w-full" />
</div>

<!-- Jenis Pelayanan -->
<div class="py-16 sm:max-w-xl md:max-w-full md:px-16 lg:px-12">
  <div class="max-w-screen-xl mx-auto px-4 md:px-8">
    <div class="max-w-2xl mx-auto sm:text-center">
      <h2 class="mb-4 text-3xl font-extrabold leading-none">
        Jenis Pelayanan Puskesmas
      </h2>
    </div>
    <div class="mt-12">
      <ul class="grid gap-8 sm:grid-cols-2">
        {#each features as feature}
          <li class="bg-white space-y-3 p-4 border rounded-lg">
            <div class="flex items-center mb-4">
              {@html feature.icon}
            </div>
            <h5 class="text-lg font-semibold">{feature.title}</h5>
            <p class="mt-2 text-base">{feature.desc}</p>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<!-- Artikel Kesehatan -->
<div
  class="bg-green px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:px-12 lg:py-12"
>
  <h2 class="mb-4 text-3xl font-extrabold leading-none">Artikel Kesehatan</h2>
  <p class="md:text-lg leading-relaxed text-justify mb-2">
    Jelajahi beragam pengetahuan kesehatan yang inspiratif dan membantu Anda
    meraih hidup lebih sehat melalui rangkaian artikel informatif di blog kami.
  </p>
  <a href="/articles" class="text-l hover:opacity-80"
    >Lihat semua Artikel <i class="fa-solid fa-arrow-right"></i></a
  >

  <!-- List Card Articles -->
  <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-10 mt-5">
    {#each latestArticles as { _id: id, title, image, created_at }}
      <div class="mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-4">
        <img
          class="object-cover w-full h-48"
          src={image}
          alt="Gambar Artikel {id}"
        />

        <div class="p-6">
          <div class="flex items-center justify-between">
            <span class="text-sm mb-2">{created_at}</span>
          </div>
          <a
            href="/articles/{id}"
            class="font-semibold text-xl mb-2 line-clamp-2 hover:underline"
          >
            {title}
          </a>
          <a href="/articles/{id}" class="text-sm hover:opacity-80"
            >Selengkapnya <i class="fa-solid fa-arrow-right"></i></a
          >
        </div>
      </div>
    {/each}
  </div>
</div>

<!-- Maklumat Pelayanan -->
<div
  class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20"
>
  <div class="grid gap-10 lg:grid-cols-2">
    <img
      src="/images/sertifikat-akreditasi.webp"
      alt="Sertifikat Akreditasi"
      class="w-full mx-auto rounded shadow-lg mb-14 md:4/6 md:mb-0 lg:w-3/4"
    />
    <div class="max-w-2xl sm:text-center sm:mx-auto my-auto">
      <h2 class="mb-4 text-3xl font-extrabold leading-none">
        <span class="inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect
              fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
              width="52"
              height="24"
            ></rect>
          </svg>
          Maklumat Pelayanan
        </span>
      </h2>
      <hr class="my-8 border-gray-300" />
      <p class="leading-loose md:text-lg">
        Dengan ini Menyatakan Kami Sanggup Melaksanakan Pelayanan Sesuai Standar
        yang Telah Ditetapkan Secara Konsisten Bersedia Menerima Kritik/Saran
        Apabila Pelayanan Kami Belum/Tidak Sesuai Standar Serta Melakukan
        Perbaikan dan Peningkatan Pelayanan Secara Terus Menerus.
      </p>
    </div>
  </div>
</div>

<!-- Tentang Puskesmas -->
<div
  class="bg-green px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20"
>
  <div class="grid gap-10 lg:grid-cols-2">
    <div class="lg:pr-10">
      <div class="flex items-center justify-center w-12 h-12 rounded-full mb-2">
        <i class="fa-solid fa-house-medical-circle-check fa-2xl"></i>
      </div>
      <h2 class="mb-4 text-3xl font-extrabold leading-none">
        Tentang Puskesmas
      </h2>
      <hr class="mb-5 border-gray-300" />
      <div class="container mx-auto max-w-3xl px-2">
        <p class="text-l leading-relaxed text-justify">
          Puskesmas Cempae, pusat kesehatan yang berlokasi strategis di wilayah
          Kecamatan Soreang, kota Parepare. Puskesmas Cempae melayani dua
          kelurahan, yaitu Bukit Indah dan Watang Soreang.
        </p>

        <p class="text-l leading-relaxed text-justify mt-4">
          Di Puskesmas Cempae, kita tak hanya memberikan pelayanan kesehatan,
          tetapi juga berkomitmen menjadi garda terdepan dalam mewujudkan
          masyarakat yang memiliki kesehatan optimal dan mandiri di lingkungan
          tempat kami beroperasi.
        </p>
      </div>
    </div>
    <div>
      <iframe
        class="object-cover w-full h-56 rounded shadow-lg sm:h-96"
        src="https://www.youtube.com/embed/8jocCWQbwFo"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</div>

<!-- Testimoni User -->
<!-- <div class="py-12 px-6 md:px-14 border-b border-solid border-dark-green">
  <h2 class="mb-8 text-3xl font-extrabold leading-none text-center">
    Apa yang mereka katakan tentang Kami
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
    {#each data.testimonial as { _id: id, name, image, message }}
      <div class="mx-auto rounded-xl overflow-hidden shadow-md mb-4 px-6 py-8">
        <div class="flex items-center">
          <img
            src={image}
            alt="Profile User {id}"
            class="w-12 h-12 object-cover rounded-full mr-4 border-2 border-white"
          />
          <h3 class="text-l font-semibold text-gray-900">{name}</h3>
        </div>
        <p class="mt-2 text-gray-600 text-sm">
          <i class="fa-solid fa-quote-left"></i>{message}
        </p>
      </div>
    {/each}
  </div>
</div> -->
