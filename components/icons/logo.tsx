import clsx from 'clsx';
import logoPath from '../../app/assets/logo.png';
;

export default function LogoIcon(props: React.ComponentProps<'img'>) {
  return (
    <img
      src={logoPath.src}
      alt={`${process.env.SITE_NAME} logo`}
      {...props}
      className={clsx('h-12 w-10', props.className)}
    />
  );
}

