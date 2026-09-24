import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, LogIn } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import { NAV_GROUPS, PRICING, type NavGroup } from '../content/nav';
import { TRIAL_URL, SIGN_IN_URL } from './ui';

const APP_URL = '/app/home';
const HAS_CLERK = !!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

/**
 * Sign-in control. Before hydration (and whenever Clerk is not configured) it is a plain
 * link, so the prerendered markup never depends on Clerk; after mount it becomes Clerk's
 * modal-less redirect button and swaps to "Open my workspace" for signed-in users.
 */
function SignIn({ mobile = false, onNav }: { mobile?: boolean; onNav?: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const cls = mobile
    ? 'inline-flex items-center gap-2 no-underline rounded-full px-5 text-sm font-semibold'
    : 'inline-flex items-center gap-2 no-underline rounded-full px-4 text-[13px] font-semibold cursor-pointer border-0';
  const style = { backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', minHeight: 44 };
  if (!mounted || !HAS_CLERK) return <a href={SIGN_IN_URL} className={cls} style={style} onClick={onNav}><LogIn size={14} strokeWidth={2.5} aria-hidden /> Sign in</a>;
  return (
    <>
      <SignedOut>
        <SignInButton mode="redirect" forceRedirectUrl={APP_URL} signUpForceRedirectUrl={APP_URL}>
          <button type="button" className={cls} style={style} onClick={onNav}><LogIn size={14} strokeWidth={2.5} aria-hidden /> Sign in</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <a href={APP_URL} className={cls} style={style} onClick={onNav}>Open my workspace <ArrowRight size={14} strokeWidth={2.5} aria-hidden /></a>
      </SignedIn>
    </>
  );
}

function Dropdown({ group }: { group: NavGroup }) {
  const wide = group.links.some((l) => l.text);
  const path = useLocation().pathname;
  const active = path === group.href || path.startsWith(group.href) || group.links.some((l) => path === l.href || path.startsWith(l.href));
  return (
    <div className="relative group">
      <Link to={group.href} className="inline-flex items-center gap-1 text-[13px] font-semibold no-underline px-3 rounded-full" style={{ color: active ? '#fff' : 'rgba(255,255,255,0.88)', backgroundColor: active ? 'rgba(255,255,255,0.12)' : 'transparent', minHeight: 44 }} aria-haspopup="true" aria-current={active ? 'page' : undefined}>
        {group.label} <ChevronDown size={13} strokeWidth={2.5} aria-hidden />
      </Link>
      <div className="mega absolute left-0 top-full pt-2" style={{ minWidth: wide ? 560 : 240 }}>
        <div className="rounded-[20px] p-3 shadow-2xl" style={{ backgroundColor: '#fff', border: '1px solid #E1E8E5' }}>
          <ul className={`m-0 p-0 grid gap-1 ${wide ? 'grid-cols-2' : 'grid-cols-1'}`} style={{ listStyle: 'none' }}>
            {group.links.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="block no-underline rounded-xl px-3 py-2.5 transition-colors hover:bg-[#F3F6F4]">
                  <span className="block text-[13.5px] font-semibold" style={{ color: '#041A17' }}>{l.label}</span>
                  {l.text && <span className="block text-[12px] mt-0.5" style={{ color: '#5C6B67', lineHeight: 1.4 }}>{l.text}</span>}
                </Link>
              </li>
            ))}
          </ul>
          <Link to={group.href} className="mt-2 inline-flex items-center gap-1.5 no-underline text-[12px] font-bold px-3 py-2" style={{ color: '#FF5A36' }}>
            All {group.label.toLowerCase()} <ArrowRight size={12} strokeWidth={2.5} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => { setOpen(false); (document.activeElement as HTMLElement | null)?.blur?.(); }, [loc.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
    <header className="fixed top-0 inset-x-0" style={{ zIndex: 90, backgroundColor: 'rgba(4,26,23,0.92)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="mx-auto flex items-center justify-between gap-3 px-4 sm:px-6" style={{ maxWidth: 1280, height: 64 }}>
        <Link to="/" className="flex items-center shrink-0" aria-label="Eligoo home">
          <img src="/brand/logo-white.svg" alt="Eligoo" width={73} height={30} style={{ height: 30, width: 'auto' }} />
        </Link>
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main">
          {NAV_GROUPS.map((g) => <Dropdown key={g.label} group={g} />)}
          <Link to={PRICING.href} className="inline-flex items-center text-[13px] font-semibold no-underline px-3 rounded-full" style={{ color: 'rgba(255,255,255,0.88)', minHeight: 44 }}>{PRICING.label}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden sm:block"><SignIn /></div>
          <a href={TRIAL_URL} className="hidden sm:inline-flex items-center gap-2 no-underline rounded-full px-5 text-[13px]" style={{ backgroundColor: '#FF5A36', color: '#041A17', fontWeight: 700, minHeight: 44 }}>
            Start free trial <ArrowRight size={14} strokeWidth={2.5} aria-hidden />
          </a>
          <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)}
            className="lg:hidden rounded-full flex items-center justify-center border-0 cursor-pointer" style={{ width: 44, height: 44, backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff' }}>
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

    </header>
      {/* full-screen mobile menu — a sibling of the header: backdrop-filter would otherwise make
          the header the containing block for this fixed panel */}
      <div className={`lg:hidden fixed inset-x-0 bottom-0 overflow-y-auto ${open ? '' : 'hidden'}`} style={{ top: 64, zIndex: 89, backgroundColor: '#041A17' }} aria-hidden={!open}>
        <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile">
          {NAV_GROUPS.map((g) => (
            <details key={g.label} className="mobile-group">
              <summary className="flex items-center justify-between cursor-pointer list-none font-display text-white px-2 rounded-xl" style={{ fontSize: 22, fontWeight: 900, minHeight: 52 }}>
                {g.label} <ChevronDown size={18} className="chev" aria-hidden />
              </summary>
              <ul className="m-0 p-0 pb-2 flex flex-col" style={{ listStyle: 'none' }}>
                <li><Link to={g.href} className="flex items-center no-underline px-4 rounded-xl text-[15px] font-semibold" style={{ color: '#FF7A5C', minHeight: 44 }}>All {g.label.toLowerCase()}</Link></li>
                {g.links.map((l) => (
                  <li key={l.href}><Link to={l.href} className="flex items-center no-underline px-4 rounded-xl text-[15px]" style={{ color: 'rgba(255,255,255,0.85)', minHeight: 44 }}>{l.label}</Link></li>
                ))}
              </ul>
            </details>
          ))}
          <Link to={PRICING.href} className="flex items-center font-display no-underline text-white px-2 rounded-xl" style={{ fontSize: 22, fontWeight: 900, minHeight: 52 }}>Pricing</Link>
          <div className="mt-4 flex flex-col gap-3 px-2 pb-10">
            <a href={TRIAL_URL} className="inline-flex items-center justify-center gap-2 no-underline rounded-full px-6 text-sm" style={{ backgroundColor: '#FF5A36', color: '#041A17', fontWeight: 700, minHeight: 48 }}>
              Start free trial <ArrowRight size={16} aria-hidden />
            </a>
            <div className="flex"><SignIn mobile onNav={() => setOpen(false)} /></div>
          </div>
        </nav>
      </div>
    </>
  );
}
