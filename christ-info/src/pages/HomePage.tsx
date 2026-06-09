import NavigationFunnel from '../components/sections/NavigationFunnel'
import LeadershipStrip from '../components/sections/LeadershipStrip'
import FacultyPreview from '../components/sections/FacultyPreview'
import UniversityExcellence from '../components/sections/UniversityExcellence'
import RulesSection from '../components/sections/RulesSection'
import { VisionMissionSection } from '../components/sections/VisionMissionSection'
import { AnthemSection } from '../components/sections/AnthemSection'

export function HomePage() {
  return (
    <main>
      <NavigationFunnel />
      <VisionMissionSection />
      <UniversityExcellence />
      <LeadershipStrip />
      <FacultyPreview />
      <RulesSection />
      <AnthemSection />
    </main>
  )
}

export default HomePage
