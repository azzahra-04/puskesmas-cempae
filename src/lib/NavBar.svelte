<script>
  import { page } from "$app/stores";

  $: routeId = $page.route.id;

  let showSubMenu = false;

  function toggleSubMenu() {
    showSubMenu = !showSubMenu;
  }

  function closeSubMenu() {
    showSubMenu = false;
  }

  function openSidebar() {
    document.querySelector(".sidebar-menu").classList.remove("hidden");
    document.querySelector(".sidebar-menu").classList.add("animate-show");
  }

  function closeSidebar() {
    document.querySelector(".sidebar-menu").classList.add("hidden");
  }
</script>

<nav
  class="py-4 px-6 fixed w-full md:bg-opacity-90 bg-white backdrop-blur-sm shadow-lg z-20"
>
  <div class="container mx-auto">
    <div class="flex items-center justify-between">
      <div class="flex items-center order-1 sm:order-2">
        <img
          src="/images/lg_puskesmas.png"
          alt="Logo Puskesmas"
          width="50"
          height="50"
        />
        <a href="/" class="text-black font-bold text-xl p-3">Puskesmas Cempae</a
        >
      </div>
      <button class="order-2 lg:hidden" on:click={openSidebar}
        ><i class="fa-solid fa-bars fa-2xl"></i></button
      >
      <div class="order-2 hidden lg:block">
        <ul class="flex gap-10">
          <li>
            <a href="/" class:active={routeId == "/(main)"}>Beranda</a>
          </li>
          <li>
            <button on:mouseenter={toggleSubMenu} class="cursor-pointer">
              Pusat Informasi <i class="fa-solid fa-angle-down"></i>
            </button>
            <ul
              class="{showSubMenu
                ? 'animate-show'
                : 'hidden'} rounded bg-white absolute top-[50px] w-[180px] shadow-md p-2 mt-12"
              on:mouseleave={closeSubMenu}
            >
              <li class="p-2 hover:bg-green">
                <a href="/our-services">Layanan</a>
              </li>
              <li class="p-2 hover:bg-green">
                <a href="/facilities">Fasilitas</a>
              </li>
              <li class="p-2 hover:bg-green">
                <a href="/articles">Artikel</a>
              </li>
              <li class="p-2 hover:bg-green">
                <a href="/activities">Kegiatan</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="/doctor-schedules"
              class:active={routeId == "/(main)/doctor-schedules"}
              >Jadwal Dokter</a
            >
          </li>
          <li>
            <a href="/about-us" class:active={routeId == "/(main)/about-us"}
              >Tentang</a
            >
          </li>
        </ul>
      </div>

      <div class="hidden order-3 items-center justify-center lg:block">
        {#if $page.data.credential}
          <div class="flex items-center">
            <a href="/manage-account">
              <img
                src="https://via.placeholder.com/200"
                alt=""
                class="w-10 h-10 rounded-full mr-4"
              />
            </a>
            <form action="/logout" method="POST">
              <button
                type="submit"
                class="grow border-solid border-green border-[1px] px-6 py-2 rounded hover:bg-dark-green"
              >
                Keluar
              </button>
            </form>
          </div>
        {:else}
          <a
            href="/login"
            class="grow border-solid border-green border-[1px] px-6 py-2 rounded hover:bg-dark-green mr-2 sm:mr-0"
            >Masuk</a
          >
          <a
            href="/register"
            class="grow bg-green px-6 py-2 rounded hover:bg-dark-green"
            >Daftar</a
          >
        {/if}
      </div>
    </div>
  </div>
</nav>

<!-- start: Sidebar -->
<div
  class="fixed w-full h-full overflow-y-auto bg-white p-4 z-50 sidebar-menu transition-transform lg:hidden"
>
  <a
    href="/"
    class="flex items-center justify-between p-4 border-b border-b-gray-800"
  >
    <div class="flex items-center">
      <img
        src="../../images/lg_puskesmas.png"
        alt=""
        class="w-12 h-12 rounded object-cover"
      />
      <span class="text-2xl font-bold pl-2">Puskesmas Cempae</span>
    </div>
    <button on:click={closeSidebar}>
      <i class="fa-solid fa-xmark fa-2xl"></i>
    </button>
  </a>

  <ul class="mt-4 flex flex-col items-center">
    <li class="mb-4 group active">
      <a
        href="/"
        on:click={closeSidebar}
        class="flex items-center py-2 px-4 text-xl">Beranda</a
      >
    </li>
    <li class="mb-4 group active">
      <p class="flex items-center py-2 px-4 text-xl">
        Pusat Informasi <i class="fa-solid fa-angle-down ml-2"></i>
      </p>
    </li>

    <li class="mb-1 group">
      <a
        href="/our-services"
        on:click={closeSidebar}
        class="flex items-center rounded-md text-xl my-4 px-4 group-[.active]:text-white hover:opacity-80"
      >
        Layanan
      </a>
    </li>
    <li class="mb-1 group">
      <a
        href="/facilities"
        on:click={closeSidebar}
        class="flex items-center text-xl my-4 px-4 rounded-md group-[.active]:text-white hover:opacity-80"
      >
        Fasilitas
      </a>
    </li>
    <li class="mb-1 group">
      <a
        href="/articles"
        on:click={closeSidebar}
        class="flex items-center text-xl my-4 px-4 rounded-md group-[.active]:text-white hover:opacity-80"
      >
        Artikel
      </a>
    </li>
    <li class="mb-1 group">
      <a
        href="/activities"
        on:click={closeSidebar}
        class="flex items-center text-xl my-4 px-4 rounded-md group-[.active]:text-white hover:opacity-80"
        >Kegiatan
      </a>
    </li>
    <li class="mb-4 group active">
      <a
        href="/doctor-schedules"
        on:click={closeSidebar}
        class="flex items-center py-2 px-4 my-4 text-xl font-semibold"
        >Jadwal Dokter</a
      >
    </li>
    <li class="mb-4 group active">
      <a
        href="/about-us"
        on:click={closeSidebar}
        class="flex items-center py-2 px-4 mb-8 text-xl font-semibold"
        >Tentang</a
      >
    </li>

    <div class="mt-auto mx-4 mb-4">
      {#if $page.data.credential}
        <a
          href="/manage-account"
          on:click={closeSidebar}
          class="grow border-solid border-green border-[1px] mr-4 px-6 py-2 rounded text-xl"
          >Kelola Akun</a
        >
        <form action="/logout" method="POST">
          <button
            type="submit"
            class="grow bg-green px-6 py-2 rounded hover:bg-dark-green hover:border-solid hover:border-white hover:border-[1px] text-xl"
          >
            Keluar
          </button>
        </form>
      {:else}
        <a
          href="/login"
          class="grow border-solid border-green border-[1px] mr-4 px-6 py-2 rounded text-xl"
          >Masuk</a
        >
        <a
          href="/register"
          class="grow bg-green px-6 py-2 rounded hover:bg-dark-green hover:border-solid hover:border-white hover:border-[1px] text-xl"
          >Daftar</a
        >
      {/if}
    </div>
  </ul>
</div>

<!-- end: Sidebar -->

<style>
  .active {
    font-weight: 700;
  }

  @keyframes show {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-show {
    animation: show 0.3s ease-out forwards;
  }
</style>
