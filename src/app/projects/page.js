import ProjectsSection from "./ProjectsSection.js";
import ModelViewer from '../components/ModelViewer';

export default function Home() {
  return (
	<>
	
	  <ModelViewer modelPath="/models/bluprints.glb" shadowHeight={-1.6} />
	  <ProjectsSection />
	</>
  );
}