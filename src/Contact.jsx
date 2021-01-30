import React, { useState } from 'react';

const Contact = () => {

const [data, setdata] = useState({
    fname:'',
    phone:'',
    email:'',
    textarea:'',
});
const inputEvent = (event) =>{
    const {name , value } = event.target;
    setdata((preVal) =>{
        return {
            ...preVal,
            [name]:value,
        };
    });
};
const formSubmit = (e) =>{
    e.preventDefault();
    alert(`My name is ${data.fname} my phone no. is ${data.phone} my email id is ${data.email} my message is ${data.textarea}!!😄` );
}

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div" >
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter you name..." name="fname" value={data.fname} onChange={inputEvent} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent}
                                placeholder="Number..." />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message...</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="textarea" value={data.textarea} onChange={inputEvent} />
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;
