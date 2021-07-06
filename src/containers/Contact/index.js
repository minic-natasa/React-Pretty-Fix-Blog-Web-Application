import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Hero from '../../components/Hero';
import emailjs from 'emailjs-com';

/**
* @author
* @function Contact
**/

const Contact = (props) => {

   function sendEmail(e){
      e.preventDefault();

      emailjs.sendForm('gmail', 'templateId', e.target, 'user_YXb3JMzLbIjG4YwOOjedO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
   }

 return(
    <div>
            <Card style = {{margin: '20px 0'}}> 
            <Hero/>
            </Card>

               <h1 className = "text">If you want to contact us, feel free to write to us</h1>

               <div>

            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>



        </div>
   )

 }

export default Contact