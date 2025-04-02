import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FinalCTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#064088] mb-4"
          >
            Still thinking? Get your guide now.
            <br />
            <span className="text-[#dc5d33]">It's FREE!</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 mb-8"
          >
            Thousands of students have unlocked these 5 easy steps—why not you?
            <br />
            Enter your name and email to see how simple studying in the U.S. can be.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg p-6 shadow-sm"
          >
            <form
              onSubmit={async (e) => {
                e.preventDefault()

                const form = e.currentTarget
                const formData = new FormData(form)

                const data = new URLSearchParams()
                data.append('FNAME', formData.get('FNAME') as string)
                data.append('EMAIL', formData.get('EMAIL') as string)

                await fetch('https://interlink.us11.list-manage.com/subscribe/post?u=607289d66021f9dbd8e30d04c&id=f16b13f8cc', {
                  method: 'POST',
                  mode: 'no-cors',
                  body: data,
                })

                window.location.href = '/guide'
              }}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  name="FNAME"
                  placeholder="First Name (e.g. John)"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064088] focus:border-transparent text-gray-800"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#064088] focus:border-transparent text-gray-800"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-[#dc5d33] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2"
                type="submit"
              >
                <span>Get Instant Access</span>
                <ArrowRight size={16} />
              </motion.button>
            </form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs text-gray-500 mt-4 flex items-center justify-center"
            >
              <span className="mr-1">📨</span> We'll send you the guide via email right away!
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
