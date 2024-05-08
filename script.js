
// eJTEsR2LbNqfAzXkGjSq3VjVaKpfonGcn-5yPLZCa3I api access key
//https://api.unsplash.com/search/photos?page=1&query=office&client_id=eJTEsR2LbNqfAzXkGjSq3VjVaKpfonGcn-5yPLZCa3I  link to connet
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchBtn = document.getElementById("show-more-btn");
const access_key = "eJTEsR2LbNqfAzXkGjSq3VjVaKpfonGcn-5yPLZCa3I";
let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value; // Corrected
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    if(page===1){
        searchResult.innerHTML="";
    }
    // console.log(data);
    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small; //you can also do full this is came from the api above
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_black"; //this will open the link in new tab

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    searchBtn.style.display="block";
}

// Ensure searchForm exists before adding event listener
if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        page = 1;
        searchImages();
    });
}
searchBtn.addEventListener("click",()=>{
 page++;
 searchImages();
});