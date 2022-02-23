import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';


const ServiceDetails = () => {
    const { id } = useParams();
    console.log("id", id);
    const navigate = useNavigate();
    // const blogDeails = useSelector(({ blog }) => {
    //     console.log("blog ii ", blog);
    //     // const tt = blog.entity.find((item) => (
    //     //     console.log("item.", item),
    //     //     console.log("item.id",item.id,"===",id)
    //     // ));
    //     const tt blog.entity.find((item) => item.id === id );
    //     console.log("tt", tt);
    //     return tt;
    // })
    const blogDeails = useSelector(({ blog }) => {
        console.log("blog", blog);
        return blog.entity.find(item => item.id.toString() === id.toString());
    });
    console.log("blogDeails", blogDeails);
    useEffect(() => {
        if (!blogDeails) {
            navigate('/service')
        }
    }, [blogDeails]);
    return (
        // <div>
        //     <p>{id}</p>
        //     <div>ServiceDetails</div>

        // </div>
        <div>
            {!blogDeails ? (
                <Spinner />
            ) :
                <>
                    {/* <Button color="danger">Danger!</Button> */}
                    <Form className="container">
                        <legend>
                            reactstrap form
                        </legend>
                        <FormGroup>
                            <Label for="blogTitle">Email</Label>
                            <Input
                                id="blogTitle"
                                name="title"
                                placeholder="Title"
                                type="text"
                                defaultValue={blogDeails.title}
                                style={{ padding: "7px" }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="userId">userId</Label>
                            <Input
                                id="userId"
                                name="userId"
                                placeholder="userId"
                                type="text"
                                disabled
                                defaultValue={blogDeails.userId}
                            />
                        </FormGroup>
                    </Form>
                    

                </>
            }
        </div>
    );
};

export default ServiceDetails;
