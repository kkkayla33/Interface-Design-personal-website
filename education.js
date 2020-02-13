
/*                       education                         */


function showSpring(){
  //make the table appear or disappear
    var springSchedual = document.getElementById("springSchedual");
    if(springSchedual.style.opacity=="0")   
      springSchedual.style.opacity="1";
    else
      springSchedual.style.opacity="0";
     
}

document.getElementById('spring').addEventListener('click', showSpring);


