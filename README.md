# Electron + Vite + Svelte

A simple `Electron` + `Vite` + `Svelte` boilerplate.

Based on Vite's `template-svelte`

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## File Structure

```
  ├─┬ src
  │ ├─┬ main
  │ │ └── index.cjs    Electron Main process
  │ ├─┬ preload
  │ │ └── index.cjs    Preload-Scripts
  │ └─┬ renderer       Svelte project files
  │   ├─┬ src
  │   │ └─ ...
  │   └── index.html      
  ├── jsconfig.json
  ├── package.json
  └── vite.config.js
```