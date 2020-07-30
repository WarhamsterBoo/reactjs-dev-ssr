import { useRouter } from 'next/router';
import { fetchSomething } from '../../src/api/someapi';

interface Props {
    data: any
}

const Product: React.FC<Props> = ({ data }) => {
    const router = useRouter();

    return (
        <>
            <h1>Product {router.query.id}</h1>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </>
    );
};

export async function getServerSideProps(context) {
    const data = await fetchSomething(context.params.id)
    return {
        props: { data },
    }
}

export default Product;