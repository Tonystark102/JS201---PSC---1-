var data=JSON.parse(localStorage.getItem("student_data"))||[];

function homepage(e)
{
    e.preventDefault();

    var form=document.querySelector("#homepage_form");

    var Name=form.st_name.value;
    var Course=form.st_course.value;
    var Image=form.st_image.value;
    var Unit=form.st_unit.value;
    var Batch=form.st_batch.value;

    var s=new Studentdata(Name,Course,Image,Unit,Batch)

    data.push(s);
    localStorage.setItem("student_data",JSON.stringify(data));

}

function Studentdata(a,b,c,d,e)
{
    this.Name=a;
    this.Course=b;
    this.Image=c;
    this.Unit=d;
    this.Batch=`FW-Web-${e}`;
}

function calculate()
{

var stddata=JSON.parse(localStorage.getItem("student_data"))||[];

var oby={};

for(var i=0;i<stddata.length;i++)
{
    if(!oby[stddata[i].Batch])
    {
        oby[stddata[i].Batch]=0;
    }
}
for(var i=0;i<stddata.length;i++)
{
   
    
        oby[stddata[i].Batch]++;
    
}
console.log(oby)
for(var k in oby)
{
   var p=document.createElement("p");
   p.innerText=`${k}=${oby[k]}`;
   document.querySelector("#navbar").append(p);
}
}
calculate();
