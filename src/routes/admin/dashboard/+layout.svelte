<script>
  import SideBarAdmin from "$lib/SideBarAdmin.svelte";
  import NavBarAdmin from "$lib/NavBarAdmin.svelte";

  const subMenuItems = [
    { title: "Beranda", href: "/admin/dashboard" },
    { title: "Kelola Data" },
    { title: "Data Admin Puskesmas", href: "/admin/dashboard/admin-data" },
    { title: "Data Pengguna", href: "/admin/dashboard/user-data" },
    { title: "Keluar" },
  ];
</script>

<SideBarAdmin {subMenuItems} />

<NavBarAdmin title={"Dashboard Admin IT"}>
  <slot />
</NavBarAdmin>
