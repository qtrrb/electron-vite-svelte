<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div>
    <a href="https://www.electronjs.org/" target="_blank" rel="noreferrer"> 
      <img src="./electronjs.svg" class="logo electron" alt="Electron Logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="./vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Electron + Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    We are using Node.js <span id="node-version"></span>,
    Chromium <span id="chrome-version"></span>,
    and Electron <span id="electron-version"></span>.
  </p>
  
  <p class="read-the-docs">
    Click on the Electron, Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .logo.electron:hover {
    filter: drop-shadow(0 0 2em #a0eaf9aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
