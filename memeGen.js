const topText = document.querySelector('input[name="toptext"]');
const bottomText = document.querySelector('input[name="bottomtext"]');
const image = document.getElementById('image');
const btn = document.querySelector('button');
const form = document.querySelector('form');
const container = document.getElementById('container');



form.addEventListener('submit', function(e){
    e.preventDefault();
    //console.log(e);

    const newMeme = makeMeme(
        image.value,
        topText.value, 
        bottomText.value)
        
    //container.append(newMeme);
    
    image.value="";
    topText.value="";
    bottomText.value="";

    container.append(newMeme);

    const removeButton = document.createElement('button');
    removeButton.classList.add("button");
    removeButton.innerText = "Meme no more";
    newMeme.append(removeButton);

    container.addEventListener('click',function(e){
        e.preventDefault();
        //console.log(e);
        //console.log(e.target);
        //console.log(e.target.tagName);
        //console.log(e.target.parentElement);


        if(e.target.tagName === 'BUTTON'){//checking if it was a button that was clicked on
            e.target.parentElement.remove(); 
        } 
    })
})

function makeMeme(img,top,bottom){
    const memeDiv = document.createElement('div');
    memeDiv.classList.add("meme");
    memeDiv.style.backgroundImage = `url('${img}')`; //syntax: url('the url here')
   
   // const meme = document.createElement('img');
   // meme.setAttribute('src',img);

    const textTop = document.createElement('p');
    textTop.classList.add("texttop");
    textTop.innerText = top;
    
    

    const textBottom = document.createElement('p');
    textBottom.classList.add("textBottom");
    textBottom.innerText = bottom;

    memeDiv.append(textTop, textBottom);

    return memeDiv;

}
