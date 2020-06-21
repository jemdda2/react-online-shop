import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Row, Col } from 'antd';

import ProductInfo from './Sections/ProductInfo'
import ProductImage from './Sections/ProductImage'

function DetailProductPage(props) {

	const productId = props.match.params.productId;
	const [Product, setProduct] = useState([]);

	useEffect(() => {
		Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
			.then(response => {
				console.log(response.data[0]);
				setProduct(response.data[0]);
			})

	}, [])

	return (
		<div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<h1>{Product.title}</h1>
			</div>

			<Row gutter={[16, 16]} >
				<Col lg={12} xs={24}>
					<ProductImage detail={Product} />
				</Col>
				<Col lg={12} xs={24}>
					<ProductInfo detail={Product} />
				</Col>
			</Row>
		</div>
	)
}

export default DetailProductPage
