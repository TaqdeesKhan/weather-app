




function abc(){
    let pickcityname=document.getElementById("city").value;
    let result=document.getElementById("result");
    axios.get(`https://api.weatherapi.com/v1/current.json?key=d1f7a717022342c3b4d52516250804&q=${pickcityname}&aqi=yes`)
    .then(function(response){
        let city=response.data.location.name;
        let country=response.data.location.country;
        let region=response.data.current.humidity ;
        let temp=response.data.current.temp_c;
        
        result .innerText=`Today Weather Of ${country} in ${city} is ${temp}`
        console.log(response)
        // document.getElementById("result").innerHTML="Today Weather Is"+response;
    })
    .catch(function(error){
        console.log(error)
    })
}










// var abc=[1,2,3,4,5,6,7,8,9,10]


// for(var i=0;i<=9;i++){
//     console.log("index "+i+"->"+abc[i])
// }


// abc.forEach(abc)


// function abc(){
// alert("this is function")
// }
// abc()


// function abc(name){
//     alert("this is prameter function "+name)
// }
// abc("done")

// abc.forEach((abc)=>{
//     console.log(abc)
// })


   
