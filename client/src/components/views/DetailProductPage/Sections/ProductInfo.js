import React, { useEffect, useState } from 'react'
import { Descriptions, Button } from 'antd'

function ProductInfo(props) {

	const [Product, setProduct] = useState({});

	useEffect(() => {
			setProduct(props.detail);
	}, [props.detail]);

	return (
		<div>
			<Descriptions title="Product Info">
				<Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
				<Descriptions.Item label="Sold"> {Product.sold}</Descriptions.Item>
				<Descriptions.Item label="View"> {Product.view}</Descriptions.Item>
				<Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
				<br />
				<br />
				<br />
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<Button size="large" shape="round" type="danger"
						onClick
					>
						Add to Cart
					</Button>
				</div>
			</Descriptions>
		</div>
	)
}

export default ProductInfo
