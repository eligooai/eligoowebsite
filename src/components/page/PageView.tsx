import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { PageContent } from '../../content/types';
import { byId } from '../../data/employees';
import { headFor } from '../../lib/seo';
import { Seo } from '../../lib/head';
import { Button, Container, Eyebrow, SignupConsent, TRIAL_URL, BOOK_URL } from '../ui';
import CharacterStage from './CharacterStage';
import { RenderSection } from './Sections';
import Footer from '../Footer';

function Breadcrumbs({ page }: { page: PageContent }) {
  if (page.slug === '/') return null;
  return (
    <nav aria-label="Breadcrumb" className="overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
      <ol className="m-0 p-0 flex items-center gap-1 whitespace-nowrap text-[12.5px] font-semibold -my-2" style={{ listStyle: 'none', color: 'rgba(255,255,255,0.6)' }}>
        {page.breadcrumb.map((c) => (
          <li key={c.href} className="flex items-center gap-1">
            <Link to={c.href} className="no-underline inline-flex items-center" style={{ color: 'rgba(255,255,255,0.7)', minHeight: 44, minWidth: 44 }}>{c.label}</Link>
            <ChevronRight size={12} aria-hidden />
          </li>
        ))}
        <li aria-current="page" style={{ color: '#FF7A5C' }}>{page.title}</li>
      </ol>
    </nav>
  );
}

export default function PageView({ page }: { page: PageContent }) {
  const head = headFor(page);
  const character = page.character ? byId(page.character) : null;
  const home = page.slug === '/';
  const primary = page.hero?.primary || { label: 'Start free trial', href: TRIAL_URL };
  const secondary = page.hero?.secondary || { label: 'Talk to us', href: BOOK_URL };

  return (
    <>
      <Seo {...head} />
      <main>
        <section className="relative overflow-hidden" style={{ backgroundColor: '#041A17', paddingTop: 96, paddingBottom: character ? 0 : 'clamp(48px, 8vw, 96px)' }}>
          <div className="absolute inset-0 dots opacity-40 pointer-events-none" aria-hidden />
          <div className="absolute pointer-events-none" style={{ right: '-10%', top: '-30%', width: 640, height: 640, background: 'radial-gradient(circle, rgba(255,90,54,0.22), transparent 60%)' }} aria-hidden />
          <Container className="relative">
            <Breadcrumbs page={page} />
            <div className={`grid grid-cols-1 ${character ? 'md:grid-cols-12' : ''} gap-8 items-end ${page.slug === '/' ? '' : 'mt-4'}`}>
              <div className={character ? 'md:col-span-7 lg:col-span-7 pb-10 md:pb-16' : 'pb-2'}>
                {page.eyebrow && <Eyebrow light>{page.eyebrow}</Eyebrow>}
                <h1 className="font-display m-0 mt-4 text-white" style={{ fontSize: home ? 'clamp(38px, 6.4vw, 80px)' : 'clamp(32px, 5vw, 60px)', lineHeight: 1.02, fontWeight: 900, letterSpacing: '-0.02em', maxWidth: 820 }}>
                  {page.title}
                </h1>
                <p className="m-0 mt-5 text-[17px] sm:text-[19px]" style={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, maxWidth: 680 }}>{page.answer}</p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Button href={primary.href}>{primary.label}</Button>
                  <Button href={secondary.href} variant="ghost">{secondary.label}</Button>
                </div>
                {primary.href.startsWith('/app/sign-up') && <SignupConsent light className="mt-3" />}
              </div>
              {character && (
                <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-end">
                  <CharacterStage employee={character} priority />
                </div>
              )}
            </div>
          </Container>
        </section>
        {page.sections.map((s, i) => <RenderSection key={i} s={s} i={i} />)}
        <p className="m-0 px-4 pb-8 text-center text-[12px]" style={{ color: '#8A9793' }}>Last updated {new Date(page.updated + 'T00:00:00Z').toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</p>
      </main>
      <Footer />
    </>
  );
}
