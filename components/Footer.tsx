import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 container mx-auto px-8 py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6 text-xs text-gray-500">
          <a href="#" className="hover:text-white transition-colors">
            Новости кофейни
          </a>
          <a href="https://t.me" className="hover:text-white transition-colors">
            телеграм
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-white transition-colors"
          >
            инстаграм
          </a>
        </div>
        <div className="text-xs text-gray-600">
          © 2026 Choco Mug. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
