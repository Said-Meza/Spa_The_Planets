export const ApiStart=()=>{

   const  $img1=document.getElementById("img1"),
    $img2=document.getElementById("img2"),
    $img3=document.getElementById("img3"),
    $paragraph1=document.getElementById("paragraph1"),
    $paragraph2=document.getElementById("paragraph2"),
    $paragraph3=document.getElementById("paragraph3"),
    $wiki1=document.getElementById("wiki"),
    $wiki2=document.getElementById("wiki2"),
    $wiki3=document.getElementById("wiki3"),
    $rotation=document.getElementById("rotation"),
    $revolution=document.getElementById("revolution"),
    $radius=document.getElementById("radius"),
    $temp=document.getElementById("temp"),
    $title=document.getElementById("title");

    const {hash}=location,
    param = hash.substring(1)
   const [key,value] = param.split("=");
    
    fetch("../db.json")
    .then(data=>data.ok?data.json():Promise.reject({msg:"hubo un error",code:"404"}))
    .then(json=>{
        let start = json[value];
        $title.textContent=start.name;
        $img1.src=start.images.planet;
        $img2.src=start.images.internal;
        $img3.src=start.images.geology;
        $paragraph1.textContent=start.overview.content;
        $paragraph2.textContent=start.structure.content;
        $paragraph3.textContent=start.geology.content;
        $wiki1.href=start.overview.source;
        $wiki2.href=start.structure.source;
        $wiki3.href=start.geology.source;
        $rotation.textContent=start.rotation;
        $revolution.textContent=start.revolution;
        $radius.textContent=start.radius;
        $temp.textContent=start.temperature;
        
    })
    .catch(err=>console.log(err))
}