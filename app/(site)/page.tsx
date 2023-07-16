import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image'
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className=" max-w-5xl mx-auto py-20">
      <h1 className=" text-7xl font-extrabold">
        Hello I'm <span className=" bg-gradient-to-r from-orange-300 via-yellow-300 to-purple-500 bg-clip-text text-transparent">
          Sukhman!
        </span>
      </h1>
      <p className=" mt-3 text-xl text-gray-600">
        Aloha everyone! Welcome to my website.
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        My Projects
      </h2>
      <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      {projects.map((project)=>(
        <Link href={`/projects/${project.slug}`} key={project._id} className=" border border-gray-500 rounded-lg hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image src={project.image} alt={project.name} width={200} height={200} className=" mt-2 object-cover rounded-lg border border-gray-500"/>
          )}
          <div className=" mx-auto mt-2 font-extrabold bg-gradient-to-r from-orange-300 via-yellow-300 to-purple-500 bg-clip-text text-transparent pt-2 pb-2 pl-1">{project.name}</div>
        </Link>
      ))}</div>
    </div>
  )
}