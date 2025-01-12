'use client';

import FormContainer from '../form/FormContainer';
//import { toggleFavoriteAction } from '@/utils/actions';
import { CardSubmitButton } from '../form/Buttons';

type FavoriteToggleFormProps = {
  productId: string;
  favoriteId: string | null;
};

function FavoriteToggleForm({
  productId,
  favoriteId,
}: FavoriteToggleFormProps) {
 
  
  return (
    <FormContainer>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}
export default FavoriteToggleForm;