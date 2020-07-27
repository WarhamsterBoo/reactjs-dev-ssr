import Link from 'next/link'

const Index = () => (
    <div>
        <p>Hello, world!</p>
        <Link href="about">About</Link>
        <br/>
        <Link href="product/[id]" as={`/product/${1}`}>Product 1</Link>
    </div>
);

export default Index;