'use client';

import { useState, useEffect } from 'react';

const ENDPOINT =
  'https://httpbin.org/response-headers?Content-Security-Policy=script-src%20%27self%27%20https://*.ngrok.io:*;%20default-src%20%27self%27%20http://127.0.0.1:*;%20style-src%20%27self%27%20https://fonts.googleapis.com;&Access-Control-Expose-Headers=Content-Security-Policy';

export default function Home() {
  const [cspHeader, setCspHeader] = useState(null);

  const getData = async () => {
    const response = await fetch(ENDPOINT);
    setCspHeader(response.headers.get('Content-Security-Policy'));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {cspHeader && (
        <div>
          CSP Header: <pre>{JSON.stringify(cspHeader, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
