'use client';
import { useFormStatus } from 'react-dom';

// import { useToast } from '@/components/ui/use-toast';
// import { actionFunction } from '@/utils/types';

type ActionFunction = (formData: FormData) => Promise<void>;

function FormContainer({
  action,
  children,
}: {
  action: ActionFunction;
  children: React.ReactNode;
}) {
  // const { toast } = useToast();
 
  return (
    <form action={action}>
      {children}
    </form>
  );
}

export default FormContainer;