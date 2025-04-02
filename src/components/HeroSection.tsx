import React from 'react'
import { ArrowRight } from 'lucide-react'
import { AuroraBackground } from './ui/aurora-background'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <AuroraBackground className="px-4 pt-4 pb-12 md:pt-6 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center z-10 relative">
        
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center"
        >
          <img 
            src="https://i.imgur.com/P0IOLMW.png" 
            alt="Interlink Logo" 
            className="h-12 md:h-16"
          />
        </motion.div>
        
        {/* Hero Content */}
        <div className="text-center max-w-3xl mb-1">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base uppercase tracking-wider text-[#064088] font-medium mb-6"
          >
            FREE GUIDE – GET IT NOW!
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-[#064088] mb-6"
          >
            5 Easy Steps to Study in the USA
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#064088] mb-10 opacity-90 max-w-2xl mx-auto"
          >
            <p className="mb-2">Yes, you can have the experience of a lifetime in the USA!</p>
            <p className="mb-6">
              Get the <span className="font-bold">step-by-step guide</span> for <span className="underline">finding the right program</span> and how to <span className="underline">prepare for your </span>English and Academic studies!
            </p>
            <p>- All in one guide -</p>
          </motion.div>
        </div>

        {/* Opt-in Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="w-full max-w-4xl mx-auto bg-white/90 p-6 md:p-8 rounded-2xl shadow-lg"
        >
          <form
            onSubmit={async (e) => {
              e.preventDefault()

              const form = e.currentTarget
              const formData = new FormData(form)

              const data = new URLSearchParams()
              data.append('u', '607289d66021f9dbd8e30d04c')
              data.append('id', 'f16b13f8cc')
              data.append('FNAME', formData.get('FNAME') as string)
              data.append('EMAIL', formData.get('EMAIL') as string)

              await fetch('https://interlink.us11.list-manage.com/subscribe/post', {
                method: 'POST',
                mode: 'no-cors',
                body: data,
              })

              window.location.href = '/guide'
            }}
            className="space-y-4"
          >
            <input type="hidden" name="u" value="607289d66021f9dbd8e30d04c" />
            <input type="hidden" name="id" value="f16b13f8cc" />

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

            <button
              type="submit"
              className="w-full bg-[#dc5d33] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#c24e2b] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Get Instant Access</span>
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-4 text-sm text-center text-gray-600">
            Trusted by <span className="font-semibold">thousands</span> of students from <span className="font-semibold">60+</span> countries
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  )
}

export default HeroSection
