import React, { useState } from "react"
import Input from "../Input"
import Button from "../button"

interface FormData {
    riotID: string;
    username: string;
}


const Form = () => {
    
    // state to hold the form data
    const[formData, setFormData] = useState<FormData>({
        riotID: '',
        username: '',
    })
    
    // handle form input changes

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    //Handle form submission

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // save form data to local storage
        localStorage.setItem('formData', JSON.stringify(formData));

        setFormData({
            riotID: '',
            username: '',
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input 
            label='RiotID :'
            placeholder="RiotID"
            type="text"
            name="riotID"
            value={formData.riotID}
            onChange={handleInputChange}
            className="bg-white"
            />
            <Input
            label="Username"
            placeholder="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="bg-white"
            />
            <Button label='Submit' type="submit">Submit</Button>
        </form>
    )
}

export default Form