import { siteConfig } from "../../site-config";

const html = ({
  body,
  title,
  styles,
  defaultState,
}: {
  body: string;
  title: string;
  styles: any;
  defaultState: any;
}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${
        siteConfig.client.required.window.title.prefix
      } - ${title}</title>
      <meta charset="utf-8" />
      <link rel="icon" href=${siteConfig.client.required.window.title.logo} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link
      href="/css/index.css"
      rel="stylesheet"
    />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      ${styles}
    </head>
    <body style="margin:0">
      <div id="root">${body}</div>
    </body>
    <script>window.__STATE__ = ${JSON.stringify(defaultState)};</script>

    <script defer src="/bundle.client.js"></script>

  </html>
`;

export default html;
