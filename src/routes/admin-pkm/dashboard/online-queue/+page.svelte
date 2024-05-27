<script>
  import { enhance } from "$app/forms";
  /** @type {import('./$types').PageServerData} */
  export let data;

  let openDeleteDialog = false;
  let deleteId = null;
  let deleting = false;
</script>

<div class="max-w-screen-xl mx-auto px-4 md:px-8">
  <div class="pt-10 items-start justify-between py-4 border-b md:flex">
    <h3 class="text-2xl font-bold">Laporan Antrian Online</h3>
  </div>
</div>
<div class="max-w-screen-xl mx-auto px-4 md:px-8">
  <div class="mt-12 shadow-sm overflow-x-auto">
    <table class="w-full table-fixed text-sm text-left">
      <thead class="bg-dark-green font-medium border-b">
        <tr>
          <th class="py-3 px-6 border">Keluhan</th>
          <th class="py-3 px-6 border">Poli</th>
          <th class="py-3 px-6 border">Tanggal Kunjungan</th>
          <th class="py-3 px-6 border"></th>
        </tr>
      </thead>
      <tbody>
        {#each data.onlineQueues as { _id: id, complaint, poli, visitDate }}
          <tr class="border">
            <td class="px-6 py-4 border">
              <span class="block text-sm font-medium">{complaint}</span>
            </td>
            <td class="px-6 py-4 border truncate w-32">{poli}</td>
            <td class="px-6 py-4 border truncate w-32">{visitDate}</td>
            <td class="px-6 py-4 border">
              <button
                on:click={() => {
                  openDeleteDialog = true;
                  deleteId = id;
                }}
                class="py-2 px-3 font-medium text-red hover:bg-dark-green rounded"
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<!-- Delete Modal -->
{#if openDeleteDialog}
  <div class="fixed inset-0 w-full h-full">
    <button
      class="fixed inset-0 w-full h-full bg-black opacity-40 bg-green"
      on:click={() => (openDeleteDialog = false)}
    ></button>

    <div
      class="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 w-full max-w-lg"
    >
      <div class="bg-white rounded shadow-lg px-4 py-6 sm:flex">
        <div class="mt-2 text-center sm:ml-4 sm:text-left">
          <h2
            class="text-lg font-medium text-gray-800 pb-2 border-b border-solid border-grey"
          >
            Hapus data?
          </h2>
          <p class="mt-2 text-sm leading-relaxed pb-4 text-gray-500">
            Data yang telah dihapus tidak dapat dikembalikan.
          </p>
          <div class="items-center gap-2 mt-3 text-sm sm:flex">
            <form
              class="w-full mt-2 p-2.5 flex-1 text-red text-center rounded border hover:bg-red hover:text-white"
              action="?/delete"
              method="POST"
              use:enhance={() => {
                deleting = true;
                return async ({ result, update }) => {
                  await update();
                  openDeleteDialog =
                    result.type === "error" || result.type === "failure";
                  deleting = false;
                };
              }}
            >
              <input type="hidden" name="id" value={deleteId} />
              <button type="submit">
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </form>
            <button
              on:click={() => (openDeleteDialog = false)}
              aria-label="Close"
              class="w-full mt-2 p-2.5 flex-1 rounded border hover:bg-grey"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
