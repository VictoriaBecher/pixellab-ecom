import { Layout } from '../../layouts';
import { ContinueShopping } from '../cart';

export const ProductNotFound = () => {
  return (
    <Layout>
      <div></div>
      <div className="text-center text-2xl">Product not found</div>
      <div className="lg:w-1/5  place-self-center -mt-6 lg:-mt-38">
        <ContinueShopping></ContinueShopping>
      </div>
    </Layout>
  );
};
