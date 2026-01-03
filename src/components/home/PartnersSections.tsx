"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FiExternalLink, FiUsers } from "react-icons/fi";

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
    <section className="section bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 badge-primary"
          >
            <FiUsers className="w-4 h-4" />
            <span className="text-sm font-semibold">Community Partners</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Built With <span className="text-gradient">Community Input</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-md text-muted-foreground mx-auto max-w-2xl"
          >
            Crux is built with input from real students and educators. These communities help us reach more aspirants and make better tools.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden group hover:scale-[1.02] transition-transform"
            >
              {/* Cover Image */}
              <div className="relative h-40 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110 duration-500"
                  style={{ backgroundImage: `url(${partner.cover})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                {/* Icon Badge */}
                <div className="absolute -top-8 left-6">
                  <div className="w-16 h-16 rounded-2xl border-4 border-background overflow-hidden shadow-lg">
                    <Image
                      width={64}
                      height={64}
                      src={partner.icon}
                      alt={`${partner.name} Icon`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-10 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold">
                      {partner.name}
                    </h3>
                    <span className="inline-flex items-center text-primary text-sm font-semibold">
                      {partner.platform}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {partner.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FiUsers className="w-4 h-4" />
                      <span>{partner.members}</span>
                    </div>
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost group/link"
                    >
                      <span className="text-sm">Visit</span>
                      <FiExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
