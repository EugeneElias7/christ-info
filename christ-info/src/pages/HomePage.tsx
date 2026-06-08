import NavigationFunnel from '../components/sections/NavigationFunnel'
import LeadershipStrip from '../components/sections/LeadershipStrip'
import FacultyPreview from '../components/sections/FacultyPreview'
import UniversityExcellence from '../components/sections/UniversityExcellence'
import RulesSection from '../components/sections/RulesSection'

export function HomePage() {
  return (
    <main>
      <NavigationFunnel />
      <UniversityExcellence />
      <LeadershipStrip />
      <FacultyPreview />
      <RulesSection />
    </main>
  )
}

export default HomePage
