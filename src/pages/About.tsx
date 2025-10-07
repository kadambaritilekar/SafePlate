import { motion } from 'motion/react';
import { Target, Eye, Heart, Users, Award, Globe, User } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const teamMembers = [
    {
      name: 'Miss Mansi Wagh',
      role: 'Computer Engineering Student',
      bio: 'Passionate computer engineering student dedicated to leveraging technology for food safety awareness and consumer protection.',
    },
    {
      name: 'Miss Kadambari Tilekar',
      role: 'Computer Engineering Student',
      bio: 'Passionate computer engineering student committed to building innovative solutions for public health and food safety.',
    },
    {
      name: 'Miss Anushka Tupe',
      role: 'Computer Engineering Student',
      bio: 'Passionate computer engineering student focused on creating impactful digital platforms for community wellness.',
    },
    {
      name: 'Miss Sanchita Thombare',
      role: 'Computer Engineering Student',
      bio: 'Passionate computer engineering student devoted to using technology to educate and empower consumers about food safety.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To empower every individual with the knowledge and tools to identify food adulteration, ensuring safer food choices for healthier communities worldwide.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'A world where every consumer is informed, every food product is pure, and food adulteration becomes a thing of the past through collective awareness and action.',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description:
        'Transparency, education, integrity, and community empowerment drive everything we do. We believe in making food safety information accessible to everyone.',
    },
  ];

  const achievements = [
    {
      icon: Users,
      number: '100K+',
      label: 'People Educated',
    },
    {
      icon: Award,
      number: '50+',
      label: 'Workshops Conducted',
    },
    {
      icon: Globe,
      number: '25+',
      label: 'Cities Reached',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4">About Safe Plate</h1>
          <p className="text-lg text-[#243119]/80 max-w-3xl mx-auto">
            Dedicated to making food safety knowledge accessible to everyone, one plate at a time
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(98, 148, 96, 0.2)' }}
                  className="bg-white rounded-xl p-6 h-full border-2 border-[#96be8c]"
                >
                  <div className="w-14 h-14 bg-[#629460] rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="mb-3">{value.title}</h3>
                  <p className="text-[#243119]/80">{value.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 mb-16 border-2 border-[#96be8c]"
        >
          <h2 className="mb-6 text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#243119]/80 mb-4">
                Safe Plate was born from a simple yet powerful realization: millions of people consume
                adulterated food every day without knowing it. What started as a small community initiative
                has grown into a comprehensive platform dedicated to food safety awareness.
              </p>
              <p className="text-[#243119]/80 mb-4">
                Our founders, a group of food scientists, health professionals, and consumer advocates, came
                together with a shared vision of creating a world where everyone has access to safe, pure
                food. They recognized that knowledge is the most powerful tool in combating food adulteration.
              </p>
              <p className="text-[#243119]/80">
                Today, Safe Plate serves as a trusted resource for consumers, providing scientifically-backed
                information, practical testing methods, and a supportive community. We continue to expand our
                reach, partnering with health organizations, schools, and community groups to spread awareness
                about food safety.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZmVzc2lvbmFsJTIwb2ZmaWNlfGVufDF8fHx8MTc1OTc5NjkxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Safe Plate team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#629460] to-[#96be8c] rounded-xl p-8 md:p-12 mb-16 text-white"
        >
          <h2 className="mb-8 text-center text-white">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl mb-2">{achievement.number}</div>
                  <p className="text-lg text-white/90">{achievement.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center">Meet Our Team</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(98, 148, 96, 0.2)' }}
                  className="bg-white rounded-xl overflow-hidden border-2 border-[#96be8c]"
                >
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#96be8c] to-[#629460] flex items-center justify-center">
                    <User className="w-24 h-24 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1">{member.name}</h3>
                    <p className="text-[#629460] mb-3">{member.role}</p>
                    <p className="text-sm text-[#243119]/70">{member.bio}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 text-center border-2 border-[#96be8c]"
        >
          <h2 className="mb-4">Join Our Mission</h2>
          <p className="text-lg text-[#243119]/80 mb-6 max-w-2xl mx-auto">
            Together, we can create a safer food ecosystem. Whether you're a consumer, educator, or health
            professional, there's a place for you in our community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#629460] text-white rounded-lg hover:bg-[#aceda1] hover:text-[#243119] transition-all shadow-md inline-block"
            >
              Get Involved
            </motion.a>
            <motion.a
              href="/signup"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-[#629460] border-2 border-[#629460] rounded-lg hover:bg-[#c9f2c7] transition-all inline-block"
            >
              Create Account
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
