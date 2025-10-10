
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

export function PartnersSection() {
  const partners = [
    {
      name: "r/JEENEETards",
      icon: "https://styles.redditmedia.com/t5_311ttu/styles/communityIcon_9663d8r0i2af1.jpg?format=pjpg&s=245c34bb1c29b71e895b8ac8a02c53a0393aebd7",
      cover: "https://styles.redditmedia.com/t5_311ttu/styles/bannerBackgroundImage_nig86rsztgrc1.jpeg?width=2176&frame=1&auto=webp&s=1310eb256db16650637d326f287dfd417cb13022",
      platform: "Reddit community",
      description:
        `A subreddit for JEE and NEET aspirants to share resources, ask questions, and support each other in their preparation journey.`,
      link: "https://www.reddit.com/r/JEENEETards/",
      members: "465k+ members",
    },
    {
      name: "r/JEENEETards",
      icon: "https://cdn.discordapp.com/icons/1117294391707570176/a_924815811f9ed8c7712d2ee28fe0ca6e.webp?size=128",
      cover: "https://cdn.discordapp.com/splashes/1117294391707570176/c8e4535d99f391d77e5f733c64c15ef0.jpg?size=600",
      platform: "Discord server",
      description:
        `A vibrant community for JEE and NEET aspirants. Engage in discussions, share resources, and get support from peers.`,
      link: "https://discord.gg/hMUrVEp7e9",
      members: "15k+ members",
    },
    {
      name: "JEENEETards",
      icon: "https://cdn.discordapp.com/icons/741608866474754079/a_841b8a336d026b1e15916d09c739dbc9.webp?size=128",
      cover: "https://cdn.discordapp.com/banners/741608866474754079/a_0a294d900394bc9b06254ba53d95f4b4.gif?size=512",
      platform: "Discord server",
      description:
        `A vibrant community for JEE and NEET aspirants. Engage in discussions, share resources, and get support from peers.`,
      link: "https://discord.gg/yQKbveTCEK",
      members: "8.5k+ members",
    },
    {
      name: "iTeachChem",
      icon: "/iteachchemicon.png",
      cover: "/iteachchemcover.png",
      platform: "Discord server",
      description:
        `A trusted community for Chemistry in JEE & NEET. Resources, guidance, and solid problem-solving discussions.`,
      link: "https://discord.com/invite/Ust8YpSCYf",
      members: "1.4k+ members",
    },
  ];

  return (
    <section className="w-full py-16 ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
            Community Partners
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-300  mx-auto">
            Crux is built with input from real students and educators. These communities help us reach more aspirants and make better tools.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 items-center justify-center
               gap-6`}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`
  w-full
  ${partners.length === 1 ? "max-w-2xl" : ""}
  rounded-xl 
  bg-white dark:bg-[#1a1a1a]
  overflow-hidden 
  transition-all 
  ease-in-out 
  duration-200 
  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
  dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]
  hover:-translate-y-1 
  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
  dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]
`}
            >
              {/* Cover Image */}
              <div
                className="relative h-32 sm:h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${partner.cover})` }}
              ></div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    width={48}
                    height={48}
                    src={partner.icon}
                    alt={`${partner.name} Icon`}
                    className="h-12 w-12 rounded-full border border-gray-300"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white">
                      {partner.name}
                    </h3>
                    <span className="text-purple-600 text-sm font-semibold">
                      {partner.platform}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {partner.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    👥 {partner.members}
                  </span>
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl sm:text-lg self-start items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[3px_3px_0px_0px] shadow-[3px_3px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 p-2 dark:shadow-white shadow-black bg-purple-500 px-2 text-center "
                  >
                    <FaLocationArrow />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
