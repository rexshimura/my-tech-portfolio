export default function CertificatesSection() {
  const certs = ["Cisco Networking Essentials", "Responsive Web Design"];
  return (
    <section className="space-y-4">
      <h2 className="text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-500 font-bold">Certificates</h2>
      <ul className="space-y-2">
        {certs.map(cert => (
          <li key={cert} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {cert}
          </li>
        ))}
      </ul>
    </section>
  );
}