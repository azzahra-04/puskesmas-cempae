<script>
  import SideBarAdmin from "$lib/SideBarAdmin.svelte";
  import NavBarAdmin from "$lib/NavBarAdmin.svelte";

  const subMenuItems = [
    { title: "Beranda", href: "/admin-pkm/dashboard" },
    { title: "Kelola Data" },
    { title: "Ruangan", href: "/admin-pkm/dashboard/rooms" },
    { title: "Fasilitas", href: "/admin-pkm/dashboard/facilities" },
    { title: "Artikel", href: "/admin-pkm/dashboard/articles" },
    { title: "Kegiatan", href: "/admin-pkm/dashboard/activities" },
    { title: "Data Dokter", href: "/admin-pkm/dashboard/doctors-data" },
    { title: "Antrian Online", href: "/admin-pkm/dashboard/online-queue" },
    { title: "Kritik dan Saran", href: "/admin-pkm/dashboard/feedbacks" },
    { title: "Keluar", href: "/logout" },
  ];
</script>

<SideBarAdmin {subMenuItems} />
<NavBarAdmin title={"Dashboard Admin Puskesmas"}>
  <slot />
</NavBarAdmin>
