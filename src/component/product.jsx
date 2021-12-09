import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Row, Col, Modal, Card, Image, Space, Typography, Tag, Input, Button } from "antd";
import axios from "axios";
export const Product = () => {
  const { id } = useParams();
  const { Title, Paragraph } = Typography;
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (info) => {
    setProduct(info);
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    axios.get("http://localhost:5000/api/product/" + id).then((res) => setProducts(res.data));
  }, []);
  return (
    <>
      <Space style={{ marginBottom: 10 }}>
        <Input style={{ width: "100%" }} />
        <Button>Найти</Button>
      </Space>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", gridGap: 15 }}>
        {products.map((item) => (
          <Card key={item._id} hoverable style={{ width: "100%" }} cover={<img alt="example" src={item.image} />} onClick={() => showModal(item)}>
            <Paragraph>{item.title}</Paragraph>
            <Paragraph>{item.prise} тнг</Paragraph>
            <Tag color={item.shop === "Белый ветер" ? "blue" : "red"}>{item.shop}</Tag>
          </Card>
        ))}
      </div>
      <Modal title="Продукт" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} okText="В корзину" cancelText="Закрыть">
        <Row gutter={10}>
          <Col md={12}>
            <Image alt="example" src={product?.image} width="100%" />
          </Col>
          <Col md={12}>
            <Title level={4}>{product?.title}</Title>
            <Title level={5}>{product?.prise} тг</Title>
            <Paragraph>
              {product?.description?.map((item, i) => (
                <Paragraph key={i} style={{ marginBottom: 5, borderBottom: "1px solid #fff" }}>
                  {item}
                </Paragraph>
              ))}
            </Paragraph>
          </Col>
        </Row>
      </Modal>
    </>
  );
};
