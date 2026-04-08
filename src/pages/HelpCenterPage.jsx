import React, { useEffect } from "react";

function HelpCenterPage() {
  useEffect(() => {
    // Init function
    const initEmbeddedMessaging = () => {
      try {
        if (window.embeddedservice_bootstrap) {
          window.embeddedservice_bootstrap.settings.language = "en_US";

          window.embeddedservice_bootstrap.init(
            "00DdN00000sQYJx",
            "CB_Web_Embedded_Chat",
            "https://corebtr.my.site.com/ESWCBWebEmbeddedChat1775064788307",
            {
              scrt2URL: "https://corebtr.my.salesforce-scrt.com",
            },
          );
        }
      } catch (err) {
        console.error("Error loading Embedded Messaging:", err);
      }
    };

    // Create script
    const script = document.createElement("script");
    script.src =
      "https://corebtr.my.site.com/ESWCBWebEmbeddedChat1775064788307/assets/js/bootstrap.min.js";
    script.type = "text/javascript";
    script.async = true;

    script.onload = initEmbeddedMessaging;

    document.body.appendChild(script);

    // Cleanup (important)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      <h1>Help Center</h1>
    </div>
  );
}

export default HelpCenterPage;
