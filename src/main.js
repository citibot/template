import App from './App.svelte';

if (/localhost/.test(window.location.href)) {
  window.localStorage.setItem('debug', 'true')
}

const app = new App({
	target: document.body
});

export default app;
