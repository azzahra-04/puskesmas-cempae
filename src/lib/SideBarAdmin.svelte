<script>
  export let subMenuItems = [];

  const icons = {
    Ruangan: "fa-solid fa-person-booth",
    Fasilitas: "fa-solid fa-house-medical",
    Artikel: "fa-solid fa-newspaper",
    Kegiatan: "fa-solid fa-hand-holding-medical",
    "Data Dokter": "fa-solid fa-user-doctor",
    "Data Admin Puskesmas": "fa-solid fa-file-shield",
    "Data Pengguna": "fa-solid fa-file-pen",
  };
</script>

<div
  class="fixed left-0 top-0 w-full h-full md:w-64 bg-dark-green p-4 z-50 sidebar-menu transition-transform"
>
  <div
    class="flex items-center justify-between pb-4 border-b border-b-gray-800"
  >
    <div class="flex items-center">
      <img
        src="../../images/lg_puskesmas.png"
        alt="Logo Puskesmas"
        class="w-8 h-8 rounded object-cover"
      />
      <span class="text-l font-bold ml-3">Puskesmas Cempae</span>
    </div>
    <!-- <a href="/admin-pkm/dashboard" class="md:hidden">
      <i class="fa-solid fa-xmark"></i>
    </a> -->
  </div>
  <ul class="mt-4">
    {#each subMenuItems as { title, href }}
      <li class="mb-1 group">
        <a
          {href}
          class="flex items-center py-2 px-4 text-sm hover:underline"
          class:font-semibold={title === "Beranda" ||
            title === "Kelola Data" ||
            title === "Keluar"}
          class:hover:no-underline={title === "Kelola Data"}
        >
          {#if icons[title]}
            <i class={icons[title] + " mr-2"}></i>
          {/if}
          {title}
        </a>
      </li>
    {/each}
  </ul>
</div>
<div
  class="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"
></div>
