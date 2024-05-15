<script>
  import SideBarAdmin from "$lib/SideBarAdmin.svelte";
  import NavBarAdmin from "$lib/NavBarAdmin.svelte";

  const subMenuItems = [
    { title: "Beranda", href: "/admin/dashboard" },
    { title: "Kelola Data" },
    { title: "Data Admin Puskesmas", href: "/admin/dashboard/admin-pkm" },
    { title: "Data Pengguna", href: "/admin/dashboard/user" },
    { title: "Keluar" },
  ];
</script>

<SideBarAdmin {subMenuItems} />

<NavBarAdmin title={"Dashboard Admin IT"}>
  <slot />
</NavBarAdmin>
