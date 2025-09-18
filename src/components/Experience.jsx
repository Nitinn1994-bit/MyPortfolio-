import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {

  const experiences = [
    {
      company: 'Northeastern University',
      position: 'Finance Associate (FP&A)',
      period: 'Dec 2024 - Present',
      highlights: [
        "Built Power BI dashboards for budgets, fixed assets, and AR.",
        "Developed SAP expense analytics dashboard, cutting reconciliation time.",
        "Produced weekly cost reports and rolling forecasts (variance vs. budget).",
        "Created a Workday revenue dashboard for billing, collections, and GL.",
        "Published weekly budget reports in Workday Finance with (BVA) commentary.",
        "Managed fixed asset tracking and depreciation schedules.",
        "Maintained AR aging in FBS software, adding cues to reduce overdue amounts; tracked DSO and collection trends for cash forecasting."
      ],
    },
    {
      company: 'VMware',
      position: 'Financial Analyst 2',
      period: 'Dec 2022 - May 2024',
      highlights: [
        'Supported weekly bookings reporting, reconciling $12M+ revenue and delivering actuals vs. forecast and plan updates to EUC and Sales leadership.',
        'Partnered with Product Management to analyze, forecast, and plan scenarios on product roadmaps and market opportunities, quantifying financial impact for strategy decisions. ',
        'Engaged in monthly and quarterly forecasting of ARR, revenue, and SaaS metrics, improving reporting accuracy by 15% and strengthening monitoring of business health.',
        'Assisted in annual and long-range financial planning, preparing expense forecasts and scenario models to support company-wide strategic planning. ',
        'Designed automated Power BI dashboards integrating pipeline, revenue, and SaaS data, reducing reporting cycle time by 25% and enabling better decision-making. ',
        'Collaborated with FP&A, Sales Finance, Sales Ops, and BU Ops teams, leveraging Oracle Cloud, Salesforce, Tableau, and Power BI to enhance reporting processes and forecasting insights. '
      ],
    },
    {
      company: 'Urban Company',
      position: 'Business Development Associate',
      period: 'Apr 2022 - Nov 2022',
      highlights: [
        'Oversaw daily operational & administrative activites; utilized Excel to customize the analysis, enabled informed decision making & facilitated effective monitoring of the company performance; increased productivity by 40%.',
        'Monitored 4 analytical reports for supply and demand, mitigated risk in supply- demand balancing, and designed a reward and recognition program using SQL, Excel; witnessed a 7% revenue growth and improved partner retention.',
        'Tracked sales analytics, performed root cause analysis, and maintained relationships with stakeholders to mitigate future risks.'
      ],
    }
  ]

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple to-accent-purple-light" />

          <div className="relative sm:pl-20 space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden sm:block absolute left-6 top-2 w-4 h-4 bg-accent-purple rounded-full ring-4 ring-dark-bg" />
                
                <motion.div
                  whileHover={{ x: 5 }}
                  className="glass-effect rounded-xl sm:rounded-2xl p-6 sm:p-8 hover-glow smooth-transition"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-dark-text">{experience.position}</h3>
                      <p className="text-lg sm:text-xl text-accent-purple">{experience.company}</p>
                    </div>
                    <span className="text-sm sm:text-base text-dark-muted">{experience.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <li
                        key={highlightIndex}
                        className="flex items-start"
                      >
                        <span className="text-accent-purple mr-2 sm:mr-3 mt-0.5 flex-shrink-0">▸</span>
                        <span className="text-sm sm:text-base text-dark-muted leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
