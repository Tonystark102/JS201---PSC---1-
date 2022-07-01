var studentDetail=JSON.parse(localStorage.getItem("student_data"));

var st=studentDetail.forEach(function(el,index){

    var name=el.Name;
    var course=el.Course;
    var image=el.Image;
    var unit=el.Unit;
    var batch=el.Batch;


    var div=document.createElement("div");
    div.style.height="230px";
    div.style.width="150px";
    div.style.border="1px solid black";

    var p1=document.createElement("p");
    p1.innerText=name;
    var p2=document.createElement("p");
    p2.innerText=course;
    var img=document.createElement("img");
    img.style.height="120px";
    img.style.width="150px"
    img.setAttribute("src","el.Image");
    
    var p4=document.createElement("p");
    p4.innerText=unit;
    var p5=document.createElement("p");
    p5.innerText=batch;
    var btn=document.createElement("button");
    btn.innerText="Remove";
    btn.style.marginTop="7px";
    btn.addEventListener("click",function()
    {
        remove(index);
    });

    div.append(img,p1,p2,p4,p5,btn);

    document.querySelector("#student_Details").append(div);
  
});

function remove(index)
{
    var remove1=JSON.parse(localStorage.getItem("student_data"))||[];

    var newdata1=remove1.filter(function(el,i)
    {
        return i !==index;
    })
    event.target.parentNode.remove();
    localStorage.setItem("student_data",JSON.stringify(newdata1))
    console.log(newdata1)
}