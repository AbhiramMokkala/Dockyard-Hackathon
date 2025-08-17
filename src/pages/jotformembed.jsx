import { useEffect, useState } from "react";

export default function JotformEmbed() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jotfor.ms/agent/embedjs/0198b6cb81067fae8c0aa94e0b0f30645eb0/embed.js";
    script.async = true;

    script.onload = () => {
      setTimeout(() => {
        setLoading(false);

        // Force the iframe to shrink after it loads
        const iframe = document.querySelector("iframe[id^='JotFormIFrame']");
        if (iframe) {
          iframe.style.width = "100%";
          iframe.style.height = "100%";
        }
      }, 1000);
    };

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {loading && (
        <div className="flex items-center justify-center p-6">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          <span className="ml-3 text-gray-600">Loading form...</span>
        </div>
      )}
      <div id="jotform-embed" className="w-full h-full"></div>
    </div>
  );
}
