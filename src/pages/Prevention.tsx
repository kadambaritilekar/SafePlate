import { motion } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle,
  Store,
  Eye,
  FileCheck,
  Droplet,
  Package,
  Users,
  AlertCircle,
} from 'lucide-react';

export function Prevention() {
  const preventionTips = [
    {
      icon: Store,
      title: 'Choose Reputable Sources',
      tips: [
        'Buy from certified and licensed retailers',
        'Prefer established brands with good reputation',
        'Check store hygiene and storage conditions',
        'Avoid buying from unauthorized street vendors',
        'Research seller reviews and ratings online',
      ],
    },
    {
      icon: FileCheck,
      title: 'Check for Certifications',
      tips: [
        'Look for FSSAI (Food Safety and Standards Authority of India) license',
        'Verify ISI/BIS marks on packaged products',
        'Check for organic certification if buying organic',
        'Ensure quality assurance seals are intact',
        'Scan QR codes to verify product authenticity',
      ],
    },
    {
      icon: Eye,
      title: 'Visual Inspection',
      tips: [
        'Examine packaging for tampering or damage',
        'Check expiry dates and manufacturing dates',
        'Look for unusual colors or textures',
        'Verify that seals and caps are properly closed',
        'Avoid products with unclear or faded labels',
      ],
    },
    {
      icon: Droplet,
      title: 'Wash & Clean Properly',
      tips: [
        'Wash fruits and vegetables thoroughly under running water',
        'Use food-grade cleaning solutions for produce',
        'Soak leafy vegetables in salt water for 10 minutes',
        'Peel fruits and vegetables when possible',
        'Clean packaging before opening food items',
      ],
    },
    {
      icon: Package,
      title: 'Proper Storage',
      tips: [
        'Store foods at recommended temperatures',
        'Use airtight containers for dry foods',
        'Separate raw and cooked foods',
        'Follow "first in, first out" principle',
        'Regularly check stored items for spoilage',
      ],
    },
    {
      icon: Users,
      title: 'Stay Informed',
      tips: [
        'Follow food safety authority announcements',
        'Join consumer awareness groups',
        'Learn about common adulterants in your area',
        'Attend food safety workshops',
        'Share knowledge with family and community',
      ],
    },
  ];

  const checklistItems = [
    'Verify FSSAI license number on food packages',
    'Check batch number and manufacturing date',
    'Inspect packaging for signs of damage or tampering',
    'Look for unusual odors or appearance',
    'Compare prices - extremely low prices may indicate adulteration',
    'Read ingredient lists carefully',
    'Check for allergen information',
    'Verify net weight/volume matches labeling',
    'Ensure nutritional information is clearly printed',
    'Report suspicious products to authorities',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
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
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#629460] rounded-full flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="mb-4">Prevention Tips & Best Practices</h1>
          <p className="text-lg text-[#243119]/80 max-w-3xl mx-auto">
            Actionable strategies to protect yourself and your family from food adulteration
          </p>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-[#629460] to-[#96be8c] text-white rounded-xl p-6 md:p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="mb-2 text-white">Prevention is Better Than Cure</h3>
              <p className="text-white/90">
                By following these simple yet effective practices, you can significantly reduce your risk of
                consuming adulterated foods. Awareness and vigilance are your best defenses against food
                fraud.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Prevention Tips Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {preventionTips.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(98, 148, 96, 0.2)' }}
                  className="bg-white rounded-xl p-6 h-full border-2 border-[#96be8c]"
                >
                  <div className="w-12 h-12 bg-[#629460] rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#243119]/80">
                        <CheckCircle className="w-5 h-5 text-[#629460] flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Shopping Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 mb-12 border-2 border-[#96be8c]"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#629460] rounded-full flex items-center justify-center">
              <FileCheck className="w-6 h-6 text-white" />
            </div>
            <h2>Your Food Safety Checklist</h2>
          </div>
          <p className="text-[#243119]/80 mb-6">
            Use this checklist every time you shop for food to ensure you're making safe choices:
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {checklistItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 p-4 bg-[#c9f2c7] rounded-lg hover:bg-[#aceda1] transition-colors"
              >
                <div className="w-6 h-6 bg-[#629460] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#243119]">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white rounded-xl p-6 border-2 border-[#96be8c]">
            <h3 className="mb-4">When to Report</h3>
            <p className="text-[#243119]/80 mb-4">
              If you suspect food adulteration, report it immediately to the authorities:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#629460] rounded-full mt-2"></span>
                <span className="text-[#243119]/80">
                  FSSAI Food Safety Helpline: 1800-112-100
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#629460] rounded-full mt-2"></span>
                <span className="text-[#243119]/80">Local food safety officer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#629460] rounded-full mt-2"></span>
                <span className="text-[#243119]/80">Consumer forums and organizations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#629460] rounded-full mt-2"></span>
                <span className="text-[#243119]/80">Online complaint portals</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#629460] to-[#96be8c] rounded-xl p-6 text-white">
            <h3 className="mb-4 text-white">Emergency Response</h3>
            <p className="text-white/90 mb-4">
              If you experience adverse health effects after consuming food:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                <span className="text-white/90">Seek immediate medical attention</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                <span className="text-white/90">Preserve the food sample for testing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                <span className="text-white/90">Document symptoms and timing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-white rounded-full mt-2"></span>
                <span className="text-white/90">Report to health authorities</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
