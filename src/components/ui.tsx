import type { ReactNode, CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BOOK_URL = 'https://calendly.com/eligooai/30min';
/** Self-serve entry points on the platform (eligoo.in/app is the SaaS, proxied on the same origin). */
export const TRIAL_URL = '/app/sign-up?plan=plan_trial';
export const SIGN_IN_URL = '/app/sign-in';

const isExternal = (href: string) => /^https?:\/\//.test(href);
const isApp = (href: string) => href.startsWith('/app/') || href.startsWith('#') || href.startsWith('mailto:');

/** Internal links use the router; platform (/app), anchors and external URLs are plain anchors. */
export function SmartLink({ href, children, className, style, onClick, ariaLabel }: { href: string; children: ReactNode; className?: string; style?: CSSProperties; onClick?: () => void; ariaLabel?: string }) {
  if (isExternal(href)) return <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style} onClick={onClick} aria-label={ariaLabel}>{children}</a>;
  if (isApp(href)) return <a href={href} className={className} style={style} onClick={onClick} aria-label={ariaLabel}>{children}</a>;
  return <Link to={href} className={className} style={style} onClick={onClick} aria-label={ariaLabel}>{children}</Link>;
}

/** "By signing up you agree to…" line shown next to every sign-up CTA. */
export function SignupConsent({ light = false, className = '' }: { light?: boolean; className?: string }) {
  const c = light ? 'rgba(255,255,255,0.6)' : '#5C6B67';
  const l = light ? 'rgba(255,255,255,0.9)' : '#041A17';
  return (
    <p className={`m-0 text-xs ${className}`} style={{ color: c, lineHeight: 1.6 }}>
      By signing up you agree to the{' '}
      <Link to="/p/terms" className="inline-block py-3 -my-3 px-1 -mx-1" style={{ color: l, fontWeight: 600 }}>Terms</Link>
      {' '}and{' '}
      <Link to="/p/privacy" className="inline-block py-3 -my-3 px-1 -mx-1" style={{ color: l, fontWeight: 600 }}>Privacy Policy</Link>.
    </p>
  );
}

export function Eyebrow({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <p className={`eyebrow m-0 flex items-center gap-2 ${className}`} style={{ color: light ? '#FF7A5C' : '#FF5A36' }}>
      <span className="inline-block w-6 h-[2px] rounded-full" style={{ backgroundColor: 'currentColor' }} />
      {children}
    </p>
  );
}

export function Button({ children, href, variant = 'coral', className = '', arrow = true, onClick }: {
  children: ReactNode; href: string; variant?: 'coral' | 'ink' | 'ghost' | 'ghost-dark' | 'white'; className?: string; arrow?: boolean; onClick?: () => void;
}) {
  const styles: Record<string, CSSProperties> = {
    coral: { backgroundColor: '#FF5A36', color: '#041A17', fontWeight: 700 },
    ink: { backgroundColor: '#041A17', color: '#ffffff' },
    white: { backgroundColor: '#ffffff', color: '#041A17' },
    ghost: { backgroundColor: 'transparent', color: '#ffffff', border: '1.5px solid rgba(255,255,255,0.35)' },
    'ghost-dark': { backgroundColor: 'transparent', color: '#041A17', border: '1.5px solid rgba(4,26,23,0.2)' },
  };
  return (
    <SmartLink href={href} onClick={onClick} className={`btn inline-flex items-center justify-center gap-2 no-underline rounded-full px-6 text-sm font-semibold ${className}`} style={{ ...styles[variant], minHeight: 48 }}>
      {children}
      {arrow && <ArrowRight size={16} strokeWidth={2.5} aria-hidden />}
    </SmartLink>
  );
}

/** The real Eligoo mark (rasterized from the supplied favicon SVG, untouched artwork). */
export function Mark({ size = 64, variant = 'dark', className, style }: { size?: number; variant?: 'dark' | 'white'; className?: string; style?: CSSProperties }) {
  return (
    <img
      src={`/brand/${variant === 'white' ? 'mark-white' : 'mark'}${size <= 96 ? '-sm.png' : size <= 820 ? '-md.webp' : '.png'}`}
      alt="" aria-hidden draggable={false} className={className} width={size} height={Math.round((size * 641) / 1191)}
      style={{ width: size, height: 'auto', display: 'block', ...style }}
    />
  );
}

/** Section wrapper: 16px gutters on phones, 40px from sm, centred 1180px container. */
export function Container({ children, className = '', max = 1180, style }: { children: ReactNode; className?: string; max?: number; style?: CSSProperties }) {
  return <div className={`mx-auto w-full px-4 sm:px-10 ${className}`} style={{ maxWidth: max, ...style }}>{children}</div>;
}
