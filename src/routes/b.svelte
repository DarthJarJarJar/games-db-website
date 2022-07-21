<script context="module">
  import proxyURL from "../proxy"
  const currentDate = new Date();
    let recentTimeStamp = currentDate.getTime()-15778800000
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
   

       const res3 = await fetch(`${proxyURL}https://api.igdb.com/v4/games/`, {
          method: 'POST',
          headers: {
            'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
        'Authorization': "Bearer sd089a9azgftad7tbbaroxitu6x71k",
        "X-Requested-With": "XMLHttpRequest"
          },
          body: `fields name, cover.image_id, follows; sort follows desc; where follows != null & first_release_date>${Math.floor(recentTimeStamp/1000)} & first_release_date<${Math.floor(currentDate.getTime()/1000)}; limit 5;`
          })
        
        const data3 = await res3.json();

        const res4 = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/game_modes/`, {
         method: 'POST',
         headers: {
           'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
       'Authorization': "Bearer sd089a9azgftad7tbbaroxitu6x71k",
       "X-Requested-With": "XMLHttpRequest"
         },
         body: `fields name ; limit 500;sort created_at desc;`
         })
       
       const data4 = await res4.json();

       const res5 = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/themes/`, {
         method: 'POST',
         headers: {
           'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
       'Authorization': "Bearer sd089a9azgftad7tbbaroxitu6x71k",
       "X-Requested-With": "XMLHttpRequest"
         },
         body: `fields name ; limit 500;`
         })
       
       const data5 = await res5.json();

       const res6 = await fetch(`https://powerful-fjord-21607.herokuapp.com/https://api.igdb.com/v4/player_perspectives/`, {
         method: 'POST',
         headers: {
           'Client-ID': 'o5xvtlqq670n8hhzz05rvwpbr7hjt4',
       'Authorization': "Bearer sd089a9azgftad7tbbaroxitu6x71k",
       "X-Requested-With": "XMLHttpRequest"
         },
         body: `fields name ; limit 500;`
         })
       
       const data6 = await res6.json();

      

       return {
           props : {g : data, p: data2, popularGames: data3, modes: data4, themes: data5, perspectives: data6}
       }
   }
   
   </script>
<script>
  export let popularGames
  export let modes;
    let searchGenre; 
    let searchCategory;
    let searchModes;
    export let themes
    let searchThemes
    export let perspectives;
    let searchPerspectives;
    
    import { fly } from "svelte/transition"
    export let g;
   export let p;
    import PopularGame from "../components/PopularGame.svelte"
import Index from "./index.svelte";
    let query;
    
    for(let genre of g) {
        genre.active = false
    }
    const genres = g

    for(let theme of themes) {
      theme.active = false
    }

    for(let plat of p) {
        plat.active = false
    }
    for(let mode of modes) {
      mode.active =  false
      
    }
    for(let perspective of perspectives) {
      perspective.active = false
    }
    


    const categories = [
      {name: "Main Game", id: 0, active: false},
      {name: "DLC/Add-on", id: 1, active: false},
      {name: "Expansion", id: 2, active: false},
      {name: "Bundle", id: 3, active: false},
      {name: "Remake", id: 8, active: false},
      {name: "Remaster", id: 9, active: false},
      {name: "Expanded Game", id: 10, active: false},
      
    ]


    const platforms = p
    

    let queryBuilder = [
        {id: 31, active:false},
        {id: 12, active:false},
        {id: 4, active:false},
        {id: 10, active:false},

    ]

   function getIndexOfPlatform(plat) {
    let index = 0
   let result;
   for(let platform of platforms) {
     if(platform.name.toLowerCase() === plat) {
      result = index
     }
     index += 1
   }
   return result
   }
   
   console.log(getIndexOfPlatform("playstation 5"))
   function array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
  };
  array_move(platforms, getIndexOfPlatform("playstation 5"), 0)
  array_move(platforms, getIndexOfPlatform("xbox series x|s"), 1)
  array_move(platforms, getIndexOfPlatform("pc (microsoft windows)"), 2)
  array_move(platforms, getIndexOfPlatform("nintendo switch"), 3)
  array_move(platforms, getIndexOfPlatform("playstation 4"), 4)
  array_move(platforms, getIndexOfPlatform("xbox one"), 5)
  array_move(platforms, getIndexOfPlatform("playstation 3"), 6)
  array_move(platforms, getIndexOfPlatform("xbox 360"), 7)
  array_move(platforms, getIndexOfPlatform("playstation 2"), 8)
  array_move(platforms, getIndexOfPlatform("xbox"), 9)
  array_move(platforms, getIndexOfPlatform("wii u"), 10)
  array_move(platforms, getIndexOfPlatform("playstation"), 11)

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
        let categoriesFlag;
        let genreAray = []
        let platformArray = []
        let categoryArray = []
        let modeArray = []
        let themeArray = []
        let perspectiveArray = []
      
        let gFlag = {flag: false, array: genreAray, qField: "genres" }
        let pFlag = {flag: false, array: platformArray, qField: "platforms"}
        let cFlag = {flag: false, array: categoryArray, qField: "category" }
        let mFlag = {flag: false, array: modeArray, qField: "game_modes" }
        let tFlag = {flag: false, array: themeArray, qField: "themes" }
        let perFlag = {flag: false, array: perspectiveArray, qField: "player_perspectives" }



        
        for(let genre of genres) {
            if(genre.active){
                genresFlag = true
                gFlag.flag = true
                genreAray.push(genre.id)
            }
        }
        
        for(let platform of platforms) {
            if(platform.active) {
                platformsFlag = true
                pFlag.flag = true
                console.log(platform)
                platformArray.push(platform.id)
            }
        }
        
        for(let category of categories) {
            if(category.active) {
                categoriesFlag = true
                cFlag.flag = true
                console.log(category)
                categoryArray.push(category.id)
            }
        }
        for(let mode of modes) {
            if(mode.active) {
                mFlag.flag = true
                modeArray.push(mode.id)
            }
        }
        for(let theme of themes) {
            if(theme.active) {
                tFlag.flag = true
                themeArray.push(theme.id)
            }
        }
        for(let perspective of perspectives) {
            if(perspective.active) {
                perFlag.flag = true
                perspectiveArray.push(perspective.id)
            }
        }
        
    
        let q = "limit 50; where cover.image_id != null & follows != null"
        const flagsArray = [gFlag, pFlag, cFlag, mFlag, tFlag, perFlag]
        for(let flag of flagsArray) {
          if(flag.flag){
            q = q + ` & ${flag.qField}=(${flag.array}) `
          }
        }
        q = q + ";"
        console.log(q)

        search(q)
    }

    function reset() {

    for(let genre of g) {
        genre.active = false
    }

    for(let theme of themes) {
      theme.active = false
    }

    for(let plat of p) {
        plat.active = false
    }
    for(let mode of modes) {
      mode.active =  false
      
    }
    for(let perspective of perspectives) {
      perspective.active = false
    }
    
    console.log(themes)
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
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Genres
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <input type="text" bind:value={searchGenre} placeholder="Search genres" class="form-control" style="margin-bottom: 0.4rem;">
                        {#each genres as genre, index}
                        {#if searchGenre}
                            {#if (genre.name.toLowerCase().includes(searchGenre.toLowerCase()) )}
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={genre.active}>
                                <label class="form-check-label" for="flexCheckDefault">
                                  {genre.name}
                                </label>
                              </div>
                            {/if}
                            {:else} 
                            {#if (index<11)}
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={genre.active}>
                              <label class="form-check-label" for="flexCheckDefault">
                                {genre.name}
                              </label>
                            </div>
                            {/if}
                            
                            
                           
                        {/if}
                        
                        {/each}   
                        <details>
                          <summary>Show more</summary>
                          {#each genres as genre, index}
                          {#if (index>11)}
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={genre.active}>
                            <label class="form-check-label" for="flexCheckDefault">
                              {genre.name}
                            </label>
                          </div>
                          {/if}
                            
                          {/each}
                        </details> 
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
                       
                      {#each platforms as platform, index}

                        {#if searchPlat}
                            {#if (platform.name.toLowerCase().includes(searchPlat.toLowerCase()) || (platform.abbreviation && platform.abbreviation.toLowerCase().includes(searchPlat.toLowerCase())) )}
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={platform.active}>
                                <label class="form-check-label" for="flexCheckDefault">
                                  {platform.name}
                                </label>
                              </div>
                            {/if}
                            {:else} 
                            {#if (index<11)}
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={platform.active}>
                                  <label class="form-check-label" for="flexCheckDefault">
                                    {platform.name}
                                  </label>
                                </div>
                        
                            {/if}
                      
                        {/if}
                        
                        {/each}
                        <details>
                          <summary>Show more</summary>
                          {#each platforms as platform, index}
                          {#if (index>11)}
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={platform.active}>
                            <label class="form-check-label" for="flexCheckDefault">
                              {platform.name}
                            </label>
                          </div>
                          {/if}
                        {/each}
    
                        </details>
                       
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Categories
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <input type="text" bind:value={searchCategory} placeholder="Search categories" class="form-control" style="margin-bottom: 0.4rem;">
                          {#each categories as category, index}
                          {#if searchCategory}
                              {#if (category.name.toLowerCase().includes(searchCategory.toLowerCase()) )}
                              <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={category.active}>
                                  <label class="form-check-label" for="flexCheckDefault">
                                    {category.name}
                                  </label>
                                </div>
                              {/if}
                              {:else} 
                              {#if (index<11)}
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={category.active}>
                                <label class="form-check-label" for="flexCheckDefault">
                                  {category.name}
                                </label>
                              </div>
                              {/if}
                              
                              
                             
                          {/if}
                          
                          {/each}   
                         
                              </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Game Modes
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <input type="text" bind:value={searchModes} placeholder="Search categories" class="form-control" style="margin-bottom: 0.4rem;">
                            {#each modes as mode, index}
                            {#if searchModes}
                                {#if (mode.name.toLowerCase().includes(searchModes.toLowerCase()) )}
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={mode.active}>
                                    <label class="form-check-label" for="flexCheckDefault">
                                      {mode.name}
                                    </label>
                                  </div>
                                {/if}
                                {:else} 
                                {#if (index<22)}
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={mode.active}>
                                  <label class="form-check-label" for="flexCheckDefault">
                                    {mode.name}
                                  </label>
                                </div>
                                {/if}
                                
                                
                               
                            {/if}
                            
                            {/each}
                           
                           
                                </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                          Themes
                        </button>
                      </h2>
                      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                              <input type="text" bind:value={searchModes} placeholder="Search categories" class="form-control" style="margin-bottom: 0.4rem;">
                              {#each themes as theme, index}
                              {#if searchThemes}
                                  {#if (theme.name.toLowerCase().includes(searchThemes.toLowerCase()) )}
                                  <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={theme.active}>
                                      <label class="form-check-label" for="flexCheckDefault">
                                        {theme.name}
                                      </label>
                                    </div>
                                  {/if}
                                  {:else} 
                                  {#if (index<11)}
                                  <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={theme.active}>
                                    <label class="form-check-label" for="flexCheckDefault">
                                      {theme.name}
                                    </label>
                                  </div>
                                  {/if}
                                  
                                  
                                 
                              {/if}
                              
                              {/each} 
                              <details>
                                <summary>Show more</summary>
                                {#each themes as theme, index}
                                {#if (index>11)}
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={theme.active}>
                                  <label class="form-check-label" for="flexCheckDefault">
                                    {theme.name}
                                  </label>
                                </div>
                                {/if}
                              {/each}
          
                              </details>    
                             
                                  </div>
                        </div>
                      </div>

                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Player Perspective
                          </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <input type="text" bind:value={searchPerspectives} placeholder="Search categories" class="form-control" style="margin-bottom: 0.4rem;">
                                {#each perspectives as perspective, index}
                                {#if searchPerspectives}
                                    {#if (perspective.name.toLowerCase().includes(searchPerspectives.toLowerCase()) )}
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={perspective.active}>
                                        <label class="form-check-label" for="flexCheckDefault">
                                          {perspective.name}
                                        </label>
                                      </div>
                                    {/if}
                                    {:else} 
                                    {#if (index<22)}
                                    <div class="form-check">
                                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" bind:checked={perspective.active}>
                                      <label class="form-check-label" for="flexCheckDefault">
                                        {perspective.name}
                                      </label>
                                    </div>
                                    {/if}
                                    
                                    
                                   
                                {/if}
                                
                                {/each}
                               
                               
                                    </div>
                          </div>
                        </div>
              </div>
             
        
            
               <button on:click={s} type="button" class="btn btn-primary searchbutton" data-bs-dismiss="offcanvas" aria-label="Close">Search</button> <br>

          </div>
        </div>
        {#if continents}
          <h2>Results</h2>
          {:else}         <h2>Popular Games</h2> <p>Add filters to refine your search</p>

        {/if}

        <div class="games" in:fly={{y: 50, duration: 400, delay:500}} out:fly={{duration: 500}}>
            {#if continents}
            {#each continents as game}
                <PopularGame {game}></PopularGame>
            {/each}
           {:else}
           {#each popularGames as game}
                <PopularGame {game}></PopularGame>
            {/each}
        {/if} 
        
        </div>
    
    
    
    </div>



<style>
   
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