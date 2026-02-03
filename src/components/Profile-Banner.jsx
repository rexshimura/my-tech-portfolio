export default function ProfileBanner() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10">
      <div className="relative">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 dark:border-white/10 ring-4 ring-gray-100 dark:ring-white/5">
          <img 
            src="/id/me.jpg" 
            alt="John Paul P. Mahilom" 
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>
      </div>
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">John Paul P. Mahilom</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">Software Engineer</p>
        <p className="text-sm text-gray-500">Cebu, Philippines</p>
      </div>
    </section>
  );
}