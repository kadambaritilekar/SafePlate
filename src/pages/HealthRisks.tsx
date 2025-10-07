import { motion } from 'motion/react';
import { AlertTriangle, Heart, Brain, Activity, Pill, Shield } from 'lucide-react';

export function HealthRisks() {
  const healthRisks = [
    {
      icon: Activity,
      title: 'Digestive Issues',
      adulterants: ['Detergents in milk', 'Artificial colors in food', 'Mineral oil in edible oils'],
      effects: [
        'Acute gastroenteritis and diarrhea',
        'Stomach pain and cramping',
        'Nausea and vomiting',
        'Long-term intestinal damage',
      ],
      severity: 'Medium',
      color: '#96be8c',
    },
    {
      icon: Brain,
      title: 'Neurological Damage',
      adulterants: ['Lead in spices', 'Argemone oil in cooking oil', 'Mercury in fish'],
      effects: [
        'Cognitive impairment and memory loss',
        'Developmental delays in children',
        'Nerve damage and paralysis',
        'Seizures and tremors',
      ],
      severity: 'High',
      color: '#d4183d',
    },
    {
      icon: Heart,
      title: 'Cardiovascular Problems',
      adulterants: ['Trans fats', 'Hydrogenated oils', 'Synthetic food additives'],
      effects: [
        'Increased risk of heart disease',
        'High blood pressure',
        'Arterial blockages',
        'Irregular heartbeat',
      ],
      severity: 'High',
      color: '#d4183d',
    },
    {
      icon: Pill,
      title: 'Liver & Kidney Damage',
      adulterants: ['Pesticide residues', 'Heavy metals', 'Artificial sweeteners (excessive)'],
      effects: [
        'Liver inflammation and cirrhosis',
        'Kidney stones and failure',
        'Reduced organ function',
        'Toxic buildup in body',
      ],
      severity: 'High',
      color: '#d4183d',
    },
    {
      icon: AlertTriangle,
      title: 'Cancer Risk',
      adulterants: ['Coal tar dyes', 'Formaldehyde', 'Banned food colors'],
      effects: [
        'Increased cancer susceptibility',
        'DNA damage and mutations',
        'Tumor formation',
        'Weakened immune system',
      ],
      severity: 'Critical',
      color: '#8b0000',
    },
    {
      icon: Shield,
      title: 'Immune System Impact',
      adulterants: ['Antibiotics in meat/dairy', 'Preservatives (excessive)', 'Pesticides'],
      effects: [
        'Weakened immunity',
        'Allergic reactions',
        'Antibiotic resistance',
        'Increased infections',
      ],
      severity: 'Medium',
      color: '#96be8c',
    },
  ];

  const preventionMeasures = [
    'Buy from certified and reputable sources',
    'Check for FSSAI and quality certifications',
    'Perform simple home tests regularly',
    'Stay informed about common adulterants',
    'Report suspected adulteration to authorities',
    'Choose organic and minimally processed foods',
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
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-[#629460] rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="mb-4">Health Risks of Food Adulteration</h1>
          <p className="text-lg text-[#243119]/80 max-w-3xl mx-auto">
            Understanding the serious health consequences of consuming adulterated food products and how they
            affect different body systems
          </p>
        </motion.div>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-[#d4183d] to-[#ff4d6d] text-white rounded-xl p-6 md:p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 flex-shrink-0 mt-1" />
            <div>
              <h3 className="mb-2 text-white">Important Health Alert</h3>
              <p className="text-white/90">
                Food adulteration poses serious health risks ranging from mild discomfort to life-threatening
                conditions. Long-term consumption of adulterated foods can lead to chronic diseases, organ
                damage, and increased cancer risk. Children, pregnant women, and elderly are particularly
                vulnerable.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Health Risks Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {healthRisks.map((risk, index) => {
            const Icon = risk.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(98, 148, 96, 0.2)' }}
                  className="bg-white rounded-xl p-6 h-full border-2 border-[#96be8c]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: risk.color }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm text-white`}
                      style={{ backgroundColor: risk.color }}
                    >
                      {risk.severity}
                    </span>
                  </div>

                  <h3 className="mb-3">{risk.title}</h3>

                  <div className="mb-4">
                    <p className="text-sm mb-2 text-[#243119]/60">Common Causes:</p>
                    <ul className="space-y-1">
                      {risk.adulterants.map((adulterant, i) => (
                        <li key={i} className="text-sm text-[#243119]/80 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#629460] rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>{adulterant}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm mb-2 text-[#243119]/60">Health Effects:</p>
                    <ul className="space-y-1">
                      {risk.effects.map((effect, i) => (
                        <li key={i} className="text-sm text-[#243119]/80 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[#d4183d] rounded-full mt-1.5 flex-shrink-0"></span>
                          <span>{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Long-term Impact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 mb-12 border-2 border-[#96be8c]"
        >
          <h2 className="mb-6 text-center">Long-Term Health Impacts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4">Chronic Conditions</h3>
              <div className="space-y-3">
                <div className="bg-[#c9f2c7] p-4 rounded-lg">
                  <h4 className="mb-2">Organ Failure</h4>
                  <p className="text-[#243119]/80">
                    Continuous exposure to heavy metals and toxins can lead to irreversible liver and kidney
                    damage, requiring transplants in severe cases.
                  </p>
                </div>
                <div className="bg-[#c9f2c7] p-4 rounded-lg">
                  <h4 className="mb-2">Hormonal Imbalance</h4>
                  <p className="text-[#243119]/80">
                    Endocrine disruptors in adulterated foods can cause thyroid problems, reproductive issues,
                    and developmental disorders.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4">Vulnerable Groups</h3>
              <div className="space-y-3">
                <div className="bg-[#c9f2c7] p-4 rounded-lg">
                  <h4 className="mb-2">Children & Infants</h4>
                  <p className="text-[#243119]/80">
                    Growing bodies are more susceptible to toxins, leading to developmental delays, learning
                    disabilities, and stunted growth.
                  </p>
                </div>
                <div className="bg-[#c9f2c7] p-4 rounded-lg">
                  <h4 className="mb-2">Pregnant Women</h4>
                  <p className="text-[#243119]/80">
                    Adulterants can cross the placental barrier, causing birth defects, miscarriages, and
                    complications during pregnancy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Prevention Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#629460] to-[#96be8c] rounded-xl p-8 text-white"
        >
          <h2 className="mb-6 text-center text-white">How to Protect Yourself</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {preventionMeasures.map((measure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start gap-3"
              >
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm">{index + 1}</span>
                </div>
                <p className="text-white/90">{measure}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
