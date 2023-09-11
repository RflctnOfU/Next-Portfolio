"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import { ProjectItems } from "../../../types/projects";
interface Projects {
  items: ProjectItems[];
}
export default function MobileProjects({ items }: Projects) {
  const pathname = usePathname();
  console.log(items);
  return (
    <div className="w-full mx-4 h-24 rounded-lg flex sm:hidden backdrop-blur-sm">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        onSlideChange={() => console.log("slide")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full"
        modules={[EffectCoverflow]}
        effect="coverflow"
        // loop
        coverflowEffect={{
          rotate: 45,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {items.length &&
          items.map((project) => (
            <SwiperSlide
              key={project.order}
              className={`h-full w-1/3 relative rounded-lg shadow-lg dark:shadow-backgroundEnd shadow-neutral-800 `}
            >
              <Link href={`/projects/${project.slug}`}>
                <Image
                  src={project.imageUrl}
                  alt=""
                  fill
                  className={`absolute rounded-lg object-cover ${
                    pathname === "/projects/" + project.slug
                      ? "brightness-100"
                      : "brightness-[.6]"
                  }`}
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
