import { Component } from 'react';
import type { ReactNode } from 'react';

interface Props { children: ReactNode; fallback?: ReactNode }
interface State { failed: boolean }

/** Contains render errors (e.g. WebGL/chunk failures) instead of unmounting the app. */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(err: unknown) { console.error('[boundary]', err); }
  render() { return this.state.failed ? (this.props.fallback ?? null) : this.props.children; }
}
