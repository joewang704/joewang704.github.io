<script>
  import hakonePark from '$lib/images/hakone_park.mp4';
  import hakonePoster from '$lib/images/hakone_frame1_awful.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="video">
    <video controls={false} autoplay loop muted poster={hakonePoster}>
      <source src={hakonePark} />
      <track kind="captions" />
    </video>
    <div class="welcome">Welcome :)</div>
  </div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

  .video {
    height: 80vh;
    position: relative;
  }

  .welcome {
    position: absolute;
    right: .4rem;
    bottom: .4rem;
    color: white;
    font-size: .8rem;
  }

  video {
    height: 100%;
    object-fit: cover;
  }
</style>
