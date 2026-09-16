'use client';

import { Box, Heading, Text, VStack, Button, Stack, Separator, Badge, AspectRatio } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import TechCapsule from '../../components/TechCapsule';
import GradientHeading from '../../components/GradientHeading';
import ProjectNav from '../../components/ProjectNav';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const techs = [
  { label: 'Godot 4', color: 'purple' },
  { label: 'GitHub Game Off 2025', color: 'green' },
  { label: 'Wave Defense', color: 'red' },
  { label: 'Co-op Dev', color: 'blue' },
];

const screenshots = [
  { src: '/images/blog/april-2026-update/wd1.png', alt: 'Wave Defender: Apocalypse gameplay', width: 794, height: 446 },
  { src: '/images/blog/april-2026-update/wd2.png', alt: 'Wave Defender: Apocalypse armory screen', width: 794, height: 446 },
];

const caseStudyShots = {
  coreLoop: {
    src: '/assets/projects/0b6s4x.png',
    alt: 'Wave Defender: Apocalypse gameplay screenshot',
    width: 3840,
    height: 2160,
  },
  brother: {
    src: '/assets/projects/1qtHJ9.png',
    alt: 'Wave Defender: Apocalypse gameplay screenshot',
    width: 3840,
    height: 2160,
  },
  adjust: {
    src: '/assets/projects/wxrn6x.png',
    alt: 'Wave Defender: Apocalypse gameplay screenshot',
    width: 3840,
    height: 2160,
  },
};

const diagrams = {
  coreLoop: {
    src: '/assets/projects/wave-defender-core-loop.png',
    alt: 'Wave Defender: Apocalypse core gameplay loop diagram',
    width: 1800,
    height: 1080,
  },
  workflow: {
    src: '/assets/projects/wave-defender-resource-workflow.png',
    alt: 'From a design idea to a playable change in Wave Defender: Apocalypse',
    width: 1800,
    height: 1400,
  },
  resourceSystem: {
    src: '/assets/projects/wave-defender-resource-system.png',
    alt: 'Wave Defender: Apocalypse resources and shared gameplay systems diagram',
    width: 1800,
    height: 1170,
  },
};

const resourceTable = [
  { resource: 'WeaponData', adjust: 'Damage, fire rate, accuracy, magazine size, reload time, firing mode, and price' },
  { resource: 'EnemyData', adjust: 'Health, speed, attack range, damage, reward, and ground or air type' },
  { resource: 'WaveData', adjust: 'Enemy pools, selection weights, wave phases, and spawn timing' },
  { resource: 'AugmentData', adjust: 'Effects, values, additional modifiers, rarity, and price' },
  { resource: 'AllyData', adjust: 'Role, damage, fire rate, accuracy, detection range, and healing' },
];

const weaponDataSample = `extends Resource
class_name WeaponData

@export_category("Shooting Properties")
@export var bullet_type: MouseShooter.BULLET_TYPE
@export var fire_mode: MouseShooter.FIRE_MODE
@export_range(0.0, 1.0) var accuracy: float = 1.0
@export var max_spread: float = 50.0
@export var fire_rate: float = 600.0
@export var magazine_size: int = 30
@export var reload_time: float = 2.0`;

const spawnSample = `var enemy_inst: Enemy = enemy_base_scene.instantiate()

enemy_inst.enemy_name = enemy_data.enemy_name
enemy_inst.speed = enemy_data.speed
enemy_inst.max_health = enemy_data.max_health
enemy_inst.range = enemy_data.range
enemy_inst.damage = enemy_data.damage
enemy_inst.attack_speed = enemy_data.attack_speed
enemy_inst.gold_reward = enemy_data.gold_reward`;

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

function CodeBlock({ code }) {
  return (
    <Box
      as="pre"
      p={4}
      my={4}
      borderRadius="lg"
      overflow="auto"
      fontSize="sm"
      fontFamily="monospace"
      whiteSpace="pre"
      bg={{ base: 'rgba(0,0,0,0.04)', _dark: 'rgba(255,255,255,0.06)' }}
      color={{ base: 'gray.800', _dark: 'gray.100' }}
      border="1px solid"
      borderColor={{ base: 'rgba(0,0,0,0.08)', _dark: 'rgba(255,255,255,0.08)' }}
    >
      {code}
    </Box>
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
        width={image.width}
        height={image.height}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
      <Text px={4} py={3} fontSize="sm" color={{ base: 'gray.600', _dark: 'gray.300' }}>
        {caption}
      </Text>
    </Box>
  );
}

export default function WaveDefenderPage() {
  return (
    <MotionBox
      maxW="4xl"
      mx="auto"
      py={{ base: 8, md: 16 }}
      px={{ base: 4, md: 8 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      {/* Hero */}
      <MotionVStack
        spacing={3}
        mb={2}
        textAlign="center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Badge
          fontSize="0.85em"
          px={4}
          py={1.5}
          borderRadius="full"
          bg={{ base: 'rgba(72, 160, 80, 0.15)', _dark: 'rgba(72, 160, 80, 0.2)' }}
          color={{ base: 'green.700', _dark: 'green.300' }}
          border="1px solid"
          borderColor={{ base: 'rgba(72, 160, 80, 0.3)', _dark: 'rgba(72, 160, 80, 0.25)' }}
          backdropFilter="blur(8px)"
          fontWeight="semibold"
          letterSpacing="wide"
        >
          GitHub Game Off 2025
        </Badge>
        <GradientHeading
          as="h1"
          size="2xl"
          textAlign="center"
          letterSpacing="tight"
          lineHeight="1.1"
        >
          Wave Defender: Apocalypse
        </GradientHeading>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          color={{ base: 'gray.600', _dark: 'gray.300' }}
          maxW="2xl"
        >
          Gear up and assemble your crew to defend your castle from the apocalypse. A wave defense game made with my brother for the GitHub Game Off 2025 jam.
        </Text>
      </MotionVStack>

      {/* Playable Embed */}
      <MotionBox
        mt={{ base: 8, md: 12 }}
        mb={{ base: 10, md: 16 }}
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="0 8px 32px rgba(0,0,0,0.15)"
        border="1px solid"
        borderColor={{ base: 'rgba(0,0,0,0.08)', _dark: 'rgba(255,255,255,0.06)' }}
        bg="black"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <AspectRatio ratio={1024 / 596} w="100%">
          <iframe
            src="https://itch.io/embed-upload/15793557?color=2c3921"
            allowFullScreen
            title="Wave Defender: Apocalypse"
            style={{ border: 'none', width: '100%', height: '100%' }}
          />
        </AspectRatio>
      </MotionBox>

      {/* Play on itch.io fallback */}
      <MotionBox
        textAlign="center"
        mb={16}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
      >
        <NextLink href="https://shuntoon.itch.io/wave-defender-apocalypse" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            borderRadius="full"
            px={10}
            py={6}
            fontWeight="bold"
            fontSize="lg"
            bg={{ base: 'rgba(255,255,255,0.15)', _dark: 'rgba(255,255,255,0.08)' }}
            backdropFilter="blur(12px)"
            border="1px solid"
            borderColor={{ base: 'rgba(255,255,255,0.3)', _dark: 'rgba(255,255,255,0.12)' }}
            color={{ base: 'black', _dark: 'white' }}
            boxShadow="0 4px 20px rgba(0,0,0,0.08)"
            _hover={{
              bg: { base: 'rgba(255,255,255,0.3)', _dark: 'rgba(255,255,255,0.15)' },
              transform: 'scale(1.05)',
              boxShadow: '0 6px 28px rgba(0,0,0,0.12)',
            }}
            transition="all 0.3s ease"
          >
            Play on itch.io
          </Button>
        </NextLink>
      </MotionBox>

      {/* Main Content */}
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 16 }}
          align="center"
          mb={12}
        >
          {/* Screenshots */}
          <VStack flex="1" spacing={12} align="center" mr={{ base: 0, md: 8 }}>
            {screenshots.map((s, i) => (
              <Box
                key={s.src}
                position="relative"
                w="100%"
                borderRadius="2xl"
                overflow="hidden"
                boxShadow="0 8px 32px rgba(0,0,0,0.12)"
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{ transform: 'scale(1.04)', boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}
                mb={i === 0 ? 6 : 0}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>
            ))}
          </VStack>

          {/* Details */}
          <VStack flex="2" spacing={7} align="flex-start">
            <Box>
              <Text fontSize="lg" mb={2} color={{ base: 'gray.600', _dark: 'gray.300' }} fontWeight="bold">
                Technologies Used
              </Text>
              <Box display="flex" flexWrap="wrap" gap={3} mb={2}>
                {techs.map((tech) => (
                  <TechCapsule key={tech.label} label={tech.label} color={tech.color} />
                ))}
              </Box>
            </Box>

            <Separator />

            <Box>
              <Text fontSize="lg" mb={2} color={{ base: 'gray.600', _dark: 'gray.300' }} fontWeight="bold">
                About the Game
              </Text>
              <VStack spacing={3} align="start">
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                  Wave Defender: Apocalypse is a wave defense game where you hold off undead enemies storming your castle. Between rounds you enter an armory to kit yourself out with new weapons — snipers, grenade launchers, revolvers, and more.
                </Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                  I built this with my brother for the <strong>GitHub Game Off 2025</strong> jam — his very first time making a game.
                </Text>
              </VStack>
            </Box>

            <Separator />

            <Box>
              <Text fontSize="lg" mb={2} color={{ base: 'gray.600', _dark: 'gray.300' }} fontWeight="bold">
                Features
              </Text>
              <VStack spacing={2} align="start">
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Placed 30th out of 500+ entries in gameplay category</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Wave-based castle defense with escalating difficulty</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Armory system with a variety of unlockable weapons</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Day/night cycle affecting enemy behavior</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• Upgrade system with strategic depth</Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>• 10 levels of gameplay</Text>
              </VStack>
            </Box>
          </VStack>
        </Stack>
      </MotionBox>

      {/* Game Design Case Study */}
      <MotionBox
        mt={{ base: 12, md: 20 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <GradientHeading as="h2" size="xl" textAlign="center" mb={2}>
          Game Design Case Study
        </GradientHeading>
        <Text
          textAlign="center"
          fontSize={{ base: 'md', md: 'lg' }}
          color={{ base: 'gray.600', _dark: 'gray.300' }}
          maxW="2xl"
          mx="auto"
          mb={12}
        >
          Notes on the core loop, the shared Resource system, and building a game someone else could tune.
        </Text>

        {/* 01 — The Core Loop */}
        <Box mb={10}>
          <SectionHeading>01 — The Core Loop</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The main loop is <strong>defend the base &rarr; earn gold &rarr; improve your build &rarr; face the next wave.</strong>
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            During a wave, the player is focused on aiming, choosing targets, and keeping enemies away from the base. Between waves, the game slows down and gives the player time to think about what they need next.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={4}>
            A rough wave might leave the base badly damaged, forcing the player to spend most of their gold on repairs. In another run, the player may be able to take a risk and put that gold toward a stronger weapon, an ally, or an augment instead.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            I wanted these purchases to feel like real tradeoffs instead of upgrades the player buys automatically.
          </Text>
          <CaseStudyImage image={diagrams.coreLoop} caption="The core loop: survive a wave, decide what matters most right now, then face the next wave." />
          <CaseStudyImage image={caseStudyShots.coreLoop} caption="Holding the line between waves — every bit of gold changes the plan for the next round." />
        </Box>

        <Separator my={10} />

        {/* 02 — Designing Around My Brother's Experience */}
        <Box mb={10}>
          <SectionHeading>02 — Designing Around My Brother&rsquo;s Experience</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            My brother had always been interested in game design, but this was his first time working inside a game engine. One of my goals was to make it easy for him to take an idea, change something in the editor, and immediately test how it affected the game.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            That led me to build most of the game&rsquo;s content around custom <strong>Godot Resources</strong>. I used Resources to define weapons, enemies, waves, augments, and allies. The Resource holds the settings for a piece of content, while shared scripts handle how it behaves.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            This meant my brother could explore questions like:
          </Text>
          <VStack spacing={2} align="start" mb={4}>
            <Bullet>Should this enemy move faster but have less health?</Bullet>
            <Bullet>Should more flying enemies appear at the end of the wave?</Bullet>
            <Bullet>Does this weapon need a larger magazine or a longer reload?</Bullet>
            <Bullet>Is this augment strong enough for its price?</Bullet>
            <Bullet>Should a healing ally provide small heals often or larger heals less frequently?</Bullet>
          </VStack>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            These decisions could be tested by changing values in Godot&rsquo;s Inspector instead of rewriting the underlying code.
          </Text>
          <CaseStudyImage image={diagrams.workflow} caption="From a design idea to a playable change — no code required for balancing." />
          <CaseStudyImage image={caseStudyShots.brother} caption="Content my brother could tune directly from the Inspector." />
        </Box>

        <Separator my={10} />

        {/* 03 — Making Content Easy to Adjust */}
        <Box mb={10}>
          <SectionHeading>03 — Making Content Easy to Adjust</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            I used exported variables, categories, enums, and value ranges to keep the Resources organized and readable. For example, a weapon&rsquo;s settings are split into sections for shooting, burst fire, projectiles, and rockets.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The basic workflow was simple:
          </Text>
          <VStack spacing={2} align="start" mb={4}>
            <Bullet><strong>1.</strong> Create or duplicate a Resource.</Bullet>
            <Bullet><strong>2.</strong> Adjust its values in the Inspector.</Bullet>
            <Bullet><strong>3.</strong> Add it to a wave, shop, or enemy pool.</Bullet>
            <Bullet><strong>4.</strong> Playtest the change.</Bullet>
            <Bullet><strong>5.</strong> Keep adjusting it until it feels right.</Bullet>
          </VStack>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={4}>
            For example, my brother could duplicate an enemy Resource, lower its health, increase its speed, change its appearance and reward, and then add it to a wave. He could also control how often that version appeared.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            There was still a clear limit to what the Resources could do. They were great for tuning and combining mechanics the game already supported, but a completely new attack or augment effect still required code. My job was to build those underlying systems and expose the controls that would be useful for balancing and experimentation.
          </Text>
          <CaseStudyImage image={caseStudyShots.adjust} caption="A build taking shape from a handful of small, inspector-driven changes." />
        </Box>

        <Separator my={10} />

        {/* 04 — Resources and Shared Gameplay Systems */}
        <Box mb={10}>
          <SectionHeading>04 — Resources and Shared Gameplay Systems</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={4}>
            The Resources store the data for each piece of content, while shared scripts provide the behavior.
          </Text>

          <CaseStudyImage image={diagrams.resourceSystem} caption="Each Resource type feeds a shared gameplay system that reads its values at runtime." />

          <Box
            overflow="hidden"
            border="1px solid"
            borderColor={{ base: 'rgba(0,0,0,0.08)', _dark: 'rgba(255,255,255,0.08)' }}
            borderRadius="xl"
            mb={4}
          >
            <Box overflowX="auto">
              <Box as="table" w="100%" borderCollapse="collapse" fontSize="sm">
                <Box as="thead">
                  <Box as="tr">
                    <Box as="th" textAlign="left" p={3} fontWeight="bold" color={{ base: 'gray.700', _dark: 'gray.200' }} bg={{ base: 'rgba(0,0,0,0.04)', _dark: 'rgba(255,255,255,0.06)' }}>
                      Resource
                    </Box>
                    <Box as="th" textAlign="left" p={3} fontWeight="bold" color={{ base: 'gray.700', _dark: 'gray.200' }} bg={{ base: 'rgba(0,0,0,0.04)', _dark: 'rgba(255,255,255,0.06)' }}>
                      What could be adjusted
                    </Box>
                  </Box>
                </Box>
                <Box as="tbody">
                  {resourceTable.map((row, i) => (
                    <Box
                      as="tr"
                      key={row.resource}
                      bg={i % 2 === 1 ? { base: 'rgba(0,0,0,0.02)', _dark: 'rgba(255,255,255,0.03)' } : 'transparent'}
                    >
                      <Box as="td" p={3} verticalAlign="top" fontWeight="semibold" color={{ base: 'gray.700', _dark: 'gray.200' }} fontFamily="monospace">
                        {row.resource}
                      </Box>
                      <Box as="td" p={3} verticalAlign="top" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                        {row.adjust}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            Here is a shortened example from <strong>WeaponData</strong>:
          </Text>
          <CodeBlock code={weaponDataSample} />
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The exported properties appear in Godot&rsquo;s Inspector. Categories keep related settings together, enums provide named options, and ranges keep certain values within useful limits.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The same idea is used when spawning enemies:
          </Text>
          <CodeBlock code={spawnSample} />
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            The wave manager creates the shared enemy scene and fills in its properties using the selected <strong>EnemyData</strong> Resource. This lets the same enemy scene support several different enemy configurations. The important part was not only that the system was reusable — it also gave my brother a way to work directly with the game&rsquo;s balancing and encounter design while I focused on expanding the underlying systems.
          </Text>
        </Box>

        <Separator my={10} />

        {/* 05 — What I Learned */}
        <Box mb={12}>
          <SectionHeading>05 — What I Learned</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={4}>
            This project made me think more about how the tools behind a game can affect the way a team works. A system is much more useful when someone else can understand it, change it, and quickly see the result.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={4}>
            I also had to think carefully about which settings should be exposed and how they should be organized. Too few controls would limit what my brother could experiment with, while too many would make the system harder to understand.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            For a one-month game jam, this setup gave us a good way to divide the work around our different experience levels while still letting both of us contribute to the design.
          </Text>
        </Box>
      </MotionBox>

      <ProjectNav currentSlug="wave-defender" />
    </MotionBox>
  );
}
