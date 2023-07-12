import { Row, Col } from 'react-bootstrap'
import { productsArray } from '../productStore'
import { ProductCard } from '../components/ProductCard'


export function Store(){
    return(
        <>
            <h1 align="center" className='p-3'>Welcome to the Store</h1>
            <Row xs={1} md={3} className='g-4'>
                {productsArray.map((product, idx) => (
                    <ProductCard product={product}></ProductCard>
                ))}
            </Row>
        </>
    )
}