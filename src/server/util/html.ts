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
      <title>${title}</title>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
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
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
    <script>window.__STATE__ = ${JSON.stringify(defaultState)};</script>
    <script src="/bundle.client.js"></script>
  </html>
`;

export default html;
