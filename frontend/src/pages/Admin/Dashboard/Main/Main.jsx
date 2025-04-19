/* eslint-disable no-unused-vars */
import React from "react";
import SecondaryCard from "./SecondayCard";
import VedioCard from "./VedioCard";
import RealTimeCard from "./RealTimeCard";

import {
  useGetAllMoviesQuery,
  useGetTopMoviesQuery,
} from "../../../../redux/api/movies";
import { useGetUsersQuery } from "../../../../redux/api/users";

const Main = () => {
  const { data: topMovies } = useGetTopMoviesQuery();
  const { data: visitors } = useGetUsersQuery();
  const { data: allMovies } = useGetAllMoviesQuery();

  const totalCommentsLength = allMovies?.map((m) => m.numReviews);
  const sumOfCommentsLength = totalCommentsLength?.reduce(
    (acc, length) => acc + length,
    0
  );

  return (
    <div>
      <section className="flex justify-around">
        <div className="ml-[14rem] mt-10">
          <div className="-translate-x-4 flex">
            <SecondaryCard
              pill="Users"
              content={visitors?.length}
              info="20.2k more then usual"
              gradient="from-teal-500 to-lime-400"
            />
            <SecondaryCard
              pill="Comments"
              content={sumOfCommentsLength}
              info="742.8 more then usual"
              gradient="from-[#CCC514] to-[#CDCB8E]"
            />
            <SecondaryCard
              pill="Movies"
              content={allMovies?.length}
              info="372+ more than usual"
              gradient="from-green-500 to-lime-400"
            />
          </div>

        

          <div className="w-[90%] text-white mt-10 font-bold">
            <div className="flex justify-between mb-4">
              <p>Top content</p>
              <p>Comments</p>
            </div>

            <div className="flex gap-4 flex-wrap">
              {topMovies?.map((movie) => (
                <VedioCard
                  key={movie._id}
                  image={movie.image}
                  title={movie.name}
                  date={movie.year}
                  comments={movie.numReviews}
                />
              ))}
            </div>
          </div>
        </div>

          <div>
            <RealTimeCard />
          </div>

      </section>
    </div>
  );
};

export default Main;
