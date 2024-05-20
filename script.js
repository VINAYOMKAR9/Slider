let arr = ['https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
'https://images.unsplash.com/photo-1519873174361-37788c5a73c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1606214554672-6d2b0dcea9a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D',
'https://plus.unsplash.com/premium_photo-1668771404500-dac3bff48a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1587473555771-96aef0d968cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D'
]
let displayImage= (i=0)=>{
    let cont = document.getElementById('cont')
    cont.innerHTML='';
    let img = document.createElement('img')
    img.src=arr[i]
    cont.append(img)
}
let i = 0;
displayImage()

let id;
let Start = document.querySelector('#Start');
Start.addEventListener('click',()=>{
    
    if(id==undefined){
        id =setInterval(()=>{
            i++;
            if(i==arr.length){
                i=0;
            }
            displayImage(i)
        },2000)
    }
})
    

let Prev = document.querySelector('#Prev');
Prev.addEventListener('click',()=>{
    i--;
    if(i<0){
        i=arr.length-1
    }
    displayImage(i)
});


let Next = document.querySelector('#Next');
Next.addEventListener('click',()=>{
    i++;
    if(i==arr.length){
        i=0;
    }
    displayImage(i)
})



let Stop = document.querySelector('#Stop');
Stop.addEventListener('click',()=>{
    clearInterval(id)
})

