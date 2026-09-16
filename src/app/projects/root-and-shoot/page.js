'use client';

import { Box, Text, VStack, Button, Stack, Separator, Badge, SimpleGrid } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import TechCapsule from '../../components/TechCapsule';
import GradientHeading from '../../components/GradientHeading';
import ProjectNav from '../../components/ProjectNav';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const techs = [
  { label: 'Godot 4.7', color: 'purple' },
  { label: 'Global Game Jam 2023', color: 'green' },
  { label: 'Survivors-like', color: 'red' },
  { label: 'Solo Design & Dev', color: 'blue' },
];

const featuredMedia = {
  type: 'video',
  src: '/assets/projects/RootAndShootGameplaySnippet.mp4',
  poster: '/assets/projects/Root2.png',
  alt: 'Root and Shoot gameplay snippet',
};

const screenshots = [
  { src: '/assets/projects/Root1.png', alt: 'Root and Shoot gameplay screenshot 1' },
  { src: '/assets/projects/Root2.png', alt: 'Root and Shoot gameplay screenshot 2' },
  { src: '/assets/projects/Root3.png', alt: 'Root and Shoot gameplay screenshot 3' },
  { src: '/assets/projects/Root4.png', alt: 'Root and Shoot gameplay screenshot 4' },
  { src: '/assets/projects/Root5.png', alt: 'Root and Shoot gameplay screenshot 5' },
  { src: '/assets/projects/Root6.png', alt: 'Root and Shoot gameplay screenshot 6' },
  { src: '/assets/projects/Root7.png', alt: 'Root and Shoot gameplay screenshot 7' },
  { src: '/assets/projects/Root8.png', alt: 'Root and Shoot gameplay screenshot 8' },
  { src: '/assets/projects/Root9.png', alt: 'Root and Shoot gameplay screenshot 9' },
  { src: '/assets/projects/Root10.png', alt: 'Root and Shoot gameplay screenshot 10' },
];

const diagrams = {
  upgradeFlow: {
    src: '/assets/projects/Upgrade Resource Flow for-2026-09-15-021652.png',
    alt: 'Flow diagram of the upgrade resource and selection system',
  },
  damageFlow: {
    src: '/assets/projects/Untitled diagram-2026-09-15-021446.png',
    alt: 'Flow diagram of damage calculation and combat effects',
  },
};

const sideScreenshots = [];

function Bullet({ children }) {
  return (
    <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
      • {children}
    </Text>
  );
}

function SectionHeading({ children }) {
  const visibleTitle = typeof children === 'string'
    ? children.replace(/^04/, '03').replace(/^05/, '04').replace(/^07/, '05').replace(/^09/, '06')
    : children;
  const titleWithoutDashes = typeof visibleTitle === 'string'
    ? visibleTitle.replace(/\s[—–]\s/g, ': ').replace(/\sâ€”\s/g, ': ')
    : visibleTitle;

  return (
    <GradientHeading as="h3" size="lg" letterSpacing="tight" mb={3}>
      {titleWithoutDashes}
    </GradientHeading>
  );
}

function PullQuote({ children }) {
  return (
    <Text
      fontSize={{ base: 'lg', md: 'xl' }}
      fontWeight="bold"
      textAlign="center"
      letterSpacing="wide"
      lineHeight="1.4"
      color={{ base: 'green.700', _dark: 'green.300' }}
      maxW="2xl"
      mx="auto"
    >
      &ldquo;{children}&rdquo;
    </Text>
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
      <Image src={image.src} alt={image.alt} width={960} height={540} style={{ width: '100%', height: 'auto', display: 'block' }} />
      <Text px={4} py={3} fontSize="sm" color={{ base: 'gray.600', _dark: 'gray.300' }}>{caption}</Text>
    </Box>
  );
}

function Formula({ children }) {
  return <Text fontSize="sm" fontFamily="monospace" px={3} py={2} my={3} whiteSpace="pre-wrap" borderRadius="md" bg={{ base: 'rgba(0,0,0,0.04)', _dark: 'rgba(255,255,255,0.06)' }}>{children}</Text>;
}

function DesignQuestion({ children }) {
  return <Box mt={4} p={4} borderRadius="xl" border="1px solid" borderColor={{ base: 'rgba(72, 160, 80, 0.35)', _dark: 'rgba(72, 160, 80, 0.3)' }} bg={{ base: 'rgba(72, 160, 80, 0.08)', _dark: 'rgba(72, 160, 80, 0.12)' }}><Text fontSize="md" color={{ base: 'gray.700', _dark: 'gray.200' }}>{children}</Text></Box>;
}

export default function RootAndShootPage() {
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
          Global Game Jam 2023
        </Badge>
        <GradientHeading
          as="h1"
          size="2xl"
          textAlign="center"
          letterSpacing="tight"
          lineHeight="1.1"
        >
          Root and Shoot
        </GradientHeading>
        <Text
          fontSize={{ base: 'lg', md: 'xl' }}
          color={{ base: 'gray.600', _dark: 'gray.300' }}
          maxW="2xl"
        >
          A small arena game about knowing when to stop moving. Plant your roots to shoot, then get moving again before the enemies box you in.
        </Text>
        <Text
          fontSize="sm"
          fontFamily="monospace"
          color={{ base: 'gray.500', _dark: 'gray.400' }}
        >
          Built solo in Godot 4.7 for Global Game Jam 2023
        </Text>
      </MotionVStack>

      {/* Featured Screenshot */}
      <MotionBox
        mt={{ base: 8, md: 12 }}
        mb={{ base: 8, md: 12 }}
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="0 8px 32px rgba(0,0,0,0.15)"
        border="1px solid"
        borderColor={{ base: 'rgba(0,0,0,0.08)', _dark: 'rgba(255,255,255,0.06)' }}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        bg="black"
      >
        <video
          controls
          autoPlay
          muted
          loop
          playsInline
          poster={featuredMedia.poster}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <source src={featuredMedia.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </MotionBox>

      {/* Play on itch.io */}
      <MotionBox
        mt={{ base: 8, md: 12 }}
        mb={{ base: 10, md: 16 }}
        textAlign="center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color={{ base: 'gray.600', _dark: 'gray.300' }}
          maxW="md"
          mx="auto"
          mb={6}
        >
          Play the browser build directly on itch.io.
        </Text>
        <NextLink href="https://shuntoon.itch.io/root-and-shoot" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            borderRadius="full"
            px={{ base: 12, md: 16 }}
            py={8}
            fontWeight="extrabold"
            fontSize={{ base: 'xl', md: '2xl' }}
            color="white"
            bg="green.500"
            border="2px solid"
            borderColor="green.400"
            boxShadow="0 8px 30px rgba(39, 174, 96, 0.4)"
            _hover={{
              bg: 'green.400',
              transform: 'scale(1.06)',
              boxShadow: '0 12px 40px rgba(39, 174, 96, 0.55)',
            }}
            _active={{ transform: 'scale(0.98)' }}
            transition="all 0.25s ease"
          >
            ▶&nbsp; Play on itch.io
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
          direction="column"
          spacing={0}
          align="stretch"
          mb={12}
        >
          {/* Screenshots */}
          <VStack display="none" flex="1" spacing={12} align="center" mr={{ base: 0, md: 8 }}>
            {sideScreenshots.map((s, i) => (
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
                  width={794}
                  height={446}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Box>
            ))}
          </VStack>

          {/* Details */}
          <VStack w="100%" spacing={7} align="flex-start">
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
                  I built Root and Shoot around one choice: <strong>keep moving, or stop and fight.</strong> When you plant your roots, you can shoot. When you uproot, you can get out of trouble.
                </Text>
                <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
                  Everything else came from trying to make that one choice feel interesting for the whole run.
                </Text>
              </VStack>
            </Box>

            <Separator />

            <Box>
              <Text fontSize="lg" mb={2} color={{ base: 'gray.600', _dark: 'gray.300' }} fontWeight="bold">
                The Core Mechanic
              </Text>
              <Text fontSize="lg" fontWeight="extrabold" color={{ base: 'gray.800', _dark: 'gray.100' }} mb={2}>
                MOVE OR SHOOT. PICK ONE.
              </Text>
              <VStack spacing={2} align="start">
                <Text fontSize="md" fontWeight="semibold" color={{ base: 'gray.700', _dark: 'gray.200' }}>
                  KITE &rarr; CREATE SPACE &rarr; ROOT &rarr; FIRE &rarr; UPROOT
                </Text>
                <Bullet><strong>Slight root slide:</strong> you keep a bit of momentum, so positioning matters.</Bullet>
                <Bullet><strong>Manual aim:</strong> stopping is only half the job. You still need to land your shots.</Bullet>
                <Bullet><strong>Dash stays for movement:</strong> it cannot bail you out once you have rooted.</Bullet>
                <Bullet><strong>Upgrades shift the choice:</strong> they change when and where it feels right to root.</Bullet>
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
          A few notes on how one simple rule shaped the rest of the game.
        </Text>

        {/* Design Goals — retained in source as a longer-form note */}
        <Box mb={10} display="none">
          <SectionHeading>Design Goals</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            Before I started adding a bunch of systems, I wanted to be clear about what kind of game I was making. One of my biggest goals was keeping the difficulty on the more approachable side. I still wanted rooting at the wrong time to be dangerous, but I also wanted players to have enough breathing room to try upgrades, find synergies, and actually enjoy the build they put together.
          </Text>
          <VStack spacing={2} align="start" mb={5}>
            <Bullet><strong>Approachable difficulty</strong> &mdash; room to try upgrades, find synergies, and enjoy the build.</Bullet>
            <Bullet><strong>One strong core mechanic</strong> &mdash; rooting ties combat, enemies, upgrades, and positioning together.</Bullet>
            <Bullet><strong>Build experimentation</strong> &mdash; upgrades lead to recognizable playstyles, not just bigger numbers.</Bullet>
            <Bullet><strong>Readable combat</strong> &mdash; consistent enemy tells even when the arena gets busy.</Bullet>
            <Bullet><strong>Controlled complexity</strong> &mdash; start simple, then introduce more interesting upgrades and enemies.</Bullet>
            <Bullet><strong>Progression through variety</strong> &mdash; unlocks add new ways to build instead of permanent stat boosts.</Bullet>
          </VStack>
          <PullQuote>
            Difficulty should support the systems, not hide them.
          </PullQuote>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} textAlign="center" maxW="2xl" mx="auto" mt={2}>
            Bad root timing should still get you in trouble, but the game stays forgiving enough to experiment with builds and see how the systems work together.
          </Text>
        </Box>

        <Separator my={10} />

        {/* 01 */}
        <Box mb={10}>
          <SectionHeading>01 — Designing Around Rooting</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            You can move or you can shoot, but not both. Moving lets you make space. Rooting lets you attack, but it also means you are stuck with your choice until you uproot.
          </Text>
          <Formula>{'KITE -> CREATE SPACE -> ROOT -> FIRE -> UPROOT'}</Formula>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            I wanted the rhythm to stay simple. Make a little room, root for a quick burst, then move again before the crowd catches up.
          </Text>
          <CaseStudyImage image={screenshots[0]} caption="Creating space before committing to a firing window." />
          <VStack spacing={2} align="start">
            <Bullet><strong>Slight root slide</strong> &mdash; rooting doesn&rsquo;t stop you instantly; momentum makes positioning something to anticipate.</Bullet>
            <Bullet><strong>Manual aim</strong> &mdash; the rooted window tests more than timing; you still have to aim well.</Bullet>
            <Bullet><strong>Dash stays a movement tool</strong> &mdash; blocked while rooted so it can&rsquo;t become a free undo button.</Bullet>
            <Bullet><strong>Upgrades should change the decision</strong> &mdash; root longer, root closer, root less often, or make each root more valuable.</Bullet>
          </VStack>
        </Box>

        <Separator my={10} />

        {/* 02 */}
        <Box mb={10}>
          <SectionHeading>02 — Upgrades Should Change How You Root</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            I did not want upgrades to be a pile of bigger numbers. I wanted them to push the player toward different ways of handling the same root or move choice.
          </Text>
          <VStack spacing={2} align="start">
            <Bullet><strong>Burst:</strong> quick damage for short, deliberate firing windows.</Bullet>
            <Bullet><strong>Bleed:</strong> tag enemies, uproot, and keep getting value while you kite.</Bullet>
            <Bullet><strong>Thorns:</strong> make rooting close to the crowd a real option.</Bullet>
            <Bullet><strong>Mobility:</strong> spend less time locked into one spot.</Bullet>
            <Bullet><strong>Explosions and Bees:</strong> make one root control more of the arena.</Bullet>
          </VStack>
          <CaseStudyImage image={screenshots[2]} caption="A level-up choice can push a run in a new direction." />
        </Box>

        <Separator my={10} />

        {/* Upgrade Pipeline */}
        <Box mb={10}>
          <SectionHeading>The Upgrade Pipeline</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            I made upgrades as reusable <strong>Godot Resources</strong>. That gives me room to add, remove, and tune ideas without rebuilding the selection system every time.
          </Text>
          <CaseStudyImage image={diagrams.upgradeFlow} caption="Upgrade resources, shop unlocks, rarity, and player choice all feed into a run&rsquo;s build identity." />
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            <strong>Upgrade Pipeline — Game Design View:</strong> the technical structure supports a simple player-facing goal &mdash; turn a level-up choice into a meaningful change in playstyle.
          </Text>
          <DesignQuestion>
            <strong>Why use a modular Resource-based system?</strong> Because I wanted the content to stay easy to tune. The design can grow by adding or removing upgrade possibilities while the same selection flow continues to work.
          </DesignQuestion>
        </Box>

        <Separator my={10} />

        {/* 03 — retained in source as a longer-form note */}
        <Box mb={10} display="none">
          <SectionHeading>03 — Rarity as Run Pacing</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            I don&rsquo;t look at rarity as just &ldquo;this upgrade is stronger.&rdquo; I use it to pace the run. Early on, the player sees more straightforward choices. As a build takes shape, Rare and Legendary upgrades become more likely to show up.
          </Text>
          <Formula>{`t = clamp(upgrades_taken_this_level / 14, 0, 1)
rarity_weight = lerp(start_weight, end_weight, t)`}</Formula>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            Legendary starts at weight 0 and rises to 45; Rare rises from 10 to 65. The run builds up naturally &mdash; the player understands what&rsquo;s going on and starts a build before the more dramatic upgrades enter the picture, making those later choices more exciting.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            <strong>A deliberate quirk:</strong> Common weight also rises from 65 to 85. The goal isn&rsquo;t to replace Commons late in a level, but to let more exciting options join them while keeping reliable upgrades relevant.
          </Text>
        </Box>

        <Separator my={10} />

        {/* 03 */}
        <Box mb={10}>
          <SectionHeading>04 — Making Stats Interact</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            I wanted the damage math to stay easy to follow, even when a lot of upgrades are stacked together.
          </Text>
          <Formula>{`Base Damage = Starting Damage
  x 1.2  (Damage Upgrade)
  x 1.3  (Heavy Hitter Upgrade)
  x 0.8  (Berserker Upgrade)
  x 1.15 (Plunge Upgrade)

Live Damage = Base Damage + floor(Current HP / 6)`}</Formula>
          <Text fontSize="sm" color={{ base: 'gray.500', _dark: 'gray.400' }} mb={3}>
            The health bonus only applies when Spicy Food is owned.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            The formulas matter because of the choices they create. Heavy Hitter hits harder but slows your shots. Berserker goes the other way. Spicy Food makes health part of your damage, so getting hit also hurts your offense. Pickup Radius even makes Thorns bigger.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            <strong>Build Synergy Web:</strong> stats are useful when they connect to a playstyle rather than existing as isolated bonuses.
          </Text>
          <CaseStudyImage image={diagrams.damageFlow} caption="Damage stays understandable because permanent multipliers, live effects, and combat outcomes have distinct roles." />
        </Box>

        <Separator my={10} />

        {/* 03 */}
        <Box mb={10}>
          <SectionHeading>05 — Enemies Are Designed to Interrupt the Root Window</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            I designed enemies around one question: <strong>what makes the player think twice about rooting right now?</strong> Each one gives you a different reason to move, reposition, or cut a root short.
          </Text>
          <VStack spacing={2} align="start" mb={4}>
            <Bullet><strong>Bomber — punish camping.</strong> It can catch a rooted player. A short root is survivable; staying planted too long is not.</Bullet>
            <Bullet><strong>Ranged — force movement.</strong> Its stronger attack gives another reason to leave a comfortable position.</Bullet>
            <Bullet><strong>Charger — test reading.</strong> A growing aim line gives a clear warning before the dash, so you read the threat before committing again.</Bullet>
            <Bullet><strong>Bosses — remix the lesson.</strong> Area denial, spread fire, and high-speed charges turn the same root decision into larger encounters.</Bullet>
          </VStack>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            <strong>Shared telegraph language:</strong> every threat follows the same rhythm: <em>tell, wait, strike.</em> Color shows danger and a line shows direction.
          </Text>
          <CaseStudyImage image={screenshots[6]} caption="Threats need to be readable before they become dangerous." />
          <DesignQuestion>
            <strong>Why does the Charger phase through other enemies during the dash?</strong> Because I want the telegraph to be something the player can trust. If they read the aim line correctly, another enemy shouldn&rsquo;t randomly change the charge and make the hit feel unfair.
          </DesignQuestion>
        </Box>

        <Separator my={10} />

        {/* 06 — retained in source as a longer-form note */}
        <Box mb={10} display="none">
          <SectionHeading>06 — Difficulty Is Three Dials, Not One Slider</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            Since I wanted the game on the easier side, later rounds don&rsquo;t just crank enemy health through the roof. I look at difficulty through three main things:
          </Text>
          <VStack spacing={2} align="start" mb={4}>
            <Bullet><strong>Density</strong> &mdash; spawn timing controls how much space the player has to create a safe root window.</Bullet>
            <Bullet><strong>Variety</strong> &mdash; Bombers, Ranged enemies, and Chargers add new problems instead of only more bodies.</Bullet>
            <Bullet><strong>Durability</strong> &mdash; enemy health rises each round, but the curve stays modest so a weaker build can still reach the end.</Bullet>
          </VStack>
          <Formula>{`Enemy HP = ceil(base_hp x (1 + 0.15 x (round - 1)))
Round 1 = 1.0x   |   Round 7 = 1.9x`}</Formula>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            Enemy count peaks around the middle of the level, then comes down a bit as stronger and more varied enemies start showing up. I liked that more than every round simply being a bigger version of the last one.
          </Text>
        </Box>

        <Separator my={10} />

        {/* 04 */}
        <Box mb={10}>
          <SectionHeading>07 — Meta Progression Sells Possibility, Not Power</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            Kills give you currency between runs. The shop mostly unlocks new upgrades for the pool instead of handing out permanent damage and health.
          </Text>
          <Formula>{`23 default upgrades  ->  29 fully unlocked
Crit, Bleed, Bees, Pierce, Sniper, Exploding Bullets
enter the pool only after being purchased.`}</Formula>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            Buying Crit does not just make every run stronger. It makes <strong>crit builds possible.</strong> The starting pool stays simple, then opens up as you play more.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            Hats provide the smaller starting-choice axis: <strong>Green</strong> offers straightforward damage, <strong>Orange</strong> supports kiting, <strong>Apple</strong> supports health-based builds, and <strong>Rainbow</strong> changes the odds of seeing Rare and Legendary upgrades.
          </Text>
          <CaseStudyImage image={screenshots[8]} caption="Progression expands the upgrade pool instead of simply raising stats." />
          <DesignQuestion>
            <strong>Why not sell permanent stat upgrades?</strong> I wanted progression to give the player more options without making earlier runs feel pointless. Unlocking a new kind of build is more interesting than just starting every run with bigger numbers.
          </DesignQuestion>
        </Box>

        <Separator my={10} />

        {/* 08 — retained in source as a longer-form note */}
        <Box mb={10} display="none">
          <SectionHeading>08 — Bosses Test What the Player Learned</SectionHeading>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }} mb={3}>
            I wanted the bosses to feel like bigger tests of things the player had already been learning. The Flame Boss controls space, the Ranged Boss keeps constant projectile pressure on you, and the Charger Boss makes finding a safe place to root much harder.
          </Text>
          <Text fontSize="md" color={{ base: 'gray.600', _dark: 'gray.300' }}>
            All three can appear in the final round, but only one boss is alive at a time. It should feel like a <strong>gauntlet</strong>, not a messy pile-up where the player can&rsquo;t tell what&rsquo;s happening.
          </Text>
        </Box>

        <Separator my={10} />

        {/* 05 */}
        <Box mb={12}>
          <SectionHeading>09 — What I Took Away From the Project</SectionHeading>
          <VStack spacing={2} align="start" mb={4}>
            <Bullet><strong>Protect the core tension</strong> &mdash; convenience features shouldn&rsquo;t quietly remove the risk that makes rooting interesting.</Bullet>
            <Bullet><strong>Make systems reinforce each other</strong> &mdash; health becoming damage, Pickup Radius growing Thorns, and enemy telegraphs interacting with root timing make systems feel connected.</Bullet>
            <Bullet><strong>Use pacing to teach complexity</strong> &mdash; rarity ramps and shop unlocks let the decision space expand after the player understands the basics.</Bullet>
            <Bullet><strong>Tune pressure in different ways</strong> &mdash; changing density, enemy variety, and durability separately creates more interesting waves than one global multiplier.</Bullet>
            <Bullet><strong>Readability beats novelty</strong> &mdash; a consistent threat language makes new enemies easier to understand when the screen gets busy.</Bullet>
            <Bullet><strong>Let progression create choices</strong> &mdash; I prefer unlocks that make new strategies possible instead of permanent upgrades that simply make the player stronger.</Bullet>
          </VStack>
          <DesignQuestion>
            <strong>What does Root &amp; Shoot show about me as a designer?</strong> For me, the project is really about taking one simple rule and seeing how much I can build around it. I wanted combat, upgrades, enemies, bosses, difficulty, and progression to all connect back to the same basic decision instead of feeling like separate systems.
          </DesignQuestion>
        </Box>
      </MotionBox>

      {/* Screenshot Gallery */}
      <MotionBox
        display="none"
        mb={{ base: 12, md: 16 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
      >
        <GradientHeading as="h2" size="xl" textAlign="center" mb={8}>
          Screenshots
        </GradientHeading>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 3, md: 4 }}>
          {screenshots.map((s) => (
            <Box
              key={s.src}
              borderRadius="xl"
              overflow="hidden"
              boxShadow="0 8px 32px rgba(0,0,0,0.12)"
              border="1px solid"
              borderColor={{ base: 'rgba(0,0,0,0.08)', _dark: 'rgba(255,255,255,0.06)' }}
              transition="transform 0.2s, box-shadow 0.2s"
              _hover={{ transform: 'scale(1.04)', boxShadow: '0 12px 40px rgba(0,0,0,0.18)' }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                width={640}
                height={360}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </MotionBox>

      {/* Case Study PDF Download */}
      <MotionBox
        mb={{ base: 12, md: 16 }}
        textAlign="center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <GradientHeading as="h2" size="lg" textAlign="center" mb={3}>
          Root and Shoot — Game Design Case Study
        </GradientHeading>
        <Text
          fontSize="md"
          color={{ base: 'gray.600', _dark: 'gray.300' }}
          maxW="md"
          mx="auto"
          mb={6}
        >
          Download the full case study as a PDF.
        </Text>
        <NextLink href="/assets/projects/Root_and_Shoot_Game_Design_Case_Study.pdf" target="_blank" rel="noopener noreferrer" download>
          <Button
            size="lg"
            borderRadius="full"
            px={{ base: 10, md: 14 }}
            py={7}
            fontWeight="bold"
            fontSize={{ base: 'lg', md: 'xl' }}
            color="white"
            bg="green.500"
            border="2px solid"
            borderColor="green.400"
            boxShadow="0 8px 30px rgba(39, 174, 96, 0.4)"
            _hover={{
              bg: 'green.400',
              transform: 'scale(1.06)',
              boxShadow: '0 12px 40px rgba(39, 174, 96, 0.55)',
            }}
            _active={{ transform: 'scale(0.98)' }}
            transition="all 0.25s ease"
          >
            ↓&nbsp; Download Case Study PDF
          </Button>
        </NextLink>
      </MotionBox>

      <ProjectNav currentSlug="root-and-shoot" />
    </MotionBox>
  );
}
