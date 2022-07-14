<script context="module">
    export async function load({fetch}) {
       const res = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/genres/`, {
         method: 'POST',
         headers: {
           'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
       'Authorization': "Bearer sd089a9azgftad7tbbaroxitu6x71k",
       "X-Requested-With": "XMLHttpRequest"
         },
         body: `fields name; limit 31;`
         })
       
       const data = await res.json();

       const res2 = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/platforms/`, {
         method: 'POST',
         headers: {
           'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
       'Authorization': "Bearer sd089a9azgftad7tbbaroxitu6x71k",
       "X-Requested-With": "XMLHttpRequest"
         },
         body: `fields name, abbreviation ; limit 500;sort created_at desc;`
         })
       
       const data2 = await res2.json();
   
       return {
           props : {g : data, p: data2}
       }
   }
   
   </script>
<script>
    let searchGenre; 
    import { fly } from "svelte/transition"
    export let g;
   export let p;
   console.log(p)
    import PopularGame from "../components/PopularGame.svelte"
    let query;
    
    for(let genre of g) {
        genre.active = false
    }
    const genres = g


    for(let plat of p) {
        plat.active = false
    }


    const platforms = p
    

    let queryBuilder = [
        {id: 31, active:false},
        {id: 12, active:false},
        {id: 4, active:false},
        {id: 10, active:false},

    ]

    let continents;

    async function search(query) {
        
        await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/games/`, {
          method: 'POST',
          headers: {
            'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
        'Authorization': "Bearer sd089a9azgftad7tbbaroxitu6x71k",
        "X-Requested-With": "XMLHttpRequest"
          },
          body: `fields name, genres.name, platforms.name, release_dates.human, summary,screenshots.image_id, cover.image_id, artworks, involved_companies.company.name; sort follows desc; ${query}`
          })
      .then(r => r.json())
      .then(data => {
        continents = data;
        for(let c of data) {
            console.log(c)
        }  
      });
    }
    function takeInput(id) {
        for(let genre of queryBuilder) {
            if(genre.id===id) {
                genre.active = true 
            }
        }
    }

    let searchPlat;

    function s() {
        let genresFlag;
        let platformsFlag;
        let genreAray = []
        for(let genre of genres) {
            if(genre.active){
                genresFlag = true
                genreAray.push(genre.id)
            }
        }
        let platformArray = []
        for(let platform of platforms) {
            if(platform.active) {
                platformsFlag = true
                console.log(platform)
                platformArray.push(platform.id)
            }
        }
        console.log(genreAray)
        console.log(platformArray)
        if(platformsFlag && genresFlag) {
            console.log('print')
            query = `where genres=(${genreAray}) & follows != null & platforms=(${platformArray}); limit 50;`
        } else if(genresFlag && !platformsFlag) {
            query = `where genres=(${genreAray}) & follows != null; limit 50;`
        }
        else if(!genresFlag && platformsFlag) {
            query = `where follows != null & platforms=(${platformArray}); limit 50;`
        }
        console.log(query)
        search(query)
    }

 


</script>
   
<div class="arr">
    <button class="btn btn-light arrow" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Filters
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
          </svg>
    </button>

</div>   

    <div class="main" in:fly={{y: 50, duration: 400, delay:500}} out:fly={{duration: 500}}>
       
      
       
     
    
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Browse Games</h5>
           
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Genres
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <input type="text" bind:value={searchGenre} placeholder="Search genres" class="form-control" style="margin-bottom: 0.4rem;">
                        {#each genres as genre}
                        {#if searchGenre}
                            {#if (genre.name.toLowerCase().includes(searchGenre.toLowerCase()) )}
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={genre.active}>
                                <label class="form-check-label" for="flexCheckDefault">
                                  {genre.name}
                                </label>
                              </div>
                            {/if}
                            {:else} <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={genre.active}>
                                <label class="form-check-label" for="flexCheckDefault">
                                  {genre.name}
                                </label>
                              </div>
                        {/if}
                        
                        {/each}    
                            </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Platforms
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <input type="text" bind:value={searchPlat} placeholder="Search platforms" class="form-control" style="margin-bottom: 0.4rem;">
                        {#each platforms as platform}
                        {#if searchPlat}
                            {#if (platform.name.toLowerCase().includes(searchPlat.toLowerCase()) || (platform.abbreviation && platform.abbreviation.toLowerCase().includes(searchPlat.toLowerCase())) )}
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={platform.active}>
                                <label class="form-check-label" for="flexCheckDefault">
                                  {platform.name}
                                </label>
                              </div>
                            {/if}
                            {:else} <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={platform.active}>
                                <label class="form-check-label" for="flexCheckDefault">
                                  {platform.name}
                                </label>
                              </div>
                        {/if}
                        
                        {/each}
    
                    </div>
                  </div>
                </div>
                
              </div>
             
        
            <button on:click={s} type="button" class="btn btn-primary searchbutton" data-bs-dismiss="offcanvas" aria-label="Close">Search</button>
          </div>
        </div>
    
        <div class="games" in:fly={{y: 50, duration: 400, delay:500}} out:fly={{duration: 500}}>
           
            {#if continents}
            {#each continents as game}
                <PopularGame {game}></PopularGame>
            {/each}
            {:else} <h2>Add filters to start browsing</h2>
        {/if} 
        
        </div>
    
    
    
    </div>



<style>
    .dubey {
        float:right;
    }
    .games{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
        height: 20vh;
    }
    .searchbutton {
        margin-top: 1rem;
    }
    .main {
        float: right;
        width: 90%;
        
      
    }
   
    .arrow {
        position: fixed;
        margin-right: 5rem;
        -ms-transform: rotate(90deg); /* IE 9 */
    -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
    transform: rotate(90deg);
    margin-top: 10rem;

    }
    .arr {
        display: block;
        float: left;
        height: 100%;
        
    }

</style>