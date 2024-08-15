<script>
	import Header from './Header.svelte';
  import '@fortawesome/fontawesome-free/css/all.min.css'
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<a href="https://github.com/joewang704" target="_blank"><i class="fa-brands fa-github"></i></a>
		<a href="https://www.linkedin.com/in/jw704/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
    padding: .5rem;
    font-size: 1.6rem;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
