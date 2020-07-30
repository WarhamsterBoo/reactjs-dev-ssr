import Link from 'next/link'

const Index = () => {
    return (<div>
        <p>Hello, world!</p>
        <Link href="about"><a>About</a></Link>
        <br />
        <Link href="product/[id]" as={`/product/${1}`}><a>Product 1</a></Link>
        <br />
        <Link href="product/[id]" as={`/product/${2}`}><a>Product 2</a></Link>
        <br />
        <Link href="product/[id]" as={`/product/${3}`}><a>Product 3</a></Link>
    </div>)
};

export default Index;