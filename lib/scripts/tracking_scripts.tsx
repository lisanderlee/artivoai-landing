'use client'

import Script from 'next/script'

export function TrackingScripts() {
  return (
    <>
      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-ND48B88W');`}
      </Script>

      {/* Hotjar */}
      <Script id="hotjar" strategy="afterInteractive">
        {`(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:5337021,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>

      {/* Brevo */}
      <Script 
        id="brevo-sdk" 
        src="https://cdn.brevo.com/js/sdk-loader.js" 
        strategy="afterInteractive" 
      />
      <Script id="brevo-init" strategy="afterInteractive">
        {`window.Brevo = window.Brevo || [];
        Brevo.push([
          "init",
          {
            client_key: "qrgwlogy5of4d308j2vzz7wu",
          }
        ]);`}
      </Script>
    </>
  )
}