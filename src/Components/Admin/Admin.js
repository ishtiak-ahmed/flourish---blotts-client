import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import axios from 'axios'

// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import AddBook from '../AddBook/AddBook';
import EditBook from '../EditBook/EditBook';
import ManageBook from '../ManageBook/ManageBook';
import grid from '../../icons/grid.png'
import plus from '../../icons/plus.png'
import edit from '../../icons/edit.png'
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const Admin = () => {
    const [menu, setMenu] = useState('Manage Book')
    return (
        <section id="dashboard">
            <div className="sidebar">
                <h2><Link to='/'>Flourish & Blotts</Link></h2>
                <h4 onClick={() => setMenu('Manage Book')}><span className="menu-icon">
                    <img src={grid} alt=""></img></span>Manage Books</h4>
                <h4 onClick={() => setMenu('Add Book')} ><span className="menu-icon"><img src={plus} alt=""></img></span> Add Book</h4>
                <h4 onClick={() => setMenu('Edit Book')} ><span className="menu-icon"><img src={edit} alt=""></img></span> Edit Book</h4>
            </div>
            {
                menu === 'Add Book' ? <AddBook></AddBook> : menu === 'Edit Book' ? <EditBook></EditBook> : <ManageBook></ManageBook>
            }
        </section>
    );
};

export default Admin;