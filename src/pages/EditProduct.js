import React from 'react'
import EditProductForm from '../components/EditProductForm';

const EditProduct = (props) => {
    return (
        <>
            <main>
               <EditProductForm id={props.match.params.id} /> 
               {/* ดึงหน้า EditProductForm จาก components  //id = ค่า props ที่ส่งมาจากหน้า home /*/} 
            </main>
        </>
    )
}
export default EditProduct;