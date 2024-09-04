import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FiChevronsRight } from 'react-icons/fi';
type JobData = {
  jobPosition: string;
  companyName: string;
  companyShortName: string;
  companyNameLink?: string;
  date: string;
  description: string[];
  value: string;
  id: number;
};
type Props = {
  data: JobData[];
};

const ExpTabs = ({ data }: Props) => {
  return (
    <Tabs defaultValue={data[0].value} className="lg:flex my-14">
      {/* Render a single TabsList containing all the triggers */}
      <TabsList className="p-10 items-start">
        {data.map((job) => (
          <TabsTrigger className="mb-3" key={job.id} value={job.value}>
            {job.companyShortName}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Render TabsContent for each job */}
      {data.map((job) => (
        <TabsContent key={job.id} value={job.value}>
          <div className="flex flex-col font-bold mb-5">
            <div className="flex">
              <h3 className="text-xl text-white tracking-wider mr-2">
                {job.jobPosition}
              </h3>
              <span className="text-purple-100 text-lg">@</span>{' '}
              <span className="text-purple-100">{job.companyName}</span>
            </div>
            <p className="self-start text-gray-400 my-1 ml-3 text-xs">
              {job.date}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {job.description.map((desc, i) => (
              <div key={i} className="flex">
                <span className="text-purple-100 m-2">
                  <FiChevronsRight />
                </span>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ExpTabs;
