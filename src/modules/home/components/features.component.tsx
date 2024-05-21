import { BarbellIcon, KettleBellIcon, RunningIcon } from "@/modules/common/icons";
import { sairaCondensed } from "@/app/fonts";

const features = [
  {
    id: "dd3386e3-771a-4e3c-8bb4-936451ec9f22",
    tile: "Cardio",
    icon: <RunningIcon className="text-stone-700 w-[80px] md:w-[100px]" />
  },
  {
    id: "58dcbda9-c29c-4396-8bd1-3b482e9af183",
    tile: "Weight",
    icon: <BarbellIcon className="text-stone-700 w-[80px] md:w-[100px]" />
  },
  {
    id: "e00b0221-14a5-4aa3-860e-2494554896a8",
    tile: "Exercise",
    icon: <KettleBellIcon className="text-stone-700 w-[90px] md:w-[110px]" />
  },
];

export const Features = () => {
  return (
    <section className="w-screen md:w-[600px] md:mx-auto md:rounded-3xl md:shadow-lg md:mt-[-75px] bg-white py-5 md:relative md:z-[200]">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        {features.map((feature) =>{
          return (
            <div key={feature.id} className="flex flex-col items-center gap-y-2">
              {feature.icon}
              <div
                key={feature.id}
                className={`${sairaCondensed} text-primary font-bold uppercase text-xl`}
              >{feature.tile}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
