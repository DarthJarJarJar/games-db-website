<script>
  import StarRating from '../svelte-star-rating';
  let rating = 0;
  let submittedRating;
  function submitRating() {
    submittedRating = rating
  }
</script>
<div class="form-form">
  <input bind:value={rating} type="range" class="form-range" min="0" max="5" step="0.1" id="customRange3">
  <label for="customRange3" class="form-label"><p class="text">{rating}</p>
  </label>
 
</div>

<br>
{#if (rating)}
{#if (!submittedRating)}
<button on:click={submitRating} type="button" class="btn btn-primary" id="button">Submit Rating</button>
{:else} <button on:click={submitRating} type="button" class="btn btn-primary" id="button">Update Rating</button>

{/if}
<StarRating rating={rating} />

{/if}
{#if (submittedRating)}
<h1>{submittedRating}</h1>

{/if}




<style>


.form-form {
  display: inline;
}

label {
  margin: 16px;
}

  #button {
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .text {
    margin-top: 16px;
    font-weight: bolder;
  }
  .form-range {
    width: 10%;
  }
</style>