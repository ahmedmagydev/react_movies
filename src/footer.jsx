import React  from "react";
import Button from "./Button";
class Footer extends React.Component{
    render(){
        return (
        
        <div className=" bg-secondary text-white">
            <div className="row">
                <div className="col-4 mt-5 p-5">
            <span className=" fs-3">GET IN TOUCH</span><br /><br /><br />
            <span class="material-symbols-sharp">
mail
</span> migo.zezo@yahoo.com<br />
<span class="material-symbols-sharp">
call
</span>01090506348
</div>
<div className="col-4 text-center "><br /><br /><br /><br /><br /><br />
<Button btnColor="warning fs-3" myValue="Contact Me"/>
</div>
<div className="col-4">

</div>


</div>
        
















        </div>
        
        
        
        
        
        
        
            
        )
    }
}
export default Footer