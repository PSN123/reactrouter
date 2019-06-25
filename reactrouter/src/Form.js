import React,{Component} from 'react';
import './Form.css';

class  Form extends Component{

constructor(props){
super(props);
this.state={fullname:"pradeep negi",
Email:"pradeep.negi@example.com",
phone : "9876543211",
Message:"plz dont"
}
}

// handlename = (event)=>{

// this.setState({fullname:event.target.value});
    
// }
// handleEmail = (event)=>{

//     this.setState({Email:event.target.value});
        
//     }
//     handlMobile = (event)=>{

//         this.setState({ number: event.target.value }
            
//         }
//         handleMessage = (event)=>{

//             this.setState({Message:event.target.value});
                
//             }

handlechangeall=(event)=>{
this.setState({[event.target.name]:event.target.value});
}


            hanlesubmit =(event) =>{
                 alert(`my name is ${this.state.fullname}. 
                 My Email id is ${this.state.Email}.
                 My Mobile number is:${this.state.Moobile}.
                 My message to your company is: ${this.state.Message}
                 `);

          //       alert(JSON.stringify(this.state));
          console.log(JSON.stringify(this.state)); 
          event.preventDefault();
            }



    render(){
        return(
            <div>
                <form onSubmit={this.hanlesubmit}>
                <label> fullname </label>
    <input  type="text"  name="fullname" value={this.state.fullname}
    onChange={this.handlechangeall}
    /><br/> 

     <label> Email </label>
    <input  type="email" name="Email" value={this.state.Email} 
    onChange={this.handlechangeall}/>
    <br/>

     <label> Mobile </label>
     <input  type="number" name="phone" value= {this.state.phone} 
    onChange={this.handlechangeall}
    />

     <label> Message </label>
    <textarea value={this.state.Message}
    onChange={this.handlechangeall}
    /> <br/>

     <input type="submit"  value="Send" />
     </form>
                </div>
        );
    }
}   

export default Form;