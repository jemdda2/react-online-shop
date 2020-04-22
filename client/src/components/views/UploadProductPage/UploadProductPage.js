import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/FileUpload';

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    {key: 1, value: "Africa"},
    {key: 2, value: "Europe"},
    {key: 3, value: "Asia"},
    {key: 4, value: "North America"},
    {key: 5, value: "South America"},
    {key: 6, value: "Australia"},
    {key: 7, value: "Antarctica"}
]

function UploadProductPage() {

    const [TitleValue, setTitleValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [PriceValue, setPriceValue] = useState(0);
    const [ContinentValue, setContinentValue] = useState(1);

    const [Images, setImages] = useState([]);

    const onTitleChange = (e) => {
        setTitleValue(e.currentTarget.value);
    }

    const onDescriptionChange = (e) => {
        setDescriptionValue(e.currentTarget.value);
    }

    const onPriceChange = (e) => {
        setPriceValue(e.currentTarget.value);
    }

    const onContinentSelectChange = (e) => {
        setContinentValue(e.currentTarget.value);
    }

    const updateImages = (newImage) => {
        console.log(newImage);
        setImages(newImage);
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>

            <div style={{ textAlign: 'center', marginBottom: '2rem'}}>
                <Title level={2}> Upload Travel Product</Title>
            </div>

            <Form onSubmit >

            {/* DropZone */}
                <FileUpload refreshFunction={updateImages}/>

                <br />
                <br />
                <label>Title</label>
                <Input 
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Description</label>
                <TextArea 
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Price($)</label>
                <Input 
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br />
                <br />
                <select onChange={onContinentSelectChange}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>                        
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick
                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage
