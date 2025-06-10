<!-- <script>
  export let form;
  let open = false;

  function handleClick() {
    if (form.success) {
      open = true;
    }
  }

  function getCurrentDate() {
    const today = new Date();
    return today.toISOString().split("T")[0];
  }

  function getMaxDate() {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 3);
    return maxDate.toISOString().split("T")[0];
  }

  function printQueue() {
    // Get elemen canvas
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Set size canvas
    canvas.width = 800;
    canvas.height = 700;

    // Set background color
    context.fillStyle = "#ffffff";

    // Background color fill
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Set font color
    context.fillStyle = "#000000";

    // Position text
    context.textAlign = "center";

    // Elements you want to print onto the canvas
    context.font = "20px Arial";
    context.fillText(`UPTD Puskesmas Cempae`, canvas.width / 2, 80);
    context.font = "14px Arial";
    context.fillText(
      `Jl. Petta Oddo No. 3, Kel. Watang Soreang, Kec. Soreang, `,
      canvas.width / 2,
      110
    );
    context.fillText(`Kota Parepare, Sulawesi Selatan.`, canvas.width / 2, 130);

    const queueNumber =
      form.queueNumber < 10 ? `0${form.queueNumber}` : form.queueNumber;

    context.font = "bold 20px Arial";
    context.fillText(`Nomor Antrian`, canvas.width / 2, 200);

    context.font = "150px Arial";
    context.fillText(`${queueNumber}`, canvas.width / 2, 340);

    context.font = "20px Arial";
    context.fillText(
      `Keluhan: ${form.detail.complaint}`,
      canvas.width / 2,
      400
    );
    context.fillText(`Poli: ${form.detail.poli}`, canvas.width / 2, 440);
    context.fillText(
      `Tanggal Daftar: ${form.detail.formatDate}`,
      canvas.width / 2,
      480
    );

    context.font = "14px Arial";
    context.fillText(
      `Mohon Menunggu Sampai Nomor Anda Dipanggil`,
      canvas.width / 2,
      540
    );
    context.fillText(`Terima Kasih`, canvas.width / 2, 570);

    // get the data URL of the canvas format as PNG
    const dataURL = canvas.toDataURL("image/png");

    // make a link to download the image
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "antrian-puskesmas-cempae.png";

    // click the <a> element to start the image download
    downloadLink.click();
  }
</script>

<div class="pt-28 py-12 px-6 md:px-14 lg:px-80">
  <div class="mt-4 mb-16 border-b border-gray-300 text-center">
    <h2 class="mb-4 text-3xl font-semibold leading-none">Antrian Online</h2>
    <h2 class="mb-4 text-3xl font-normal leading-none">
      UPTD Puskesmas Cempae
    </h2>
  </div>

  <form method="POST" action="?/add">
    <div class="mb-6">
      <label for="complaint" class="block mb-2 text-sm font-medium"
        >Keluhan</label
      >
      <input
        type="text"
        id="complaint"
        name="complaint"
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      />
    </div>
    <div class="mb-6">
      <label for="poli" class="block mb-2 text-sm font-medium">Pilih Poli</label
      >
      <select
        id="poli"
        name="poli"
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        required
      >
        <option selected>Pilih Poli</option>
        <option value="Poli Umum">Poli Umum</option>
        <option value="Poli Gigi">Poli Gigi</option>
        <option value="Poli KIA">Poli KIA</option>
      </select>
    </div>
    <div class="mb-6">
      <label for="visit-date" class="block mb-2 text-sm font-medium"
        >Tanggal Daftar</label
      >
      <input
        class="text-sm mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
        id="visit-date"
        type="date"
        name="visit-date"
        min={getCurrentDate()}
        max={getMaxDate()}
        required
      />
    </div>

    <button
      type="submit"
      on:click={handleClick()}
      class="grow border-solid border-green border-[1px] px-6 py-2 rounded hover:bg-dark-green mr-4"
      >Konfirmasi</button
    >
    <a
      type="button"
      href="/doctor-schedules"
      class="grow bg-green px-6 py-2 rounded hover:bg-dark-green">Kembali</a
    >
  </form>
</div> -->

<!-- onlineQueue Modal -->
<!-- {#if form?.success && form?.queueNumber && open}
  <button class="fixed inset-0 w-full h-full bg-black bg-opacity-40">
    <div
      class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-auto px-4"
    >
      <div class="bg-white rounded-md shadow">
        <div class="flex items-center justify-between p-4 border-b">
          <h2 class="text-lg font-medium text-gray-800">Berhasil Mendaftar</h2>
          <button
            on:click={() => (open = false)}
            class="p-2 hover:bg-green rounded"
          >
            <i class="fa-solid fa-xmark fa-xl"></i>
          </button>
        </div>
        <div class="space-y-2 py-4 px-6 mt-4 leading-relaxed">
          <div class="flex flex-row">
            <img src="./images/lg_puskesmas.png" alt="" class="w-12 h-12" />
            <div>
              <h4 class="font-semibold">UPTD Puskesmas Cempae</h4>
              <p class="text-xs">
                Jl. Petta Oddo No. 3, Kel. Watang Soreang, Kec. Soreang, Kota
                Parepare, Sulawesi Selatan
              </p>
            </div>
          </div>
          <div class="py-4">
            <p class="font-semibold">Nomor Antrian</p>
            <p class="text-9xl">
              {#if form.queueNumber < 10}
                0{form.queueNumber}
              {:else}
                {form.queueNumber}
              {/if}
            </p>
          </div>
          <table>
            <tr class="text-center">
              <td class="text-left">Keluhan</td>
              <td class="text-left">: {form.detail.complaint}</td>
            </tr>
            <tr>
              <td class="text-left">Poli</td>
              <td class="text-left">: {form.detail.poli}</td>
            </tr>
            <tr>
              <td class="text-left">Tanggal Daftar</td>
              <td class="text-left">: {form.detail.formatDate}</td>
            </tr>
          </table>
          <div class="pt-4">
            <p class="text-center text-xs">
              Mohon menunggu sampai nomor Anda dipanggil <br /> Terima Kasih
            </p>
          </div>
        </div>
        <div class="flex justify-center items-center gap-3 p-4 border-t">
          <button
            on:click={() => printQueue()}
            class="px-6 py-2 bg-green rounded border border-solid border-dark-green hover:bg-dark-green"
          >
            Cetak Antrian
          </button>
        </div>
      </div>
    </div>
  </button>
{/if} -->
<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:300,700);

html {
  scroll-padding-top: 0 !important;
}

body {
  width:100%;
  height:100%;
  background:#48A9E6 !important;
  font-family: 'Raleway', sans-serif !important;
  font-weight:300;
  margin:0;
  padding:0;
}

#title {
  text-align:center;
  font-size:40px;
  margin-top:40px;
  margin-bottom:-40px;
  position:relative;
  color:#fff;
}

.circles:after {
  content:'';
  display:inline-block;
  width:100%;
  height:100px;
  background:#fff;
  position:absolute;
  top:-50px;
  left:0;
  transform:skewY(-4deg);
  -webkit-transform:skewY(-4deg);
}

.circles { 
	background:#fff;
	text-align: center;
	position: relative;
  margin-top:-60px;
  box-shadow:inset -1px -4px 4px rgba(0,0,0,0.2);
}

.circles p {
	font-size: 240px;
	color: #fff;
	padding-top: 60px;
	position: relative;
  z-index: 9;
  line-height: 100%;
}

.circles p small { 
  font-size: 40px; 
  line-height: 100%; 
  vertical-align: top;   
}

.circles .circle.small {
	width: 140px;
	height: 140px;
	border-radius: 50%;
	background: #48A9E6;
	position: absolute;
	z-index: 1;
	top: 80px;
	left: 50%;
	animation: 7s smallmove infinite cubic-bezier(1,.22,.71,.98);	
	-webkit-animation: 7s smallmove infinite cubic-bezier(1,.22,.71,.98);
	animation-delay: 1.2s;
	-webkit-animation-delay: 1.2s;
}

.circles .circle.med {
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background: #48A9E6;
	position: absolute;
	z-index: 1;
	top: 0;
	left: 10%;
	animation: 7s medmove infinite cubic-bezier(.32,.04,.15,.75);	
	-webkit-animation: 7s medmove infinite cubic-bezier(.32,.04,.15,.75);
	animation-delay: 0.4s;
	-webkit-animation-delay: 0.4s;
}

.circles .circle.big {
	width: 400px;
	height: 400px;
	border-radius: 50%;
	background: #48A9E6;
	position: absolute;
	z-index: 1;
	top: 200px;
	right: 0;
	animation: 8s bigmove infinite;	
	-webkit-animation: 8s bigmove infinite;
	animation-delay: 3s;
	-webkit-animation-delay: 1s;
}

@-webkit-keyframes smallmove {
	0% { top: 10px; left: 45%; opacity: 1; }
	25% { top: 300px; left: 40%; opacity:0.7; }
	50% { top: 240px; left: 55%; opacity:0.4; }
	75% { top: 100px; left: 40%;  opacity:0.6; }
	100% { top: 10px; left: 45%; opacity: 1; }
}
@keyframes smallmove {
	0% { top: 10px; left: 45%; opacity: 1; }
	25% { top: 300px; left: 40%; opacity:0.7; }
	50% { top: 240px; left: 55%; opacity:0.4; }
	75% { top: 100px; left: 40%;  opacity:0.6; }
	100% { top: 10px; left: 45%; opacity: 1; }
}

@-webkit-keyframes medmove {
	0% { top: 0px; left: 20%; opacity: 1; }
	25% { top: 300px; left: 80%; opacity:0.7; }
	50% { top: 240px; left: 55%; opacity:0.4; }
	75% { top: 100px; left: 40%;  opacity:0.6; }
	100% { top: 0px; left: 20%; opacity: 1; }
}

@keyframes medmove {
	0% { top: 0px; left: 20%; opacity: 1; }
	25% { top: 300px; left: 80%; opacity:0.7; }
	50% { top: 240px; left: 55%; opacity:0.4; }
	75% { top: 100px; left: 40%;  opacity:0.6; }
	100% { top: 0px; left: 20%; opacity: 1; }
}

@-webkit-keyframes bigmove {
	0% { top: 0px; right: 4%; opacity: 0.5; }
	25% { top: 100px; right: 40%; opacity:0.4; }
	50% { top: 240px; right: 45%; opacity:0.8; }
	75% { top: 100px; right: 35%;  opacity:0.6; }
	100% { top: 0px; right: 4%; opacity: 0.5; }
}
@keyframes bigmove {
	0% { top: 0px; right: 4%; opacity: 0.5; }
	25% { top: 100px; right: 40%; opacity:0.4; }
	50% { top: 240px; right: 45%; opacity:0.8; }
	75% { top: 100px; right: 35%;  opacity:0.6; }
	100% { top: 0px; right: 4%; opacity: 0.5; }
}

</style>
<section id="not-found">
  <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
  <div class="circles">
    <p>
      404<br />
      <small>PAGE NOT FOUND</small>
    </p>
    <span class="circle big"></span>
    <span class="circle med"></span>
    <span class="circle small"></span>
  </div>
</section>
