import { usePathname } from 'next/navigation';

export function useContactNumbers() {
  const pathname = usePathname();

  let numbers: string[] = [];

  // Transformers and Servos
  if (pathname?.includes('transformers') || pathname?.includes('servo')) {
    numbers = ['+91-8799999920', '+91-9027477854'];
  } 
  // Solar page or Home page (which has solar focus)
  else if (pathname?.includes('solar') || pathname === '/') {
    numbers = ['+91-7819987854'];
  } 
  // Remaining pages
  else {
    numbers = ['+91-9548477854'];
  }

  const primaryNumber = numbers[0];
  const primaryNumberClean = primaryNumber.replace(/\D/g, '');

  return {
    numbers,
    primaryNumber,
    primaryNumberClean
  };
}
