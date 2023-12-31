import { Brackets, Github, Globe2, Linkedin, Mail } from 'lucide-preact'
import { Badge } from './components/badge'
import { LinkButton } from './components/link_button'
import { Section } from './components/section'
import { WorkItem } from './components/work_item'

export function App() {
  return (
    <div class="container mx-auto max-w-2xl space-y-8 p-8">
      <section class="flex flex-row justify-between">
        <div class="flex flex-col space-y-3">
          <div>
            <h1 class="text-3xl font-bold">Julián Poma</h1>
            <span class="font-mono text-sm text-muted">
              Detail-oriented Full Stack Engineer
            </span>
          </div>

          <div class="flex flex-row gap-x-1 print:hidden">
            <LinkButton href="mailto:julianepoma@gmail.com">
              <Mail strokeWidth={1.5} size={16} />
            </LinkButton>

            <LinkButton href="https://neucoas.bearblog.dev/blog">
              <Brackets strokeWidth={1.5} size={16} />
            </LinkButton>

            <LinkButton href="https://en.wikipedia.org/wiki/Rosario">
              <Globe2 strokeWidth={1.5} size={16} />
            </LinkButton>

            <LinkButton href="https://github.com/julianpoma/">
              <Github strokeWidth={1.5} size={16} />
            </LinkButton>

            <LinkButton href="https://www.linkedin.com/in/julianpoma">
              <Linkedin strokeWidth={1.5} size={16} />
            </LinkButton>
          </div>

          <div class="hidden text-sm print:block">
            <span class="block font-mono">julianepoma@gmail.com</span>
            <span class="block font-mono">github.com/julianpoma</span>
            <span class="block font-mono">julianpoma.com</span>
          </div>
        </div>

        <img
          class="size-28 rounded-xl print:hidden"
          src="/me.jpeg"
          alt="Julian standing next to a Piper PA-28"
        />
      </section>

      <Section title="About">
        <p class="text-md text-pretty">
          Hola! I'm a Senior Full Stack Engineer and private pilot from
          Argentina. I have 5 years of experience focusing on backend but with
          considerable time in the frontend too. I work mostly with Typescript,
          React and Node.js; currently diving into Go and Rust. I'm a motivated
          team-player that took many projects from 0-1.
        </p>
      </Section>

      <Section title="Work experience">
        <WorkItem
          company="P22 Studio"
          href="https://www.p22.studio/"
          role="Senior Full Stack Developer"
          timeline="2021 - Present"
        >
          I work in a cross-team collaboration setting that developed many 0-1
          products. These include{' '}
          <a
            class="hover:underline"
            href="https://www.hypercinema.ai/"
            target="__blank"
          >
            Hypercinema
          </a>
          ,{' '}
          <a
            class="hover:underline"
            href="https://fifaworldcupaileague.com/"
            target="__blank"
          >
            Fifa World Cup AI League
          </a>
          ,{' '}
          <a class="hover:underline" href="https://givel.ink/" target="__blank">
            Givelink
          </a>
          , and{' '}
          <a
            class="hover:underline"
            href="https://odo.p22.studio/"
            target="__blank"
          >
            Odo
          </a>
          . Led development on performance optimizations, scalability and
          database migrations. I contribute to the design of fundamental backend
          infrastructure.
        </WorkItem>

        <WorkItem
          company="Publica.la"
          href="https://publica.la/"
          role="Full Stack Developer"
          timeline="2020 - 2021"
        >
          Implemented an intake pipeline for thousands of book metadata and
          files. Contributed to the creation of Publica.la Marketplace for
          self-serve content sales. Developed new features and helped migrating
          to a serverless infraestructure.
        </WorkItem>

        <WorkItem
          company="Whyline"
          href="https://whyline.com/home"
          role="Backend Developer"
          timeline="2019 - 2020"
        >
          Contributed to the development of Whyline's mobile app backend.
          Refactored an agigng notifications server using Node.js and Redis.
        </WorkItem>
      </Section>

      <Section title="Education">
        <div>
          <div class="flex flex-row justify-between">
            <h3 class="font-semibold">Software & Systems Engineer</h3>
            <span class="text-sm tabular-nums text-muted">2019</span>
          </div>

          <span class="font-mono text-sm leading-none">
            Universidad Tecnologica Nacional
          </span>
        </div>
      </Section>

      <Section title="Skills">
        <div class="flex flex-row flex-wrap gap-1">
          <Badge>Typescript</Badge>
          <Badge>Node.js</Badge>
          <Badge>Next.js/React/Remix</Badge>
          <Badge>AWS</Badge>
          <Badge>Postgres</Badge>
        </div>
      </Section>
    </div>
  )
}
