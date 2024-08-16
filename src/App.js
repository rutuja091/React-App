import "./App.css";


const greetingHRWStyle ={
    backgroundColor: "rgb(108, 249, 251)",
    color: "rgb(15, 15, 15)",
    padding: "10px",
    margin:"10px 0",
}




function HelloUser({name,emoji}){
return(
    <div className="greeting-1">
        Hello,{name}{emoji}
    </div>
)   
}




function GreetingBye(){
    return(
        <div style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px",
            margin:"10px 0",
        }}>
           Bye Bye , See You soon ...
        </div>
    )   
    }


    function GreetingHRW(){
        return(
            <div style={greetingHRWStyle}>
              How are You ?
            </div>
        )   
        }
        

export default HelloUser;
export{GreetingBye,GreetingHRW}