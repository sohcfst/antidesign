import { LiveReload, Outlet, Scripts, ScrollRestoration } from 'remix';

export const AllThatBullShit = () => (
  <>
    <Outlet />
    <ScrollRestoration />
    <Scripts />
    {process.env.NODE_ENV === 'development' && <LiveReload />}
  </>
);
