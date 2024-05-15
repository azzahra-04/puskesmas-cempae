<script>
  import NavBar from "$lib/NavBar.svelte";
  import Footer from "$lib/Footer.svelte";
  export let data;
</script>

<NavBar user={data.user} />
<slot />
<Footer />
