function getjson(file,callback){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function() {
		if (xhr.readyState === 4 && xhr.status =="200") {
           callback(xhr.responseText);
		}
	}
xhr.send();
}
// calling the function
getjson("data.json",function(text) {
	var data =JSON.parse(text);
	console.log(data);
    mydetails(data.details);
    hobbies(data.hobbies);
    edu(data.education);

})

var parent = document.querySelector(".parent-div");



function hobbies(M) {
	var d=document.createElement("div");
	d.classList.add("Movie-fav");
	parent.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="Hobbies:"
   d.appendChild(h);
   h.appendChild(document.createElement("hr"));
   ol=document.createElement("ol");
   for (var i = 0; i <M.length; i++) {
   	var li=document.createElement("li");
   	li.textContent=M[i];
    ol.appendChild(li);
   }
   d.appendChild(ol);
}

function edu(educate) {
var d=document.createElement("div");
	d.classList.add("cric-fav");
	parent.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="Education :"
   d.appendChild(h);
   h.appendChild(document.createElement("hr"));

   var table=document.createElement("table");
   var row="";
   for (var i = 0; i < educate.length; i++) {
   	row +="<tr><td>"+educate[i].name+"</td><td>"+educate[i].college+"</td></tr>";
   }
   table.innerHTML=row;
   d.appendChild(table);
}


function mydetails(React) {
	var d=document.createElement("div");
	d.classList.add("Basicdetails");
	parent.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="Basic Details:"
	d.appendChild(h);
	h.appendChild(document.createElement("hr"));

	var i=document.createElement("img");
	i.src=React.image;
	i.alt="profile-image";
	d.appendChild(i);

	var name=document.createElement("h4");
	name.classList.add("name");
	// name.style.color="#000";
	name.setAttribute("id","name");
	name.textContent=React.name;
	d.appendChild(name);

	var e=document.createElement("p");
	e.classList.add("mail");
	e.textContent=React.email;
	d.appendChild(e);

   var ul=document.createElement("ul");
   var li=document.createElement("li");
   li.textContent=React.phone;
   ul.appendChild(li);
   var li1=document.createElement("li");
   li1.textContent=React.address;
   ul.appendChild(li1);
	d.appendChild(ul);
}