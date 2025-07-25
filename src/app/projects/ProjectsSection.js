'use client';

import { Box, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import GradientHeading from '../components/GradientHeading';
import ProjectCapsule from '../components/ProjectCapsule';

const MotionBox = motion(Box);

const allProjects = [
	{
		title: 'Defenders of the Dune',
		description: 'A strategic action game set in a harsh desert world, developed in collaboration with Wolversoft. I led gameplay UI design, gameplay systems, and assisted with art direction.',
		image: '/assets/projects/DoDImg1.jpg',
		technologies: [
			{ label: 'Unity', color: 'purple' },
			{ label: 'GitHub', color: 'blue' },
			{ label: 'Notion', color: 'green' },
			{ label: 'Figma', color: 'red' }
		],
		projectLink: '/projects/defenders-of-the-dune',
	},
	{
		title: 'Lobo Game',
		description: 'A homage to the classic NES game Jackal, built in Godot 4 with custom pixel art and modern UI/UX.',
		image: '/assets/projects/LoboImg1.png',
		technologies: [
			{ label: 'Godot 4', color: 'purple' },
			{ label: 'Aseprite', color: 'yellow' },
			{ label: 'UI/UX Design', color: 'blue' },
			{ label: 'Coding', color: 'green' }
		],
		projectLink: '/projects/lobo-game',
	},
	{
		title: 'Portfolio Website',
		description: 'A modern portfolio showcasing my projects and skills with React, Next.js, and Chakra UI. Features responsive design and interactive elements.',
		image: '/assets/projects/PortfolioWebsiteCap.png',
		technologies: [
			{ label: 'React', color: 'react' },
			{ label: 'Next.js', color: 'blue' },
			{ label: 'Chakra UI', color: 'purple' },
		],
		projectLink: '/projects/portfolio-website',
	},
	{
		title: 'Marble Tutorial Series',
		description: 'An educational YouTube series teaching 3D game development in Godot 4 by creating a marble obstacle course game similar to Marble Blast Ultra.',
		image: '/assets/projects/MarbleImg1.png',
		technologies: [
			{ label: 'Godot 4', color: 'purple' },
			{ label: 'YouTube', color: 'red' },
			{ label: '3D Development', color: 'blue' },
			{ label: 'Education', color: 'green' }
		],
		projectLink: '/projects/marble-tutorial-series',
	},
];

export default function ProjectsSection() {
	return (
		<MotionBox
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: 'easeOut' }}
			py={16}
			px={4}
		>
			<GradientHeading as="h1" size="2xl" textAlign="center" mb={3}>
				My Projects
			</GradientHeading>

			<Text
				textAlign="center"
				maxW="700px"
				mx="auto"
				mb={12}
				color={{ base: 'gray.600', _dark: 'gray.300' }}
			>
				A collection of my work across web development, game development, and educational content.
			</Text>

			{/* Project Cards using FeaturedProject component */}
			<Flex
				maxW="1200px"
				mx="auto"
				px={4}
				flexWrap="wrap"
				justifyContent="center"
				gap={8}
			>
				{allProjects.map((project, idx) => (
					<Box
						key={idx}
						flex="1 1 300px"
						maxW="350px"
						minW="260px"
						mb={8}
						display="flex"
						justifyContent="center"
					>
						<ProjectCapsule
							title={project.title}
							description={project.description}
							image={project.image}
							technologies={project.technologies}
							projectLink={project.projectLink}
						/>
					</Box>
				))}
			</Flex>
		</MotionBox>
	);
}