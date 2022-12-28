import { useState } from "react";
let type_activity=["Any Random Activity","education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

export default function Fun(){
    const [data,setData]=useState({});
    const [sel,setsel]=useState(type_activity[0])
    const [para,setPara]=useState("");
    
    function getactivity(e){
        e.preventDefault();
        let  url="http://www.boredapi.com/api/activity";
        if(sel!==type_activity[0]){
            url="http://www.boredapi.com/api/activity?type="+sel;
        }
        setPara("Loading...");
        fetch(url)
           .then((res)=>res.json())
           .then((a)=>{setData((b)=>({...a})
           
          , console.log(data));
            
           if(data&&data.activity&&data.type&&data.participants){
           setPara("You Can do "+ data.activity +" which is a "+ data.type+" activity and "+data.participants+" person can do this.")}
        })
           .catch(a=>console.log(a))
    
    }


        

    return(
        <div className="form_div">
        <form>
            <label htmlFor="type">What Kind of activity u want to do</label>
            <select name="type" onChange={(e)=>{setsel(e.target.value)}} id="sel">
                {type_activity.map((type,i)=>{
                    return(
                        <option  key={i} value={type}>{type}</option>
                    )
                })}

            </select>
            
<button onClick={getactivity}>Get my activity</button>
        </form>
        
        <p id="pa">
            {para}
 </p>

        </div>
    )
}