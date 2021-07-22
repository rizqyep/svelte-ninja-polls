<script>
  export let name;
</script>

<main>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
    reiciendis est corporis possimus aperiam natus voluptatem neque deleniti
    minus fugiat molestias dolores voluptas? Alias et molestiae nulla facere
    ipsa totam!
  </p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
