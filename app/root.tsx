import type { MetaFunction } from 'remix';
import { getCssText, globalStyles } from './styles/stitches.config';
import { Head } from './rest/pages/root/Head';
import { AllThatBullShit } from './rest/pages/root/AllThatBullshit';

export const meta: MetaFunction = () => {
  return { title: 'antidesign' };
};

export default function App() {
  globalStyles();
  return (
    <html lang="en">
      <Head />
      <body>
        <AllThatBullShit />
      </body>
    </html>
  );
}
