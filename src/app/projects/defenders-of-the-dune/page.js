'use client';

import { Box, Heading, Text, Link, Image, AspectRatio, VStack, Button, Badge, Stack, Separator } from '@chakra-ui/react';
import TechCapsule from '../../components/TechCapsule';
import GradientHeading from '../../components/GradientHeading';
import ProjectNav from '../../components/ProjectNav';

const media = [
  {
    type: 'video',
    src: '/assets/projects/DoDVid.mp4',
    alt: 'Defenders of the Dune trailer'
  },
  {
    type: 'image',
    src: '/assets/projects/DoDImg1.jpg',
    alt: 'Defenders of the Dune gameplay screenshot 1'
  },
  {
    type: 'image',
    src: '/assets/projects/DoDImg2.jpg',
    alt: 'Defenders of the Dune gameplay screenshot 2'
  }
];

const techs = [
  { label: "Unity", color: "purple" },
  { label: "GitHub", color: "blue" },
  { label: "Notion", color: "green" },
  { label: "Figma", color: "red" }
];

const caseStudyImages = {
  prototype: { src: '/assets/projects/Screenshot 2024-08-17 011704.png', alt: 'The original Sandcastle RTS prototype with sand soldiers' },
  coreLoop: { src: '/assets/projects/gameplay-loop.png', alt: 'Defenders of the Dune core gameplay loop diagram' },
  nightDefense: { src: '/assets/projects/defneding the base at night.jpg', alt: 'Defending the base at night' },
  equipment: { src: '/assets/projects/equipment-roles.png', alt: 'Equipment defines unit roles diagram' },
  progression: { src: '/assets/projects/progression-loop.png', alt: 'Defenders of the Dune progression loop diagram' },
  upgradeTree: { src: '/assets/projects/upgrade_tree.jpg', alt: 'The Defenders of the Dune upgrade tree' },
  finalGame: { src: '/assets/projects/dune_gameplay.jpg', alt: 'Defenders of the Dune gameplay' },
};

function Bullet({ children }) {
  return (
    <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
      • {children}
    </Text>
  );
}

function SectionHeading({ children }) {
  return (
    <GradientHeading as="h3" size="lg" letterSpacing="tight" mb={3}>
      {children}
    </GradientHeading>
  );
}

function CaseStudyImage({ image, caption }) {
  return (
    <Box
      my={{ base: 7, md: 10 }}
      maxW="3xl"
      mx="auto"
      borderRadius="xl"
      overflow="hidden"
      border="1px solid"
      borderColor={{ base: 'rgba(0,0,0,0.08)', _dark: 'rgba(255,255,255,0.08)' }}
      boxShadow="0 8px 32px rgba(0,0,0,0.12)"
    >
      <Image
        src={image.src}
        alt={image.alt}
        w="100%"
        h="auto"
        style={{ display: 'block' }}
      />
      <Text px={4} py={3} fontSize="sm" color={{ base: 'gray.600', _dark: 'gray.300' }}>
        {caption}
      </Text>
    </Box>
  );
}

export default function DefendersOfTheDunePage() {
  return (
    <Box maxW="4xl" mx="auto" py={{ base: 8, md: 16 }} px={{ base: 4, md: 8 }}>
      {/* Hero Section */}
      <VStack spacing={2} mb={2}>
        <Badge colorScheme="yellow" fontSize="1em" px={3} py={1} borderRadius="md">
          Steam Release
        </Badge>
        <Heading
          size="2xl"
          textAlign="center"
          letterSpacing="tight"
          fontWeight="extrabold"
          lineHeight="1.1"
        >
          Defenders of the Dune
        </Heading>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color={{ base: 'gray.600', _dark: 'gray.300' }}
          textAlign="center"
          maxW="2xl"
        >
          A strategic action game set in a harsh desert world, developed in collaboration with <b>Wolversoft</b>, a subsidiary studio of the University of Michigan. I led the <b>gameplay UI design</b>, <b>gameplay systems</b>, and assisted with <b>art direction</b> to create a visually immersive and intuitive player experience.
        </Text>
        <Text
          fontSize="sm"
          fontFamily="monospace"
          color={{ base: 'gray.500', _dark: 'gray.400' }}
        >
          June &ndash; December 2024
        </Text>
        <Button
          as={Link}
          href="https://store.steampowered.com/app/3394870/Defenders_of_the_Dune/"
          colorScheme="yellow"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
          borderRadius="full"
          boxShadow="lg"
          px={10}
          py={6}
          fontWeight="bold"
          fontSize="xl"
          mt={4}
          _hover={{ bg: "yellow.400" }}
        >
          View on Steam
        </Button>
      </VStack>

      {/* Video Showcase */}
      <Box
        mt={{ base: 8, md: 12 }}
        mb={{ base: 10, md: 16 }}
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="2xl"
        bg="black"
      >
        <AspectRatio ratio={16 / 9} w="100%">
          <video
            controls
            poster={media[1].src}
            style={{
              borderRadius: '1.5rem',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              background: '#111'
            }}
          >
            <source src={media[0].src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </AspectRatio>
      </Box>

      {/* Main Content */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 10, md: 24 }} // Increased gap between columns
        align="center"
        mb={12}
      >
        {/* Left: Screenshots */}
        <VStack flex="1" spacing={12} mr={12} align="center"> {/* Increased gap between images */}
          <Image
            src={media[1].src}
            alt={media[1].alt}
            borderRadius="2xl"
            boxShadow="2xl"
            objectFit="cover"
            maxH="260px"
            w="100%"
			mb={6}
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.04)', boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}
          />
          <Image
            src={media[2].src}
            alt={media[2].alt}
            borderRadius="2xl"
            boxShadow="2xl"
            objectFit="cover"
            maxH="260px"
            w="100%"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.04)', boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}
          />
        </VStack>
        {/* Right: Details */}
        <VStack flex="2" spacing={7} align="flex-start">
          <Box>
            <Text fontSize="lg" mb={2} color={{ base: 'gray.600', _dark: 'gray.300' }} fontWeight="bold">
              Technologies Used
            </Text>
            <Box display="flex" flexWrap="wrap" gap={3} mb={2}>
              {techs.map(tech => (
                <TechCapsule key={tech.label} label={tech.label} color={tech.color} />
              ))}
            </Box>
          </Box>
          <Separator />
          <Box>
            <Text fontSize="lg" mb={2} color={{ base: 'gray.600', _dark: 'gray.300' }} fontWeight="bold">
              My Contributions
            </Text>
            <VStack spacing={2} align="start">
              <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                • Contributed to game design, creating ideas for enemies, equipment, encounters, and progression.
              </Text>
              <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                • Developed core gameplay systems and mechanics.
              </Text>
              <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                • Designed and implemented the gameplay UI for clarity and engagement.
              </Text>
              <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                • Assisted with art direction to ensure a cohesive visual style.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Stack>

      {/* Game Design Case Study */}
      <Box mt={{ base: 12, md: 20 }}>
        <GradientHeading as="h2" size="xl" textAlign="center" mb={2}>
          Game Design Case Study
        </GradientHeading>
        <Text
          textAlign="center"
          fontSize={{ base: 'md', md: 'lg' }}
          color={{ base: 'gray.600', _dark: 'gray.300' }}
          maxW="2xl"
          mx="auto"
          mb={2}
        >
          From a three-person prototype to a full Steam release, June &ndash; December 2024.
        </Text>
        <Text
          textAlign="center"
          fontSize="sm"
          color={{ base: 'gray.500', _dark: 'gray.400' }}
          mb={12}
        >
          Notes on the core loop, the equipment system, and what it took to ship with a fifteen-person team.
        </Text>

        {/* 01 — The Original Prototype */}
        <Box mb={10}>
          <SectionHeading>01 — The Original Prototype</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The game was originally called <strong>Sandcastle RTS</strong>. The idea was inspired by the animated short film <em>Château de Sable</em>, which features a group of small soldiers protecting their home from a giant crab.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            There were three of us working on the original prototype. The other two developers had more experience with Unity programming, so I helped where I could with the game systems and created most of the temporary 3D art.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The main idea was to split the game between exploration and defense. Players would explore the beach during the day, gather resources, and encounter enemies. At night, they would return home and defend their base.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            The basic controls and systems were based on familiar RTS games like <strong>Command &amp; Conquer</strong>, <strong>Age of Empires</strong>, and <strong>StarCraft</strong>. Players could select units, give orders, construct buildings, gather resources, and recruit allies.
          </Text>
          <CaseStudyImage image={caseStudyImages.prototype} caption="The original Sandcastle RTS prototype, with temporary 3D art I created for the pitch." />
        </Box>

        <Separator my={10} />

        {/* 02 — The Core Gameplay Loop */}
        <Box mb={10}>
          <SectionHeading>02 — The Core Gameplay Loop</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The player had to balance exploring the map with keeping their base protected.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            During the day, enemies were less aggressive, giving players time to gather resources and attack ant burrows. At night, enemies would move toward the player&rsquo;s base and try to destroy the headquarters.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            This created a simple loop:
          </Text>
          <VStack spacing={2} align="start" mb={4}>
            <Bullet>Explore and gather resources.</Bullet>
            <Bullet>Destroy ant burrows and earn skill points.</Bullet>
            <Bullet>Return to base and prepare.</Bullet>
            <Bullet>Defend the base at night.</Bullet>
            <Bullet>Unlock new options and repeat.</Bullet>
          </VStack>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={4}>
            The distance from the base was also important. The farther players explored, the farther their units had to travel to get home before night.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            Wet sand was the main resource and could be used to create most units, buildings, and equipment. Shells were harder to find and were used for stronger weapons and armor.
          </Text>
          <CaseStudyImage image={caseStudyImages.coreLoop} caption="The core loop: explore by day, prepare, then defend the base at night." />
          <CaseStudyImage image={caseStudyImages.nightDefense} caption="Nightfall shifts the pressure from exploration to survival." />
        </Box>

        <Separator my={10} />

        {/* 03 — The Equipment System */}
        <Box mb={10}>
          <SectionHeading>03 — The Equipment System</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The main system we added to the usual RTS formula was unit equipment.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            Instead of needing a different unit for every job, players could change a sand soldier&rsquo;s role by giving it different equipment. Each unit had three equipment slots:
          </Text>
          <VStack spacing={2} align="start" mb={4}>
            <Bullet><strong>Arms</strong> determined the unit&rsquo;s main role. Swords and bows were used for combat, while pickaxes were better for gathering and construction.</Bullet>
            <Bullet><strong>Armor</strong> improved the unit&rsquo;s defense.</Bullet>
            <Bullet><strong>Hats</strong> gave the unit an additional bonus or specialization.</Bullet>
          </VStack>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The goal was to get more use out of a small roster of units. Players could change their army based on whether they needed more workers, ranged units, melee fighters, or defenders.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            The final game included normal and large sand soldiers with eight pieces of equipment.
          </Text>
          <CaseStudyImage image={caseStudyImages.equipment} caption="Equipment defines unit roles: arms, armor, and hats remix a small roster into many jobs." />
        </Box>

        <Separator my={10} />

        {/* 04 — Expanding the Project */}
        <Box mb={10}>
          <SectionHeading>04 — Expanding the Project</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            We created the prototype for WolverineSoft&rsquo;s summer design contest. Five teams were given the opportunity to create and present an idea, and our game was selected to be developed during the following semester.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The team grew from three people to around fifteen, and we had about three months to work on the full version. I took on more design work and created ideas for new enemies, equipment, encounters, and progression.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            We also changed the game from its original 3D prototype style to a hybrid 2D-and-3D style similar to <strong>Cult of the Lamb</strong>. This gave the game a more distinct look, but it also took a lot of time to convert the existing content.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            Because of this, we were not able to implement many of the enemies, scenarios, and equipment ideas we had planned. We eventually focused more on finishing and polishing the systems that were already in the game.
          </Text>
        </Box>

        <Separator my={10} />

        {/* 05 — UI and UX */}
        <Box mb={10}>
          <SectionHeading>05 — UI and UX</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            Most of my work later in development was focused on the UI and UX.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            RTS games have a lot of information to communicate, so I wanted the interface to stay simple and readable. We looked at modern Nintendo games for inspiration because their interfaces are usually clean and do not take too much attention away from the game.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The gameplay interface included:
          </Text>
          <VStack spacing={2} align="start" mb={4}>
            <Bullet>A unit list that could also be used to select units</Bullet>
            <Bullet>Click-and-drag unit selection</Bullet>
            <Bullet>Tutorial quests that updated as objectives were completed</Bullet>
            <Bullet>Building placement previews</Bullet>
            <Bullet>Wall-length indicators</Bullet>
            <Bullet>Unit recruitment progress</Bullet>
            <Bullet>Resource counters</Bullet>
            <Bullet>Equipment controls for selected units</Bullet>
            <Bullet>A minimap for navigation</Bullet>
            <Bullet>An inventory showing unlocked equipment</Bullet>
          </VStack>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            Building placement used a ghost version of the building to show where it would be constructed. Recruitment buttons used a white fill to show how long a unit had left before it was ready. Players could also select units directly, drag across multiple units, or use the icons at the bottom of the screen. My main goal was to make the different systems easy to understand without filling the screen with too much information.
          </Text>
        </Box>

        <Separator my={10} />

        {/* 06 — The Upgrade Tree */}
        <Box mb={10}>
          <SectionHeading>06 — The Upgrade Tree</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            I also implemented the upgrade tree.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            Players earned skill points by destroying ant burrows. They could then spend those points at the science lab to unlock:
          </Text>
          <VStack spacing={2} align="start" mb={4}>
            <Bullet>New units</Bullet>
            <Bullet>New buildings</Bullet>
            <Bullet>New equipment</Bullet>
          </VStack>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={4}>
            This gave players another reason to leave their base and explore. Destroying a burrow removed a nearby threat while also helping the player progress.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            The new unlocks then made it easier to deal with stronger enemies and explore farther across the map.
          </Text>
          <CaseStudyImage image={caseStudyImages.progression} caption="The progression loop: destroying burrows earns skill points that unlock new units, buildings, and equipment." />
          <CaseStudyImage image={caseStudyImages.upgradeTree} caption="The science lab upgrade tree, with unlockable units, buildings, and equipment." />
        </Box>

        <Separator my={10} />

        {/* 07 — The Final Game */}
        <Box mb={10}>
          <SectionHeading>07 — The Final Game</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The finished version included:
          </Text>
          <VStack spacing={2} align="start" mb={4}>
            <Bullet>Unit selection and squad management</Bullet>
            <Bullet>Resource gathering</Bullet>
            <Bullet>Five building types</Bullet>
            <Bullet>Normal and large sand soldiers</Bullet>
            <Bullet>Eight pieces of equipment</Bullet>
            <Bullet>Ant and crab enemies</Bullet>
            <Bullet>Tutorial quests</Bullet>
            <Bullet>A day-and-night cycle</Bullet>
            <Bullet>An upgrade tree</Bullet>
            <Bullet>Base defense</Bullet>
            <Bullet>A final enemy wave</Bullet>
          </VStack>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={4}>
            I think the final result feels more like a polished tech demo than a complete RTS. The main systems are there, but the game does not have enough content or progression to fully take advantage of them.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            Still, we were able to take a small prototype, expand it into a larger project, and release it on Steam.
          </Text>
          <CaseStudyImage image={caseStudyImages.finalGame} caption="The final game: a hybrid 2D-and-3D style, a day-and-night cycle, and a base to hold." />
        </Box>

        <Separator my={10} />

        {/* 08 — What I Learned */}
        <Box mb={12}>
          <SectionHeading>08 — What I Learned</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The biggest thing I learned was that a larger team does not always mean development will move faster.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            It is important to understand what everyone on the team is good at and plan around the resources you actually have. We had plenty of ideas, but our ability to add them depended on the time needed for art, programming, UI, balancing, and testing.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            I also learned how quickly the work grows when you add more systems. A new piece of equipment does not only need a design. It may also need artwork, programming, UI, balancing, progression requirements, and testing with every unit and enemy it affects.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            Toward the end of development, I focused more on improving the systems we already had. We could not include everything we originally planned, but we could still make the existing game clearer and more polished.
          </Text>
        </Box>
      </Box>

      <ProjectNav currentSlug="defenders-of-the-dune" />
    </Box>
  );
}
