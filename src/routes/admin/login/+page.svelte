<div class="min-h-screen flex items-center justify-center">
  <div class="hidden lg:block lg:w-1/2 p-8 relative">
    <img
      src="../../images/profil-puskesmas.jpeg"
      alt=""
      class="object-cover w-full h-full rounded-lg shadow-md"
    />
    <div class="flex flex-row absolute top-0 left-8">
      <img
        src="../../images/lg_puskesmas.png"
        alt="Logo Puskesmas"
        class="w-12 h-12"
      />
      <h3 class="text-black text-lg font-semibold ml-4 my-auto">
        Puskesmas Cempae
      </h3>
    </div>
  </div>

  <div class="w-full md:w-1/2 p-8 bg-white rounded border mx-10">
    <h1 class="text-xl font-bold mb-4 text-center">
      Selamat datang di Puskesmas Cempae! 👋
    </h1>
    <p class="text-center">Akun Admin IT.</p>

    <form action="?/login" method="POST" class="max-w-md mx-auto mt-4">
      <div class="mb-4">
        <label for="username" class="block text-sm">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
          placeholder="Your username"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
          placeholder="Your password"
        />
      </div>
      <div class="mb-6 text-center">
        <button
          type="submit"
          class="grow bg-green px-6 py-2 rounded border-black border-[1px] hover:bg-dark-green"
          >Login
        </button>
      </div>
    </form>
  </div>
</div>
