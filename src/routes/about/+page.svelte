<svelte:head>
	<title>About</title>
	<meta name="description" content="About me" />
</svelte:head>

<script>
  import beehiveTrail from '$lib/images/beehive_trail.jpg';
  import franconiaRidge from '$lib/images/franconia_ridge.jpg';
  import curry from '$lib/images/curry.jpg';
  import lasagna from '$lib/images/lasagna.jpg';
  import untetheredSoul from '$lib/images/untethered_soul.jpg';
</script>

<div class="text-column">
	<h1>About me</h1>

	<p>
    Frontend-focused Software Engineer <i class="fa-brands fa-react"></i>&nbsp;<i class="fa-brands fa-js"></i>
    <br />
    Based in Boston <i class="fa-solid fa-map-pin" />
	</p>
  <br />
	<h2>
    Favorite hikes
  </h2>
  <div class="list desc">
    <div>
      <img src={beehiveTrail} />
      <span>Beehive Trail - Acadia National Park, Maine <i class="fa-solid fa-map-pin"></i></span>
    </div>
    <div>
      <img src={franconiaRidge} />
      <span>Franconia Ridge Loop - White Mountain National Forest, New Hampshire <i class="fa-solid fa-map-pin"></i></span>
    </div>
  </div>
	<h2>
    Favorite recipes
  </h2>
  <div class="list desc">
    <div>
      <img src={curry} />
      <br />
      Japanese Chicken Curry <a href="https://www.justonecookbook.com/simple-chicken-curry/">Recipe <i class="fa-solid fa-link"></i></a>
    </div>
    <div>
      <img src={lasagna} />
      <br />
      Adam Ragusea's 3-Day Lasagna <a href="https://www.youtube.com/watch?v=xER7YhsZcQ0">Recipe <i class="fa-solid fa-link"></i></a>
    </div>
  </div>
	<h2>
    Favorite book
  </h2>
  <div class="list desc">
    <div>
      <img src={untetheredSoul} />
      <br />
      <span>Don't let the spiritual vibe throw you off. Great life advice on how to deal with your emotions and thoughts. Helped more than any therapist has ever done.</span>
      <a href="https://www.amazon.com/Untethered-Soul-Journey-Beyond-Yourself">Amazon <i class="fa-solid fa-link"></i></a>
    </div>
  </div>
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

