const paper = document.querySelector(".paper");             
const paper_heading = paper.querySelector(".content_paper h1");                    
const paper_text = paper.querySelector(".content_paper div");    
const buttons = document.querySelectorAll("button");          

buttons.forEach(button => 
{
    button.onclick = () => 
    {
        paper.style.display = "block";
        paper_heading.innerText = button.parentElement.querySelector("h1").innerText;
        paper_text.innerHTML = button.parentElement.querySelector(".news_text").innerHTML;
    }
})

window.onclick = function (event) 
{
    if (event.target == paper) 
    {
        paper.style.display = "none";
    }
}