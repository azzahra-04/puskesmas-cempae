<script>
  export let title;
</script>

<main
  class="w-full md:w-[calc(100%-256px)] md:ml-64 min-h-screen transition-all main"
>
  <div
    class="py-2 px-6 bg-green flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30"
  >
    <ul class="ml-auto flex items-center">
      <li><p class="font-semibold mr-5">{title}</p></li>
      <img
        src="https://placehold.co/32x32"
        alt=""
        class="w-8 h-8 rounded-full block object-cover align-middle"
      />
    </ul>
  </div>
  <slot />
</main>
