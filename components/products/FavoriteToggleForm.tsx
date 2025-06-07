'use client';

import FormContainer from '../form/FormContainer';
import { toggleFavoriteAction } from '@/utils/action';
import { CardSubmitButton } from '../form/Buttons';
import { usePathname } from 'next/navigation';

type FavoriteToggleFormProps = {
  productId: string;
  favoriteId: string | null;
};

function FavoriteToggleForm({
  productId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();

  return (
    <FormContainer
      action={async (formData: FormData) => {
        await toggleFavoriteAction({
          productId,
          favoriteId,
          pathname
        });
      }}
    >
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}
export default FavoriteToggleForm;