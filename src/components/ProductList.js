import React, { useState, useEffect } from 'react' //import useState useEffect
import axios from 'axios'; //import axios ที่install เข้ามา เพื่อรับส่งข้อมูลกับ api ตัวเก่า
import { Container, Row, Table, Button } from "reactstrap"; //import Container Row Table  Button มาใช้จาก reactstrap
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // import icon มาใช้งาน
import { faEdit, faDumpster } from "@fortawesome/free-solid-svg-icons";// import icon มาใช้งาน
import confirm from "reactstrap-confirm"; // import modal confirm มาใช้จาก reactstrap

const ProductList = () => {
    const [products, setProducts] = useState([]); {/* ประกาศ  products setProducts เป็น useState /*/ }

    const updateProducts = () => {
        {/* ประกาศ updateProducts เพื่อเรียกข้อมูลจาก api มาโชว์  /*/ }
        axios.get("https://api61425048.herokuapp.com/product").then((response) => {
            {/* ใช้ axios ต่อด้วย get ตามด้วย ลิงก์ api ที่เราจะเรียกดูข้อมูล หลังจากนั้นเก็บไว้ใน response  /*/ }
            console.log(response);
            setProducts(response.data.product); {/*setProducts  response.data /*/ }
            console.log("Update products....");
        });
    };

    useEffect(() => {
        updateProducts(); //เรียกใช้ฟังก์ชัน updateProducts()
    }, []);

    const deleteProduct = async (productName, productId) => { //ประกาศ deleteProduct 
        let result = await confirm( //สร้างตัว confirm
            {
                title: <> Confirmation !!</>,
                message: 'คุณต้องการลบผลิตภัณฑ์"' + productName + '" ใช่ไหม ?',
                confirmText: "ใช่",
                confirmColor: "primary",
                cancelText: "ไม่ใช่",
                cancelColor: "danger"
            });
        if (result) {
            axios
                .delete("https://api61425048.herokuapp.com/product/" + productId) //ลบจาก api ที่ส่งมา productId
                .then((response) => {
                    updateProducts();
                });
        }
    };
    return (

        <Container>
            <Row> <h3> Product List</h3></Row>
            <Row>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => { //วนลูปข้อมูลออกมา
                            return (
                                <tr key={product._id}> {/* product จาก id/*/}
                                    <td>{product.name}</td>
                                    <td>{product.category}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <Button color="info" href={"/edit/" + product._id}>
                                            <FontAwesomeIcon icon={faEdit} />
                                         Edit   </Button>{" "}

                                        <Button
                                            color="danger"
                                            onClick={() => deleteProduct(product.name, product._id)}
                                        > {/*เมื่อกดจะทำการเรียกใช้  deleteProduct /*/}
                                            <FontAwesomeIcon icon={faDumpster} />
                                        Delelte</Button>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </Table>
            </Row>
        </Container>
    )
};
export default ProductList;
