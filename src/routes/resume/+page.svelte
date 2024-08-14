<svelte:head>
	<title>Resume</title>
	<meta name="description" content="Resume" />
</svelte:head>

<script>
  import resume from '$lib/assets/resume_2024.pdf';
</script>

<div class="text-column">
  <a href={resume} download>Download</a>
</div>

<style>
	.list {
		display: flex;
		justify-content: center;
		align-items: center;
	}

  .list > div {
    margin: 0 1rem;
  }
  
  .desc {
    font-size: .8rem;
  }
</style>

