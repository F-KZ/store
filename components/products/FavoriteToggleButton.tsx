// import { auth } from '@clerk/nextjs/server';
// import { CardSignInButton } from '../form/Buttons';
// import { fetchFavoriteId } from '@/utils/actions';
import FavoriteToggleForm from './FavoriteToggleForm';

async function FavoriteToggleButton({ productId }: { productId: string }) {
  { /* const { userId } = auth();
  if (!userId) return <CardSignInButton />; */}
 // const favoriteId = await fetchFavoriteId({ productId });

  return <FavoriteToggleForm  productId={productId} favoriteId={null} />;
}
export default FavoriteToggleButton;