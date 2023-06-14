import React from 'react';
import {Button, Container} from "react-bootstrap";
import { useState } from "react";

import CreateProduct from '../components/modals/CreateProduct';

import './ADMIN.css'

const Admin = () =>{
    const[productVisible, setProductisible] = useState(false);
    
    return(                  
        <Container>
            <Button className = {"start"}
            variant={"btn btn-dark"}
                onClick={() => setProductisible(true)}
            >
                Добавить товар
            </Button>
            <CreateProduct show={productVisible} onHide={() => setProductisible(false)}/>

        </Container>

    );
};


export default Admin;
