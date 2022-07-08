
 
<svelte:head>
    <title>Games DB</title>

</svelte:head>



<script>
    import global from '../global.css';
    let searchKey = '';
    import {goto} from '$app/navigation';  
  
    import { page } from '$app/stores';
import Navbar from '../components/Navbar.svelte';

  


</script>

  


<Navbar></Navbar>



<slot />
