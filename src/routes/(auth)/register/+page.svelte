<script>
  export let form;
</script>

<div class="min-h-screen flex items-center justify-center p-4">
  <!-- Bagian Kiri (Form Register) -->
  <div class="w-full md:w-1/2 p-8 bg-white rounded border mx-10">
    <h1 class="text-xl font-bold mb-4 text-center">
      Selamat datang di Puskesmas Cempae! 👋
    </h1>
    <p class="text-center">Daftarkan diri Anda terlebih dahulu.</p>

    {#if form?.success}
      <div
        class="flex items-center max-w-md mx-auto p-4 my-4 text-sm"
        role="alert"
      >
        <i class="fa-solid fa-circle-check" style="color: green;"></i>
        &nbsp;
        <p class="font-medium">Akun berhasil dibuat!</p>
      </div>
    {:else if form?.error}
      <div
        class="flex items-center max-w-md mx-auto p-4 my-4 text-sm"
        role="alert"
      >
        <i class="fa-solid fa-circle-exclamation" style="color: red;"></i>
        &nbsp;
        <p class="font-medium text-red">
          Akun gagal dibuat! Silakan coba lagi.
        </p>
      </div>
    {/if}

    {#if form?.message}
      <div
        class="flex items-center max-w-md mx-auto p-4 my-4 text-sm"
        role="alert"
      >
        <i class="fa-solid fa-circle-exclamation" style="color: red;"></i>
        &nbsp;
        <p class="font-normal text-red">{form.message}</p>
      </div>
    {/if}

    <form action="?/register" method="POST" class="max-w-md mx-auto mt-4">
      <div class="mb-4">
        <label for="full-name" class="block text-sm">Nama Lengkap</label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
          placeholder="Nama Lengkap Anda"
          required
        />
      </div>
      <div class="mb-4">
        <label for="username" class="block text-sm">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
          placeholder="Masukkan username Anda"
          required
        />
      </div>
      <div class="mb-4">
        <label for="address" class="block text-sm">Alamat</label>
        <input
          type="text"
          id="address"
          name="address"
          class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
          placeholder="Masukkan Alamat Anda"
          required
        />
      </div>
      <div class="mb-4">
        <label for="phone" class="block text-sm">No. Telepon</label>
        <input
          type="number"
          id="phone"
          name="phone"
          class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
          placeholder="Masukkan No.Tlp Anda"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
          placeholder="Example@gmail.com"
          required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm">Kata Sandi</label>
        <input
          type="password"
          id="password"
          name="password"
          class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
          placeholder="Masukkan password Anda"
          required
        />
      </div>
      <div class="mb-6 text-center">
        <button
          type="submit"
          class="grow bg-green px-6 py-2 rounded border-black border-[1px] hover:bg-dark-green"
          >Daftar
        </button>
      </div>
      <p class="text-sm text-center">
        Sudah punya Akun? <a href="/login" class="border-b hover:font-medium"
          >Masuk disini.</a
        >
      </p>
    </form>
  </div>

  <!-- Bagian Kanan (Gambar Puskesmas) -->
  <div class="hidden lg:block lg:w-1/2 p-8 relative">
    <img
      src="./images/profil-puskesmas.jpeg"
      alt=""
      class="object-cover w-full h-full rounded-lg shadow-md"
    />
    <div class="flex flex-row absolute top-0 left-8">
      <!-- Tambahkan logo dan nama puskesmas di samping logo -->
      <img
        src="./images/lg_puskesmas.png"
        alt="Logo Puskesmas"
        class="w-12 h-12"
      />
      <a href="/" class="text-black text-lg font-semibold ml-4 my-auto">
        Puskesmas Cempae
      </a>
    </div>
  </div>
</div>
