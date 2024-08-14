<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">
          <div class="stack" style="--stacks: 3;">
            <span style="--index: 0;">Home</span>
            <span style="--index: 1;">Home</span>
            <span style="--index: 2;">Home</span>
          </div>
        </a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">
          <div class="stack" style="--stacks: 3;">
            <span style="--index: 0;">About</span>
            <span style="--index: 1;">About</span>
            <span style="--index: 2;">About</span>
          </div>
        </a>
			</li>
			<li aria-current={$page.url.pathname === '/resume' ? 'page' : undefined}>
				<a href="/resume">
          <div class="stack" style="--stacks: 3;">
            <span style="--index: 0;">Resume</span>
            <span style="--index: 1;">Resume</span>
            <span style="--index: 2;">Resume</span>
          </div>
        </a>
			</li>
			<li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/projects">
          <div class="stack" style="--stacks: 3;">
            <span style="--index: 0;">Projects</span>
            <span style="--index: 1;">Projects</span>
            <span style="--index: 2;">Projects</span>
          </div>
        </a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
    background-color: white;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	li[aria-current='page'] a {
		color: var(--color-theme-1);
  }

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 400;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}


  .stack {
    display: grid;
    grid-template-columns: 1fr;
  }

  .stack span {
    grid-row-start: 1;
    grid-column-start: 1;
    --stack-height: calc(100% / var(--stacks) - 1px);
    --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
    --clip-top: calc(var(--stack-height) * var(--index));
    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
    animation: glitch 1 ease 2s;
  }

  .stack span:nth-child(odd) { --glitch-translate: 8px; }
  .stack span:nth-child(even) { --glitch-translate: -8px; }

  @keyframes glitch {
    0% {
      text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
      transform: translate(var(--glitch-translate));
    }
    2% {
      text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }
    4%, 100% {  text-shadow: none; transform: none; }
  }
</style>
