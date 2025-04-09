/* 
    Responsibiity: 

    Initiate process to convert all state to HTML (via the
    GnomeMercy component) and update the DOM with the 
    final result.

    Also, listen for any state change and convert state to
    HTML again.
*/
import { GnomeMercy } from "./GnomeMercy.js";

const mainContainer = document.querySelector("#container");

const render = async () => {
    /*
    Fetch all of the database so that it's stored in 
    application state. After all data is fetched, 
    invoke GnomeMercy component to kick off the conversion
    of state to HTML
    */
   
    const gnomeMercyHTML = await GnomeMercy()
   
    mainContainer.innerHTML = gnomeMercyHTML
};
render()
// Listen for state changes and invoke render() when it does
document.addEventListener("craftRequestSubmitted", render)
document.addEventListener("orderComplete", render)