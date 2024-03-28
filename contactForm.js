import { MdAddCall } from "react-icons/md";
import { RiMailAddFill } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
function ContactForm(){
    const onViaCall= ()=>{
        console.log("i am on call");
    };
    return(
       
        
        <div className="container">
        <div className="C_form">
            <button className="primary-btn"><MdMessage fontSize="24px" />VIA SUPPORT CHAT</button>
            <button className="primary-btn"><MdAddCall fontSize="24px" />VIA CALL</button>
        </div>
        <div  className="container">
            <button className="outline-btn"onClick={onViaCall}><RiMailAddFill />VIA EMAIL FORM</button>
            </div>
            <div>
            <form>
                <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" name="name"></input>
                </div>
                <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email"></input>
                </div>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <textarea name="text" rows={8}/>
                </div>
                <div >
                    <button className="primary-btn">SUBMIT</button>

                </div>

                
               
            </form>
            </div>
            <div className="img">
                <img src="./img/contactgirl.jfif"></img>
            </div>

        </div>
        
    )
}
export default ContactForm;