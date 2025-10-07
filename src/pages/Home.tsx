import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, AlertTriangle, ShieldCheck, BookOpen, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const features = [
    {
      icon: Search,
      title: 'Identify Adulterants',
      description: 'Learn to detect common adulterants in everyday foods with simple home tests.',
      link: '/adulterants',
      color: '#629460',
    },
    {
      icon: AlertTriangle,
      title: 'Health Risks',
      description: 'Understand the health impacts of consuming adulterated food products.',
      link: '/health-risks',
      color: '#96be8c',
    },
    {
      icon: ShieldCheck,
      title: 'Prevention Tips',
      description: 'Get actionable advice to protect yourself and your family from food fraud.',
      link: '/prevention',
      color: '#629460',
    },
    {
      icon: BookOpen,
      title: 'Learn More',
      description: 'Discover our mission and the team dedicated to food safety awareness.',
      link: '/about',
      color: '#96be8c',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#629460] to-[#96be8c] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Ensuring What You Eat is Safe & Pure
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Empower yourself with knowledge about food adulteration. Learn to identify contaminated
                foods, understand health risks, and protect your family.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/adulterants">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-[#629460] rounded-lg hover:bg-[#aceda1] hover:text-[#243119] transition-all shadow-lg flex items-center gap-2"
                  >
                    Learn to Check Your Food
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all"
                  >
                    Our Mission
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1650960129664-d7adcf7e3dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9yZ2FuaWMlMjB2ZWdldGFibGVzJTIwZnJ1aXRzfGVufDF8fHx8MTc1OTc3NTEzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fresh organic vegetables and fruits"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="mb-6">What is Food Adulteration?</h2>
          <p className="text-lg text-[#243119]/80">
            Food adulteration is the process of adding inferior, harmful, or unnecessary substances to food
            products. This practice can compromise food quality, nutritional value, and most importantly, your
            health. From mixing cheaper ingredients to adding harmful chemicals, food adulteration affects
            millions worldwide. Our mission is to help you identify, understand, and prevent this issue.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Explore Our Resources</h2>
            <p className="text-lg text-[#243119]/80 max-w-2xl mx-auto">
              Navigate through our comprehensive guides to become an informed consumer
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Link to={feature.link}>
                    <motion.div
                      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(98, 148, 96, 0.2)' }}
                      className="bg-white border-2 border-[#96be8c] rounded-xl p-6 h-full transition-all cursor-pointer"
                    >
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                        style={{ backgroundColor: feature.color }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="mb-3">{feature.title}</h3>
                      <p className="text-[#243119]/70 mb-4">{feature.description}</p>
                      <div className="flex items-center text-[#629460] group-hover:text-[#aceda1]">
                        <span>Learn More</span>
                        <ChevronRight className="w-5 h-5 ml-1" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-br from-[#96be8c] to-[#629460] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="mb-4">Did You Know?</h2>
                  <p className="text-lg md:text-xl leading-relaxed">
                    According to food safety authorities, approximately 70% of food samples tested show some
                    form of adulteration. This alarming statistic highlights the importance of being an
                    informed consumer. Common adulterants include water in milk, artificial colors in
                    spices, and synthetic substances in honey.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">70%</div>
                  <p className="text-white/80">Foods tested show adulteration</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">45+</div>
                  <p className="text-white/80">Common adulterants identified</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">100K+</div>
                  <p className="text-white/80">People educated</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#629460] to-[#96be8c] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="mb-4">Ready to Take Action?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of informed consumers who have learned to protect themselves and their families
            from food adulteration.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#629460] rounded-lg hover:bg-[#aceda1] hover:text-[#243119] transition-all shadow-lg"
              >
                Create Free Account
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all"
              >
                Get in Touch
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
