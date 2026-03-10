// src/theme/Root.js
import React, { useEffect } from 'react';

export default function Root({ children }) {
  useEffect(() => {
    // Chatbase init
    if (!window.chatbase || window.chatbase("getState") !== "initialized") {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) window.chatbase.q = [];
        window.chatbase.q.push(args);
      };
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === "q") return target.q;
          return (...args) => target(prop, ...args);
        }
      });
    }

    const script = document.createElement("script");
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "QmYkrUqr0_hp0BFPP8Wgw";
    script.domain = "www.chatbase.co";
    document.body.appendChild(script);
  }, []);

  return <>{children}</>;
}