import { Links, Meta } from 'remix';
import { getCssText } from '~/styles/stitches.config';

export const Head = () => (
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />

    <link
      href="https://fonts.googleapis.com/css2?family=Bodoni+Moda&family=Cinzel&family=JetBrains+Mono&display=swap"
      rel="stylesheet"
    />
    <Meta />
    <Links />
    <link
      rel="icon"
      href="https://jdyyufqacmcssakjlzro.supabase.in/storage/v1/object/sign/images/grid-world.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZ3JpZC13b3JsZC5wbmciLCJpYXQiOjE2NDA4ODgxMDUsImV4cCI6MTk1NjI0ODEwNX0.zRnCGa-RxpzIV6f7heg3ZNZj5ggECQWe6iqkcjy_HS8"
    />
    <style
      id="stitches"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: getCssText() }}
    />
  </head>
);
