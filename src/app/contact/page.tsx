"use client";

import { LiaCopy, LiaCheckSolid, LiaPenSolid } from "react-icons/lia";
import { SiDiscord } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const contacts = [
  {
    name: "Discord",
    desc: "Best for quick questions or project discussions",
    action: "copy",
    value: "dvitash",
  },
  {
    name: "Email",
    desc: "For formal inquiries or detailed proposals",
    action: "email",
    value: "mailto:dvitash.dev@gmail.com",
  },
];

function copyToClipboard(text: string) {
  if ("clipboard" in navigator) {
    navigator.clipboard.writeText(text);
  } else {
    document.execCommand("copy", true, text);
  }
}

function ContactCard({ contact }: { contact: (typeof contacts)[0] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(contact.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="card p-6">
      <div className="flex items-start gap-4">
        {/* icon */}
        <div className="text-[var(--accent)] text-2xl shrink-0 mt-1">{contact.name === "Discord" ? <SiDiscord /> : <HiMail />}</div>

        {/* content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-display text-lg">{contact.name}</h3>
          </div>
          <p className="text-[var(--text-secondary)] text-sm mb-4">{contact.desc}</p>

          {/* action buttons */}
          <div className="flex gap-3">
            {contact.action === "copy" ? (
              <button onClick={handleCopy} className="btn-secondary text-xs py-2 px-3 flex items-center gap-2">
                {copied ? (
                  <>
                    <LiaCheckSolid />
                    Copied
                  </>
                ) : (
                  <>
                    <LiaCopy />
                    Copy username
                  </>
                )}
              </button>
            ) : (
              <>
                <a href={contact.value} className="btn-primary text-xs py-2 px-3 flex items-center gap-2">
                  <LiaPenSolid />
                  Write email
                </a>
                <button onClick={handleCopy} className="btn-secondary text-xs py-2 px-3 flex items-center gap-2">
                  {copied ? (
                    <>
                      <LiaCheckSolid />
                      Copied
                    </>
                  ) : (
                    <>
                      <LiaCopy />
                      Copy email
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="section">
      {/* header */}
      <div className="mb-12">
        <p className="font-label text-[var(--accent)] mb-4">Contact</p>
        <h1 className="font-display text-3xl md:text-4xl mb-4">Get in Touch</h1>
        <p className="text-[var(--text-secondary)] max-w-lg">I&apos;m open to discussing projects, opportunities, or collaboration ideas. Discord is the fastest way to reach me.</p>
      </div>

      {/* contact cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
}
