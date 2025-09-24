import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  // Helper: add clean-view params to the Power BI URL
  const clean = (url) =>
    `${url}&navContentPaneEnabled=false&filterPaneEnabled=false&chromeless=true`

  const projects = [
    {
      title: 'Lululemon Valuation Model',
      description:
        'Excel-based valuation model for Lululemon Athletica (LULU). Includes historical financials, DCF analysis, and scenario forecasting to estimate intrinsic value.',
      impact: 'DCF Valuation • Scenario & Sensitivity Analysis • Equity Research',
      technologies: ['Excel', 'DCF', 'Financial Modeling', 'Valuation'],
      github: 'https://github.com/Nitinn1994-bit/lululemon-valuation',
      color: 'from-pink-500 to-red-500',
    },
    {
      title: 'Finance Overview – FP&A Dashboard',
      description:
        'Comprehensive view of financial performance with KPIs for Revenue, COGS, Gross Profit, Expenses, and Net Profit. Includes revenue trends, top accounts, and working capital for daily decision-making.',
      impact: 'Daily KPI tracking • Revenue & Expense insights • Working Capital',
      technologies: ['Budget vs Actuals', 'Forecasting', 'Net Profit'],
      github: 'https://github.com/Nitinn1994-bit/Finance_Overview_Dashboard.git', 
      color: 'from-pink-500 to-red-500',
    },
    {
      title: 'Receivables Overview – AR Dashboard',
      description:
        'Real-time tracking of invoices, open balances, DSO trends, and aging. Includes overview, status, aging, customer statement, and payments views for stronger cash-flow visibility and collections.',
      impact: 'AR tracking • DSO & Aging insights • Payment trends',
      technologies: ['Accounts Receivable', 'DSO', 'Aging', 'Payments'],
      github: 'https://github.com/Nitinn1994-bit/AR_Dashboard.git',
      color: 'from-pink-500 to-red-500',
    },
    {
      title: 'Financial Insights Dashboard',
      description:
        'A dynamic FP&A solution built in Power BI that consolidates profitability, liquidity, and solvency metrics into a single analytical framework. The dashboard integrates Income Statement and Balance Sheet perspectives, featuring KPIs for Revenue, COGS, OpEx, Net Income, Current Assets, Liabilities, and Debt-to-Equity. Interactive slicers for year, month, legal entity, and cost center enable multi-dimensional drill-downs, while time-intelligence calculations (YoY, TTM) provide context for trend analysis and strategic forecasting.',
      impact: 'Comprehensive financial storytelling • Cross-functional performance monitoring • Strategic decision enablement',
      technologies: ['Power BI', 'Power Query (parameters, type hygiene)', 'Dim/Fact modeling', 'Custom Visuals (Advance Card)'],
      github: 'https://github.com/Nitinn1994-bit/Financial_Insights_Dashboard.git',
      color: 'from-pink-500 to-red-500',
    },
    {
      title: 'Fixed Assets Dashboard',
      description:
        'Tracks asset lifecycle KPIs: beginning balance, acquisitions, depreciation, disposals, and net book value. Drilldowns by month, asset group, and location for effective asset management.',
      impact: 'Lifecycle tracking • Depreciation analysis • Acquisition monitoring',
      technologies: ['Fixed Assets', 'Depreciation', 'Acquisition', 'Disposals'],
      github: 'https://github.com/Nitinn1994-bit/Fixed_Assets_Dashboard.git',
      color: 'from-pink-500 to-red-500',
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid gap-6 sm:gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl glass-effect p-6 sm:p-8 hover-glow smooth-transition"
              whileHover={{ y: -5 }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-dark-text group-hover:text-accent-purple transition-colors duration-300 mb-4">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-dark-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-sm sm:text-base text-accent-purple font-medium mb-4">
                  {project.impact}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-accent-purple/10 text-accent-purple-light border border-accent-purple/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* If GitHub link project */}
                {project.github && (
                  <div className="mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-purple/20 hover:bg-accent-purple/30 smooth-transition"
                    >
                      <FaGithub className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </div>
                )}

                {/* If embed project */}
                {project.embed && (
                  <div className="w-full overflow-hidden rounded-lg shadow-lg relative mt-4">
                    <div
                      style={{
                        transform: 'scale(0.8)',
                        transformOrigin: 'top left',
                        width: '125%',
                        height: '1000px',
                      }}
                    >
                      <iframe
                        title={project.title}
                        src={project.embed}
                        width="100%"
                        height="1000"
                        frameBorder="0"
                        allowFullScreen={true}
                        style={{ background: 'transparent' }}
                      />
                    </div>
                    <div className="mt-4">
                      <a
                        href={project.open}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-purple/20 hover:bg-accent-purple/30 smooth-transition"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        View full report
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
