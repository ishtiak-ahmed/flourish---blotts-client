import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import axios from 'axios'

// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import AddBook from '../AddBook/AddBook';
import EditBook from '../EditBook/EditBook';
import ManageBook from '../ManageBook/ManageBook';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const Admin = () => {
    const [menu, setMenu] = useState('Add Book')
    return (
        <section id="dashboard">
            <div className="sidebar">
                <h2>Dashboard</h2>
                <h4 onClick={() => setMenu('Manage Book')}>Manage Books</h4>
                <h4 onClick={() => setMenu('Add Book')} > Add Book</h4>
                <h4 onClick={() => setMenu('Edit Book')} > Edit Book</h4>
            </div>
            {
                menu === 'Add Book' ? <AddBook></AddBook> : menu === 'Edit Book' ? <EditBook></EditBook> : <ManageBook></ManageBook>
            }
        </section>
    );
};

export default Admin;