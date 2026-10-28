'use client';

export function StatsSection() {
  const stats = [
    {
      value: '10+',
      label: 'Team Members',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      value: '7+',
      label: 'Projects Delivered',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      value: '2+',
      label: 'Years Experience',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      value: '100%',
      label: 'Client Satisfaction',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-12">
          {/* Stats Grid - Left Side */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className={`text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-xs lg:text-sm xl:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Graphic - Right Side */}
          <div className="hidden lg:flex items-center justify-center flex-shrink-0">
            <div className="relative w-64 h-64">
              {/* Circular pie chart style graphic similar to GDT.com */}
              <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
                {/* Background circle */}
                <circle cx="100" cy="100" r="90" fill="none" stroke="#e5e7eb" strokeWidth="20" />
                
                {/* Colored segments */}
                <circle 
                  cx="100" 
                  cy="100" 
                  r="90" 
                  fill="none" 
                  stroke="url(#gradient1)" 
                  strokeWidth="20"
                  strokeDasharray="141 424"
                  strokeDashoffset="0"
                  className="transition-all duration-1000"
                />
                <circle 
                  cx="100" 
                  cy="100" 
                  r="90" 
                  fill="none" 
                  stroke="url(#gradient2)" 
                  strokeWidth="20"
                  strokeDasharray="141 424"
                  strokeDashoffset="-141"
                  className="transition-all duration-1000"
                />
                <circle 
                  cx="100" 
                  cy="100" 
                  r="90" 
                  fill="none" 
                  stroke="url(#gradient3)" 
                  strokeWidth="20"
                  strokeDasharray="142 424"
                  strokeDashoffset="-282"
                  className="transition-all duration-1000"
                />
                
                {/* Center circle */}
                <circle cx="100" cy="100" r="50" fill="white" />
                
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#ef4444" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Center icon/text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
