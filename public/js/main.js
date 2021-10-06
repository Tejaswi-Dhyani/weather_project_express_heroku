const submitbtn=document.getElementById("submitbtn");
const cityname=document.getElementById("cityname");
const city_name=document.getElementById("city_name");
temp_status=document.getElementById("temp_status");

const datahide=document.querySelector(".last_layer");

temp_real_val=document.getElementById("temp_real_val");
const getinfo = async(event)=>{
    event.preventDefault();
    let cityval=cityname.value;
    if(cityval==""){
        city_name.innerText=`Please write the city name..`;
        datahide.style.visibility="hidden";
    }else{
        try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=4b3d7d1feb84e666eeb9eddae19ff3fe&units=metric`
        const response = await fetch(url);
        const data=await response.json();
        const arrData=[data];
        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country} `;
        temp_real_val.innerText=`${arrData[0].main.temp}°C`;
        const tempmood=arrData[0].weather[0].main;
        // temp_status.innerText=arrData[0].weather[0].main;
        
        // condition to check temp_status icon
        if(tempmood=="Clear"){
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#F28C38;'></i>";
        }else if(tempmood=="Clouds"){
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#C2BFBA;'></i>";
        }else if(tempmood=="Rain"){
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#767A75;'></i>";
        }else{
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#F28C38;'></i>";
        }
        datahide.style.visibility="visible";
    }
        catch{
            city_name.innerText=`Please write the city name properly`;
            // datahide.classList.add('.data_hide');
            datahide.style.visibility="hidden";
        }
        
    }
    
    // https://api.openweathermap.org/data/2.5/weather?q=Kanpur&appid=4b3d7d1feb84e666eeb9eddae19ff3fe&units=metric
}
submitbtn.addEventListener('click',getinfo);
