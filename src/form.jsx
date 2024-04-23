import { useState } from "react";

const Form = () => {
    const [username,setUsername]= useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [cpassword,setcPassword]=useState("");

    const[eusername,seteUsername]=useState("")
    const[eemail,seteEmail]=useState("")
    const[epassword,setePassword]=useState("")
    const[ecpassword,setecPassword]=useState("")

    const [ucolor,setuColor]=useState("")
    const [ecolor,seteColor]=useState("")
    const [pcolor,setpColor]=useState("")
    const [cpcolor,setcpColor]=useState("")
    


    function Validate (){
        if(username.length >8){
            seteUsername("")
            setuColor("green")
        }else{
            seteUsername("oga put confirm letters ")
            setuColor("red")
        }
        if(email.includes("@gmail")){
            seteEmail("")
            seteColor("green")
        }else{
            seteEmail("invalid email")
            seteColor("red")
        }
        if(password.length >8 && password.includes(".") ){
            setePassword("")
            setpColor("green")
        }else{
            setePassword("oga put confirm password with .")
            setpColor("red")
        }
        if(password!=("") && password == cpassword){
            setecPassword("")
            seteColor("green")
        }else{
            setecPassword("password dont match")
            seteColor("red")
        }

    }
    return ( 
        <div className="head bg-black">
        <div className="container w-auto bg-white pt-32">
            <h1 className="text-center ">Form Validation</h1>
            <form className="flex  flex-col gap-4 items-center">
                <input className="border" type="username" name="username" id="username" placeholder="Enter Your Username"
                value={username} onChange={(e)=>{setUsername(e.target.value)}} style={{borderColor:ucolor}} />
                <p className="text-red-500 font-bold text-[10px] mt-[-10px]">{eusername}</p>
                <input className="border" type="email" name="email" id="email" placeholder="Enter your email" 
                value={email} onChange={(e)=>{setEmail(e.target.value)}} style={{borderColor:ecolor}}/>
                 <p className="text-red-500 font-bold text-[10px] mt-[-10px]">{eemail}</p>
                <input className="border" type="password" name="password" id="password" placeholder="Enter Your password" value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{borderColor:pcolor}}/>
                <p className="text-red-500 font-bold text-[10px] mt-[-10px]">{epassword}</p>
                <input className="border" type="password" name="rpswd" id="rpswd" placeholder="repeat your password" value={cpassword} onChange={(e)=>{setcPassword(e.target.value)}} style={{borderColor:cpcolor}}
                />
                 <p className="text-red-500 font-bold text-[9px] mt-[-10px]">{ecpassword}</p>
                <button className="border bg-blue-400 w-[150px] rounded text-white hover:bg-green-400" type="button" onClick={Validate}>Submit</button>
            </form>
        </div>
        </div>
     );
}
 
export default Form;