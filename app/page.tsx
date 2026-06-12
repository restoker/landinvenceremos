
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import Header from '@/components/header';
import Image from 'next/image';
import CardSection from '@/components/CardSection';
import PlanTrabajo from '@/components/PlanTrabajo';
import { ArchiveBoxArrowDownIcon, BuildingOffice2Icon, UserCircleIcon } from '@heroicons/react/24/outline';
import CurveTextTrail from '@/components/CurveTextTrail';
// import PlanTrabajo from '@/components/PlanTrabajo';

const features = [
  {
    name: 'Legalidad y competencia municipal.',
    description: 'Toda acción municipal se ejecutará dentro del marco de la Constitución Política del Perú, la Ley Orgánica de Municipalidades, el presupuesto público, Invierte.pe, contrataciones del Estado, transparencia, control gubernamental y demás normativa aplicable..',
    icon: FingerPrintIcon,
  },
  {
    name: 'Servicio al vecino.',
    description: 'La municipalidad debe simplificar, atender y resolver. Los trámites, servicios, programas y proyectos responderán a las necesidades reales de barrios, APV, urbanizaciones, comunidades y zonas periurbanas.',
    icon: LockClosedIcon,
  },
  {
    name: 'Transparencia y rendición de cuentas.',
    description: 'La información sobre obras, presupuesto, contrataciones, arbitrios, proyectos, avances y metas será pública, verificable, actualizada y de fácil acceso para la ciudadanía.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Eficiencia y austeridad.',
    description: 'Cada sol público deberá estar vinculado a resultados concretos, evitando duplicidad de gastos, improvisación, intervenciones innecesarias y proyectos sin sostenibilidad.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Equidad territorial.',
    description: 'La intervención municipal priorizará sectores según brechas, población, riesgo, urgencia, accesibilidad y nivel de abandono territorial.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Innovación pública.',
    description: 'La gestión incorporará tecnología, mapas, datos, aplicativos, cámaras, tableros de control y herramientas digitales al servicio de la población.',
    icon: ServerIcon,
  },
  {
    name: 'Participación ciudadana',
    description: 'Los vecinos participarán en la priorización, vigilancia, seguimiento y evaluación de programas y proyectos mediante mecanismos formales, territoriales y digitales.',
    icon: UserCircleIcon,
  },
  {
    name: 'Interculturalidad e identidad Sebastiana.',
    description: 'La gestión reconocerá y promoverá la identidad histórica, cultural, andina, comunal y urbana del distrito de San Sebastián.',
    icon: BuildingOffice2Icon,
  },
]

const navigation = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Vmaranyaa/',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/vladiaranya/',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  // {
  //   name: 'X',
  //   href: '#',
  //   icon: (props: React.SVGProps<SVGSVGElement>) => (
  //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
  //       <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
  //     </svg>
  //   ),
  // },
  {
    name: 'Tiktok',
    href: 'https://www.tiktok.com/@vladimiraranya',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="100%" height="100%" {...props}>
        <path
          fillRule="evenodd"
          d="M448 209.91a210.06 210.06 0 0 1 -122.8-39.3V349.3A162.57 162.57 0 1 1 185 188.31V278.2a74.6 74.6 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.32z"
          fill="#fff"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@vladimirmarioaranyaaranya6335',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]


export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-800">
      {/* Header */}

      <Header />

      <main>
        {/* Hero section */}
        <div id="hero-section" className="relative isolate">
          {/* <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
          </svg> */}
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              {/* <div className="flex">
                <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:bg-white/5 dark:text-gray-300 dark:ring-white/10 dark:hover:ring-white/20">
                  <span className="font-semibold text-red-600 dark:text-red-400">We’re hiring</span>
                  <span aria-hidden="true" className="h-4 w-px bg-gray-900/10 dark:bg-white/10" />
                  <a href="#" className="flex items-center gap-x-1">
                    <span aria-hidden="true" className="absolute inset-0" />
                    See open positions
                    <ChevronRightIcon aria-hidden="true" className="-mr-2 size-5 text-gray-400" />
                  </a>
                </div>
              </div> */}
              <h1 className="mt-10 text-5xl font-bold tracking-tight text-pretty text-red-600 sm:text-7xl dark:text-red-600">
                Vladi Aranya <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-green-600 to-lime-400 italic text-4xl sm:text-6xl font-light px-1">
                  !Sebastiano como tú!
                </span>
              </h1>
              <p className="mt-8 text-lg font-normal text-pretty text-green-600 sm:text-xl/8 dark:text-green-400">
                San Sebastian <span className="font-light text-red-600">"Venceremos"</span>.
              </p>
              {/* text svg start */}
              {/* <svg viewBox="0 0 800 200">
                <path id="curve" d="M 10,150 Q 400,50 790,150" fill="none" />

                <text>
                  <textPath href="#curve" startOffset="0%">
                    Animating SVG text with GSAP is awesome!
                  </textPath>
                </text>
              </svg> */}
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/img/PLAN-DE-TRABAJO-VLADI-ARANYA.pdf"
                  className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:bg-red-500 dark:hover:bg-red-400 dark:focus-visible:outline-red-500 flex items-center gap-x-2"
                  download
                >
                  <ArchiveBoxArrowDownIcon className="size-5" />
                  Plan de gobierno 2026 - 2030
                </a>
                <div className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  <span aria-hidden="true">←</span> Presiona aquí para descargar
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow flex justify-center items-center">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                src="/img/vladilogo.png"
                className="w-96 h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Feature section */}
        <div id="principles-section" className="mx-auto mt-12 max-w-7xl px-6 sm:mt-36 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            {/* <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">Deploy faster</h2> */}
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
              Nuestros Principios
            </p>
            <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
              Los principios políticos y de gestión que orientan el presente Plan de Gobierno Municipal son los siguientes:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-red-600 dark:bg-red-500">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Testimonial section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20 dark:bg-black dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-0 dark:after:inset-ring dark:after:inset-ring-white/10 dark:after:sm:rounded-3xl">
            <img
              alt=""
              src="/img/banner.avif"
              className="absolute inset-0 size-full object-cover saturate-100"
            />
            <div className="absolute inset-0 bg-zinc-900/90 mix-blend-multiply" />
            {/* <div aria-hidden="true" className="absolute -top-56 -left-80 transform-gpu blur-3xl">
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-1097/845 w-274.25 bg-linear-to-r from-[#90ff46] to-[#e5ff6f] opacity-[0.05] dark:opacity-[0.30]"
              />
            </div> */}
            {/* <div
              aria-hidden="true"
              className="hidden md:absolute md:bottom-16 md:left-200 md:block md:transform-gpu md:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-1097/845 w-274.25 bg-linear-to-r from-[#ff4694] to-[#776fff] opacity-25 dark:opacity-20"
              />
            </div> */}
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <img
                alt=""
                src="/img/logo.png"
                className="h-16 w-auto dark:hidden"
              />
              <img
                alt=""
                src="/img/logo.png"
                className="h-16 w-auto not-dark:hidden"
              />
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl/8">
                  <p>
                    “Te invitamos a ser parte del gran proyecto de inclusión, participación y transformación de nuestro distrito. Juntos construiremos propuestas, escucharemos ideas y fortaleceremos el futuro que todos merecemos.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white dark:text-gray-200">
                  <div className="font-semibold">Mgtr. Vlady Aranya</div>
                  <div className="mt-1">Candidato.</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Pricing section */}
        <div className="relative isolate mt-32 px-6 sm:mt-56 lg:px-8">
          {/* <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20"
            />
          </div> */}
          <div className="mx-auto max-w-4xl text-center">
            {/* <h2 className="text-base/7 font-semibold text-red-600 dark:text-red-400">Pricing</h2> */}
            <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
              Te invitamos a ser parte del gran proyecto
            </p>
          </div>
          <p className="italic mx-auto mt-6 max-w-2xl text-center text-lg/8 text-pretty text-gray-600 dark:text-gray-400">
            Con VLADI ARANYA impulsaremos una gestión que apueste por la gente, el talento y el esfuerzo de nuestros vecinos 🙌.
          </p>

          <CardSection />

        </div>

        {/* FAQ section */}
        <div id="work-plan-section" className="mx-auto mt-12 max-w-7xl px-6 sm:mt-36 lg:px-8 h-dvh">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white text-center py-10">
              Plan de trabajo
            </h2>

            {/* <div style={{ width: '100%', height: '500px' }}>
              <embed
                src={`/img/PLAN-DE-TRABAJO-VLADI-ARANYA.pdf#toolbar=0`}
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </div> */}

            <PlanTrabajo />
          </div>
        </div>

        <div className="mt-12 px-6 sm:mt-36 lg:px-8 relative">
          {/* <div className="mx-auto max-w-4xl"> */}
          {/* <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white text-center py-10">
              Plan de trabajo
            </h2> */}

          <CurveTextTrail />

          {/* </div> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center gap-x-6 md:order-2">
            {navigation.map((item) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0 dark:text-gray-400">
            Movimiento venceremos.
          </p>
        </div>
      </footer>
    </div>
  );
}
