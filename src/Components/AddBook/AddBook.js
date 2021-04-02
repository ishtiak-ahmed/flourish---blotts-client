import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'

// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const AddBook = () => {
    const [imageUrl, setImageUrl] = useState(null)
    const liveServer = 'https://flourish-and-blotts.herokuapp.com'

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const bookItem = {
            name: data.name,
            author: data.author,
            price: data.price,
            image: imageUrl
        }
        fetch(liveServer + '/addbook', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(bookItem)
        })
            .then(res => console.log(res))
        // .then(data => console.log(data))
    };

    const handleSave = () => {
        // fetch('localhost:1454/addBook')
        //     .then(result => result.json())
        //     .then(data => console.log(data))
    }
    const uploadImage = (e) => {
        console.log(e.target.files[0])
        const imgdata = new FormData()
        imgdata.set('key', "b55efe27750394fac91e9ad62de30c6f")
        imgdata.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imgdata
        )
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='add-book'>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form">
                    <div className="form-group">
                        <p>Book Name</p>
                        <input name="name" defaultValue="book name" ref={register} />
                    </div>
                    <div className="form-group">
                        <p>Author Name</p>
                        <input name="author" defaultValue="author name" ref={register} />
                    </div>
                    <div className="form-group">
                        <p>Price</p>
                        <input name="price" defaultValue="price" ref={register} />
                    </div>
                    <div className="form-group">
                        <p>Add Cover Photo</p>
                        <input name="cover" type='file' ref={register({ required: true })} onChange={uploadImage} />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <input className='savebtn' type="submit" value="Save" />
            </form>
        </div>
    );
};

export default AddBook;