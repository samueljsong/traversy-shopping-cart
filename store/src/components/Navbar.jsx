import { Button, Container, Navbar, Modal } from 'react-bootstrap'

export function NavbarComponent() {
    
    return (
        <Navbar expand="sm">
            <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
            <Navbar.Toggle></Navbar.Toggle>
            <Navbar.Collapse className='justify-content-end'>
                <Button>Cart 0 Items</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}