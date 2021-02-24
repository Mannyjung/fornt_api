import axios from 'axios';
import '../App.css';
import React, { useState, useEffect } from 'react'
import { Container, Row, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap'; 
// import reactstrap ที่ต้องการจะใช้
const EditProductForm = ({ id }) => { //ส่งค่ามาทาง props
    const initProduct = { //สร้างข้อมูลเปล่าไว้
        _id: "",
        name: "",
        category: "",
        price: "",
        tags: [],
    };
    const [product, setProduct] = useState(initProduct); //สร้าง useState product
    const [submitted, setSubmitted] = useState(false); //สร้าง useState submitted 
    useEffect(() => { 
        axios.get("https://api61425048.herokuapp.com/product/" + id) //ดึงข้อมูล มาแสดง
            .then((response) => {
                setProduct(response.data);
            });
    }, [id])
    const handleInputChange = (event) => {
        let { name, value } = event.target;
        // if (name === "tags") { //ถ้า name เท่ากับ tags และหากใช้ค่ามากกว่า 2 อัน ให้ใช้ , 
        //     value = value.split(",");
        // }
        setProduct({ ...product, [name]: value }) // set ให้ค่าเก่าและค่าที่เพิ่มมาใหม่เข้าไปด้วย
    };
    const saveProduct = () => { //เพิ่มข้อมูลเข้าไป
        var data = {
            name: product.name,
            category: product.category,
            price: product.price,
            tags: product.tags
        }
        axios
            .put("https://api61425048.herokuapp.com/product/" + product._id, data) //อัปเดตข้อมูลจาก id 
            .then((response) => {
                console.log(response.data);
                setProduct({ ...product, data }); //ใช้ setProduct ข้อมูลเดิมและข้อมูลใหม่
                setSubmitted(true)//และก็เปลี่ยนให้เป็น true
            })
            .catch((error) => {
                console.log(error);

            });
    };
    const newProduct = () => {
        setSubmitted(false);

    }
    return (

        <Container>
            <Row>
                <h3>Edit new Products</h3>
            </Row>
            <Row>
                {submitted ? ( //ถ้ากด submitted จะแสดงข้อความ Alert
                    <>

                        <Alert className="a1" color="success">
                            P r o d u c t I s U p d a t e d! ! ! <br />
                        </Alert>


                        <Button className="b1" color="success" onClick={newProduct}>OK </Button>
                        {/* เมื่อกดจะเรียกใช้ newProduct /*/}

                    </>
                ) : (

                        <Form>
                            <FormGroup>
                                <Label for="productname">Product Name</Label>
                                <Input //สร้าง input ตาม
                                    type="text"
                                    name="name"
                                    id="productName"
                                    value={product.name || ""}
                                    onChange={handleInputChange} //เรียกใช้ฟังก์ชัน handleInputChange
                                    placeholder="ระบุชื่อสินค้า" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="productCategory">Product Category</Label>
                                <Input
                                    type="text"
                                    name="category"
                                    id="productCategory"
                                    value={product.category || ""}
                                    onChange={handleInputChange}
                                    placeholder="ระบุหมวดหมู่
                        " />
                            </FormGroup>

                            <FormGroup>
                                <Label for="productPrice">Product Price</Label>
                                <Input
                                    type="text"
                                    name="price"
                                    id="productPrice"
                                    value={product.price || ""}
                                    onChange={handleInputChange}
                                    placeholder="ระบุราคา" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="productTags">Product Tags (หากมีมากกว่า 1 tag ให้คั่นด้วยเครื่องหมาย " , ")</Label>
                                <Input
                                    type="text"
                                    name="tags"
                                    id="productTags"
                                    value={product.tags || ""}
                                    onChange={handleInputChange}
                                    placeholder="ระบุ tags ของสินค้า" />
                            </FormGroup>
                            <Button className="btn1 btn-success" onClick={saveProduct}> Update Products</Button> {/* เมื่อกดจะเรียกใช้ฟังก์ชัน saveProduct /*/}
                        </Form>
                    )}
            </Row>
        </Container>
    );
};

export default EditProductForm;
