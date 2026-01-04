'use client';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

type Props = React.ComponentProps<typeof NextLink> & { className?: string };

export function Link({ className, ...props }: Props) {
  const pathName = usePathname();

  return (
    <NextLink
      {...props}
      className={`hover:font-bold hover:underline ${
        pathName === props.href ? 'font-bold underline' : ''
      } ${className}`}
    />
  );
}
