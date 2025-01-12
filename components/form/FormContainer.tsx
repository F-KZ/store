'use client';


// import { useToast } from '@/components/ui/use-toast';
// import { actionFunction } from '@/utils/types';


function FormContainer({
 // action,
  children,
}: {
//  action: actionFunction;
  children: React.ReactNode;
}) {
 // const { toast } = useToast();
 
  return <form >{children}</form>;
}
export default FormContainer;